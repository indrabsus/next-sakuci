// services/authService.ts
export async function handleLogin(username: string, password: string) {
    try {
        const response = await fetch('https://sakuci.id/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok && data.status === 200) {
            return { 
                success: true, 
                token: data.data.token, 
                username: data.data.data.username, 
                id: data.data.data.id,
                acc: data.data.data.acc,
                id_role: data.data.data.id_role 
            };
        } else {
            return { success: false, message: "Login Gagal! Silakan cek kembali username dan password." };
        }
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: "Terjadi kesalahan pada server. Silakan coba lagi." };
    }
}
