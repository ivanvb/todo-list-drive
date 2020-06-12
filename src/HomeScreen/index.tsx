import React, { useEffect, useState } from 'react';
import { GoogleDrive } from '../Google/Drive/GoogleDrive';
import Todo from '../Todo/Todo';

const HomeScreen = () => {
    const [todos, setTodos] = useState<any>(null);
    useEffect(() => {
        async function getSavedData() {
            const id = await GoogleDrive.getSavedData();
            const response = await GoogleDrive.getFileContent(id);
            const data = JSON.parse(response.body);
            setTodos(data);
        }

        getSavedData();
    }, []);

    return (
        <>
            {todos !== null && (
                <div>
                    <h1 className="text-4xl font-black text-gray-800 text-center">ToDo List</h1>
                    <Todo todos={todos} />
                </div>
            )}
        </>
    );
};

export default HomeScreen;
