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
            return { success: true, token: data.data.token };
        } else {
            return { success: false, message: "Login Gagal! Silakan cek kembali username dan password." };
        }
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: "Terjadi kesalahan pada server. Silakan coba lagi." };
    }
}
