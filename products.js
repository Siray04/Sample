const products = [
    {
        id: 1,
        name: "Sofa Modern Luxury",
        price: 7200000,
        oldPrice: 8500000,
        category: "sofa",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
        rating: 4.5,
        badge: "Baru",
        description: "Sofa modern dengan desain elegan dan bahan berkualitas tinggi. Nyaman untuk ruang keluarga Anda dengan padding yang empuk dan frame yang kokoh.",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Sofa ini terbuat dari bahan fabric premium dengan frame kayu jati solid. Dilengkapi dengan bantal empuk yang dapat dilepas untuk mudah dibersihkan. Cocok untuk ruang tamu modern dengan kapasitas 3-4 orang. Desainnya menggabungkan estetika kontemporer dengan kenyamanan maksimal, membuatnya ideal untuk keluarga yang aktif.",
        specifications: {
            "Material": "Fabric Premium + Kayu Jati",
            "Dimensi": "200 x 90 x 85 cm",
            "Berat": "45 kg",
            "Warna": "Abu-abu, Coklat",
            "Garansi": "2 Tahun"
        },
        reviews: [
            { author: "Budi Santoso", rating: 5, text: "Sangat nyaman dan elegan! Cocok sekali untuk ruang tamu saya.", date: "2025-11-01" },
            { author: "Siti Aminah", rating: 4, text: "Bagus, tapi pengiriman agak lama. Kualitas bahan sangat baik.", date: "2025-10-15" }
        ]
    },
    {
        id: 2,
        name: "Meja Makan Minimalis",
        price: 5500000,
        category: "meja",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        rating: 4.0,
        description: "Meja makan dengan desain minimalis, cocok untuk ruang makan modern. Terbuat dari kayu solid dengan finishing yang tahan lama.",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Meja makan ini dirancang untuk 6 orang dengan permukaan anti-gores. Mudah dirakit dan tahan lama untuk penggunaan sehari-hari. Desain minimalisnya memungkinkan integrasi mudah dengan berbagai gaya interior, dari skandinavia hingga kontemporer.",
        specifications: {
            "Material": "Kayu Solid",
            "Dimensi": "150 x 90 x 75 cm",
            "Berat": "30 kg",
            "Warna": "Natural Kayu",
            "Garansi": "1 Tahun"
        },
        reviews: [
            { author: "Andi Pratama", rating: 4, text: "Cocok untuk keluarga kecil. Mudah dibersihkan.", date: "2025-10-20" },
            { author: "Rina Dewi", rating: 4.5, text: "Desain sederhana tapi elegan. Puas sekali!", date: "2025-09-05" }
        ]
    },
    {
        id: 3,
        name: "Tempat Tidur King Size",
        price: 12000000,
        category: "tempat-tidur",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        rating: 5.0,
        badge: "Populer",
        description: "Tempat tidur king size yang nyaman dengan bahan premium. Headboard yang empuk dan frame yang kokoh memberikan kenyamanan maksimal.",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Tempat tidur ini menawarkan ruang tidur luas dengan headboard empuk untuk membaca atau bersandar. Frame kayu solid memastikan durabilitas tinggi, sementara desainnya yang mewah cocok untuk kamar master modern.",
        specifications: {
            "Material": "Kayu Mahoni + Fabric",
            "Dimensi": "200 x 200 x 120 cm",
            "Berat": "80 kg",
            "Warna": "Putih, Hitam",
            "Garansi": "5 Tahun"
        },
        reviews: [
            { author: "Joko Widodo", rating: 5, text: "Sangat nyaman, tidur lebih lelap sekarang.", date: "2025-11-10" },
            { author: "Maria Ulfa", rating: 5, text: "Kualitas premium, worth the price!", date: "2025-10-25" }
        ]
    },
    {
        id: 4,
        name: "Kursi Kantor Ergonomis",
        price: 2750000,
        oldPrice: 3200000,
        category: "kursi",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
        rating: 3.5,
        description: "Kursi kantor ergonomis yang mendukung postur tubuh yang baik. Dilengkapi dengan adjustable height dan lumbar support.",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Kursi ini dirancang untuk penggunaan jangka panjang dengan fitur penyesuaian lengkap. Lumbar support membantu mengurangi nyeri punggung, ideal untuk pekerja remote atau office.",
        specifications: {
            "Material": "Mesh + Logam",
            "Dimensi": "60 x 60 x 110-120 cm",
            "Berat": "15 kg",
            "Warna": "Hitam",
            "Garansi": "1 Tahun"
        },
        reviews: [
            { author: "Ahmad Yani", rating: 4, text: "Ergonomis sekali, punggung tidak sakit lagi.", date: "2025-09-15" }
        ]
    },
    {
        id: 5,
        name: "Lemari Pakaian 3 Pintu",
        price: 6800000,
        category: "lemari",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
        rating: 4.2,
        description: "Lemari pakaian 3 pintu dengan desain modern. Dilengkapi dengan rak yang dapat disesuaikan dan laci yang luas.",
        images: [
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        ],
        fullDescription: "Lemari ini menawarkan penyimpanan luas dengan partisi yang fleksibel. Pintu dengan cermin opsional menambah fungsionalitas untuk ruang ganti.",
        specifications: {
            "Material": "Particle Board + Melamin",
            "Dimensi": "180 x 60 x 200 cm",
            "Berat": "90 kg",
            "Warna": "Putih, Coklat",
            "Garansi": "2 Tahun"
        },
        reviews: [
            { author: "Dewi Sartika", rating: 4, text: "Ruang penyimpanan banyak, desain modern.", date: "2025-08-20" },
            { author: "Raden Adjeng", rating: 4.5, text: "Mudah dirakit, kualitas bagus.", date: "2025-07-10" }
        ]
    },
    {
        id: 6,
        name: "Meja Kerja Modern",
        price: 3200000,
        category: "meja",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        rating: 4.3,
        badge: "Baru",
        description: "Meja kerja modern dengan storage yang praktis. Cocok untuk home office dengan desain yang minimalis dan fungsional.",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Meja ini dilengkapi laci dan rak untuk organisasi yang baik. Permukaan luas untuk monitor dan aksesoris kerja.",
        specifications: {
            "Material": "Kayu Laminasi",
            "Dimensi": "140 x 70 x 75 cm",
            "Berat": "25 kg",
            "Warna": "Hitam, Putih",
            "Garansi": "1 Tahun"
        },
        reviews: [
            { author: "Surya Kusuma", rating: 4.5, text: "Praktis untuk WFH.", date: "2025-11-05" }
        ]
    },
    {
        id: 7,
        name: "Sofa Bed Multifungsi",
        price: 4500000,
        category: "sofa",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
        rating: 4.2,
        description: "Sofa yang dapat diubah menjadi tempat tidur, sangat multifungsi untuk ruang tamu atau ruang guest.",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Mekanisme lipat mudah dengan storage di bawah. Ideal untuk apartemen kecil dengan ruang terbatas.",
        specifications: {
            "Material": "Fabric + Logam",
            "Dimensi": "190 x 90 x 85 cm (sofa), 190 x 120 x 40 cm (bed)",
            "Berat": "50 kg",
            "Warna": "Biru, Abu-abu",
            "Garansi": "2 Tahun"
        },
        reviews: [
            { author: "Larasati Putri", rating: 4, text: "Multifungsi dan nyaman.", date: "2025-10-10" },
            { author: "Rama Aditya", rating: 4.5, text: "Bagus untuk tamu menginap.", date: "2025-09-20" }
        ]
    },
    {
        id: 8,
        name: "Kursi Makan Minimalis",
        price: 1200000,
        category: "kursi",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
        rating: 4.0,
        badge: "Terlaris",
        description: "Kursi makan dengan desain minimalis, cocok untuk berbagai konsep ruang makan. Nyaman dan mudah dibersihkan.",
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Kursi dengan jok empuk dan kaki kokoh. Dijual per unit atau set, mudah dipadukan dengan meja apa saja.",
        specifications: {
            "Material": "Kayu + Jok Fabric",
            "Dimensi": "45 x 45 x 90 cm",
            "Berat": "8 kg",
            "Warna": "Coklat, Hitam",
            "Garansi": "1 Tahun"
        },
        reviews: [
            { author: "Indah Permata", rating: 4, text: "Nyaman untuk makan sehari-hari.", date: "2025-08-15" }
        ]
    },
    {
        id: 9,
        name: "Lemari TV Modern",
        price: 4800000,
        category: "lemari",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
        rating: 4.1,
        description: "Lemari TV dengan desain modern, dilengkapi storage untuk perangkat elektronik.",
        images: [
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        ],
        fullDescription: "Lemari dengan rak terbuka dan tertutup untuk TV hingga 55 inch. Desain floating opsional untuk tampilan modern.",
        specifications: {
            "Material": "Particle Board",
            "Dimensi": "160 x 40 x 50 cm",
            "Berat": "35 kg",
            "Warna": "Hitam Glossy",
            "Garansi": "2 Tahun"
        },
        reviews: [
            { author: "Fajar Nugroho", rating: 4, text: "Pas untuk ruang keluarga.", date: "2025-11-15" },
            { author: "Lina Marlina", rating: 4.2, text: "Storage banyak, rapi.", date: "2025-10-05" }
        ]
    },
    {
        id: 10,
        name: "Tempat Tidur Single",
        price: 3500000,
        category: "tempat-tidur",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        rating: 4.6,
        description: "Tempat tidur single untuk kamar anak atau guest room, nyaman dan durable.",
        images: [
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
            "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
        ],
        fullDescription: "Tempat tidur dengan frame kuat dan matras support yang baik. Cocok untuk remaja atau ruang tamu cadangan.",
        specifications: {
            "Material": "Kayu + Spring Bed",
            "Dimensi": "100 x 200 x 100 cm",
            "Berat": "40 kg",
            "Warna": "Biru, Putih",
            "Garansi": "3 Tahun"
        },
        reviews: [
            { author: "Tono Susanto", rating: 5, text: "Anak saya suka sekali.", date: "2025-09-25" }
        ]
    }
];