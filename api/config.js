// File: api/config.js
export default function handler(req, res) {
    // Membaca Client Key dari Environment Vercel dan mengirimkannya ke Frontend
    res.status(200).json({
        midtrans_client_key: process.env.MIDTRANS_CLIENT_KEY || ""
    });
}