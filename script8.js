const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];


let sisaStokKeseluruhan=0; 
let totalTerjualKeseluruhan=0; 
let penulisTerlaris=0; 

function getInfoPenjualan(dataPenjualanNovel) { 
        const hasil ={ 
            totalKeuntungan:0, 
            totalModal:0, 
            presentaseKeuntungan:0, 
            produkBukuTerlaris:"", 
            penulisTerlaris:"", 
        } 
     
        dataPenjualanNovel.map((item)=>{ 
        sisaStokKeseluruhan =item.totalTerjual + item.sisaStok 
     
            //Total Keuntungan 
            hasil.totalKeuntungan += item.hargaJual - item.hargaBeli; 
     
            //Total Modal 
            hasil.totalModal += sisaStokKeseluruhan * item.hargaBeli; 
     
            //Presentase Keuntungan 
            hasil.presentaseKeuntungan = hasil.totalModal/item.hargaBeli 
     
            //Produk Buku Terlaris 
            if(item.totalTerjual>totalTerjualKeseluruhan){ 
                hasil.produkBukuTerlaris= item.namaProduk 
                totalTerjualKeseluruhan = item.totalTerjual 
            } 
     
            //Penulis Terlaris 
            if(item.totalTerjual>penulisTerlaris){ 
                hasil.penulisTerlaris= item.penulis 
                penulisTerlaris = item.totalTerjual 
            } 
        }); 
     
        return hasil 
    }



console.log(getInfoPenjualan(dataPenjualanNovel));