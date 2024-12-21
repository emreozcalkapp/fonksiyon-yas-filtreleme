// Bir obje dizisinde yaşı 18’den büyük olan kişileri bulan bir fonksiyon yazın.

// Adımlar:  

// Obje dizisi üzerinde filter çalıştırılır.

// Her obje için yaş > 18 kontrol edilir.

// Yeni obje dizisi döndürülür.

const persons = [
    {
        id: 1,
        firstName: "Emre",
        lastName: "Özçalkap",
        age: 24
    },
    {
        id: 2,
        firstName: "Görkem",
        lastName: "Süslü",
        age: 25
    },
    {
        id:3,
        firstName: "Emir",
        lastName: "Ünal",
        age: 24
    },
    {
        id:4,
        firstName: "Elif",
        lastName: "Çavuş",
        age: 9
    },
    {
        id: 5,
        firstName: "Ömer",
        lastName: "Kaya",
        age: 15
    }
];

const sonuc = persons.filter(person => person.age > 18);

console.log(sonuc);