import { Dispatch } from 'react';
import { LOGGED_STATUS } from '../loggedStatus';

//gapi is defined in @types/gapi

export class GoogleAuth {
    private SCOPES = 'https://www.googleapis.com/auth/drive.appdata';

    constructor(private setLoggedStatus: Dispatch<any>) {
        this.createGoogleScriptHTMLTag();
    }

    private createGoogleScriptHTMLTag() {
        const script: any = document.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = () => {
            gapi.load('client:auth2', () => {
                this.init();
            });
        };
        document.body.appendChild(script);
    }

    private async init(): Promise<void> {
        await gapi.client.init({
            apiKey: process.env.REACT_APP_API_KEY,
            clientId: process.env.REACT_APP_CLIENT_ID,
            scope: this.SCOPES,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        });
        this.updateLoggedStatus();
        gapi.auth2.getAuthInstance().isSignedIn.listen(() => {
            this.updateLoggedStatus();
        });
        return;
    }

    private updateLoggedStatus(): void {
        this.setLoggedStatus(this.computeLoggedStatus());
    }

    private computeLoggedStatus(): LOGGED_STATUS {
        return gapi.auth2.getAuthInstance().isSignedIn.get()
            ? LOGGED_STATUS.LOGGED_IN
            : LOGGED_STATUS.LOGGED_OUT;
    }

    public async signIn(): Promise<void> {
        await gapi.auth2.getAuthInstance().signIn();
    }
    public async signOut(): Promise<void> {
        await gapi.auth2.getAuthInstance().signOut();
    }
}
