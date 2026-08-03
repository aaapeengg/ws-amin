export const payments = [
  {
    category: "QRIS",
    methods: [
      {
        id: "qris",
        name: "QRIS",
        subtitle: "Scan semua E-Wallet",
        image: "/payments/qris.png",
        eta: "±1 Menit",
      },
    ],
  },

  {
    category: "E-Wallet",
    methods: [
      {
        id: "dana",
        name: "DANA",
        subtitle: "Pembayaran instan",
        image: "/payments/dana.png",
        eta: "Instant",
      },
      {
        id: "gopay",
        name: "GoPay",
        subtitle: "Pembayaran instan",
        image: "/payments/gopay.png",
        eta: "Instant",
      },
      {
        id: "ovo",
        name: "OVO",
        subtitle: "Pembayaran instan",
        image: "/payments/ovo.png",
        eta: "Instant",
      },
      {
        id: "shopeepay",
        name: "ShopeePay",
        subtitle: "Pembayaran instan",
        image: "/payments/shopeepay.png",
        eta: "Instant",
      },
    ],
  },

  {
    category: "Virtual Account",
    methods: [
      {
        id: "bca",
        name: "BCA Virtual Account",
        subtitle: "Verifikasi otomatis",
        image: "/payments/bca.png",
        eta: "±1 Menit",
      },
      {
        id: "bri",
        name: "BRI Virtual Account",
        subtitle: "Verifikasi otomatis",
        image: "/payments/bri.png",
        eta: "±1 Menit",
      },
    ],
  },
];