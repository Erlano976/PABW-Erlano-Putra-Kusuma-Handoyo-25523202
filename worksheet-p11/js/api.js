// js/api.js
const ALAMAT = "https://raw.githubusercontent.com/Erlano976/PABW-Erlano-Putra-Kusuma-Handoyo-25523202/refs/heads/main/worksheet-p10/data/album.json";

export async function ambilAlbum() {
    try {
        const respons = await fetch(ALAMAT);
        if (!respons.ok) {
            throw new Error('status' + respons.status)
        }
        const data = await respons.json();
        console.log(data);
        console.log(data[0]?.judul);

        const badan = JSON.stringify({ judul: "Judul contoh", genre: "Nu Metal" });
        console.log(typeof badan);

        return data;
    } catch (galat) {
        console.error("gagal memuat album", galat.message);
        throw galat;
    }
}