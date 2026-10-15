// js/api.js
const ALAMAT = 'data/proyek.json';

export async function ambilAlbum() {
    try {
        const respons = await fetch(ALAMAT);
        if (!respons .ok) {
            throw new Error('status'+ respons .status)
        }   
        const data = await respons .json();
        return data;
    } catch (galat) {
        console.error('gagal memuat', galat .messege);
        throw galat;
    }
} 