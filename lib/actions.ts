'use server';

import { Ragie } from 'ragie';
import { revalidatePath } from 'next/cache';

// Initialize the Ragie client once
const ragie = new Ragie({
    auth: process.env.RAGIE_API_KEY!,
});

export async function uploadFile(formData: FormData) {
    const file = formData.get('file') as File;
    const { id } = await ragie.documents.create({
        file,
        name: file.name,
        mode: "hi_res",
    });
    revalidatePath('/');
    return id;
}

export async function getUploadedFiles() {
    const response = await ragie.documents.list();
    if (response.result && Array.isArray(response.result.documents)) {
        return response.result.documents;
    }
    return [];
}

export async function deleteDocument(id: string) {
    await ragie.documents.delete({ documentId: id });
    revalidatePath('/');
}

export async function queryRagie(queryText: string) {
    const response = await ragie.retrievals.retrieve({
        query: queryText,
    });
    return response.scoredChunks;
}
