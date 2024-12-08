export interface Profiles {
    id: string;
    nama_lengkap: string;
    jenkel: string;
    nama_role: string;
    // Tambahkan properti lain sesuai kebutuhan
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}