export class GoogleDrive {
    private static FILENAME = 'data.json';
    private static id: string = '';

    public static async getSavedData(): Promise<string> {
        const fileList = await gapi.client.drive.files.list({
            q: `name="${this.FILENAME}"`,
            spaces: 'appDataFolder',
        });

        const result = fileList.result.files!;
        let id: string;
        if (result?.length === 0) {
            id = await this.createConfigFile();
        } else {
            id = result[0].id!;
        }

        return id;
    }

    private static async createConfigFile() {
        const initialData = JSON.stringify([]);
        const boundary = '-------314159265358979323846';
        const delimiter = '\r\n--' + boundary + '\r\n';
        const close_delim = '\r\n--' + boundary + '--';

        const contentType = 'application/json';
        const metadata = {
            name: this.FILENAME,
            mimeType: contentType,
            parents: ['appDataFolder'],
        };

        const multipartRequestBody =
            delimiter +
            'Content-Type: application/json\r\n\r\n' +
            JSON.stringify(metadata) +
            delimiter +
            'Content-Type: ' +
            contentType +
            '\r\n\r\n' +
            initialData +
            close_delim;

        const request = await gapi.client.request({
            path: '/upload/drive/v3/files',
            method: 'POST',
            params: { uploadType: 'multipart' },
            headers: {
                'Content-Type': 'multipart/related; boundary="' + boundary + '"',
            },
            body: multipartRequestBody,
        });

        return request.result.id;
    }

    public static async getFileContent(id: string) {
        const fileData = await gapi.client.drive.files.get({
            fileId: id,
            alt: 'media',
        });

        return fileData;
    }

    public static setId(id: string) {
        this.id = id;
    }

    public static async updateFileContent(data: object, id: string = this.id) {
        const req = await gapi.client.request({
            path: '/upload/drive/v3/files/' + id,
            method: 'PATCH',
            params: {
                uploadType: 'media',
            },
            body: JSON.stringify(data),
        });

        return req;
    }

    public static async deleteFile(id: string) {
        const req = await gapi.client.drive.files.delete({ fileId: id });
        return req;
    }
}
