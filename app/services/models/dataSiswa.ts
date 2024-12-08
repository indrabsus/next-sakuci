export async function getDataSiswa(){
    try {
        const response = await fetch('https://sakuci.id/api/datasiswa', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        if (response.ok && data.status === 200) {
            return { success: true, data: data.data };
        } else {
            return { success: false, message: "Data Siswa Tidak Ditemukan." };
        }
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: "Terjadi kesalahan pada server. Silakan coba lagi." };
    }
}

export async function getDataSiswaById(id: string){
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`https://sakuci.id/api/datasiswa/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();
        if (response.ok && data.status === 200) {
            return { success: true, data: data.data };
        } else {
            return { success: false, message: "Data Siswa Tidak Ditemukan." };
        }
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: "Terjadi kesalahan pada server. Silakan coba lagi." };
    }
}
    