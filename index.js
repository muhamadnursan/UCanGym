let classGym = {
  mindBody: {
    description:
      "Get rid out the negtive energy by join mindBody exercise programs!",
    schedule: [
      { hari: "Senin", waktu: "13.00" },
      { hari: "Selasa", waktu: "14.00" },
      { hari: "Rabu", waktu: "15.00" },
    ],
    price: 200_000,
    durasi: 120,
    url: "pics/mindbody.jpeg",
    color: "blue",
  },
  yoga: {
    description: "Do yoga and find happiness, <br>Grab it fast!!",
    schedule: [
      { hari: "Senin", waktu: "11.00" },
      { hari: "Selasa", waktu: "12.00" },
      { hari: "Rabu", waktu: "11.00" },
    ],
    price: 300_000,
    durasi: 90,
    url: "pics/yoga.jpeg",
    color: "yellow",
  },
  zoomba: {
    description: "Make your move and get healty by join <br>Ucan Zoomba!",
    schedule: [
      { hari: "Kamis", waktu: "13.00" },
      { hari: "Jumat", waktu: "14.00" },
      { hari: "Sabtu", waktu: "15.00" },
    ],
    price: 250_000,
    durasi: 100,
    url: "pics/zomba.jpeg",
    color: "red",
  },
  cardio: {
    description: "find out exactly what cardio & training is best for you!",
    schedule: [
      { hari: "Senin", waktu: "12.00" },
      { hari: "Selasa", waktu: "13.00" },
      { hari: "Rabu", waktu: "10.00" },
    ],
    price: 350_000,
    durasi: 60,
    url: "pics/cardio.jpeg",
    color: "green",
  },
  dance: {
    description:
      "We'll teach you the ultimate formula for sustained weight loss !",
    schedule: [
      { hari: "Kamis", waktu: "14.00" },
      { hari: "Jumat", waktu: "15.00" },
      { hari: "Rabu", waktu: "09.00" },
    ],
    price: 350_000,
    durasi: 60,
    url: "pics/dance.jpeg",
    color: "violet",
  },
  mma: {
    description: "Gain muscle and lose fat at the same time by join MMA",
    schedule: [
      { hari: "Sabtu", waktu: "13.00" },
      { hari: "Selasa", waktu: "10.00" },
      { hari: "Rabu", waktu: "14.00" },
    ],
    price: 350_000,
    durasi: 60,
    url: "pics/mma.jpeg",
    color: "purple",
  },
};
let testimoni = [
  {
    nama: "Arya Kuat",
    testi:
      "“Nggak nyangka ada gym kualitas premium gini, tapi affordable banget. Apalagi pas pandemi, setiap beberapa jam pasti disterilisasi jadi merasa nyaman dan aman banget olahraga di sini. apalagi kelas ZUMBAnya”",
    url: "pics/arya.jpeg",
  },
  {
    nama: "Pram Enjoy",
    testi:
      "“Tempat gym paling cozy, terus semua kelas ada, alat gym juga lengkap. Paling penting tempatnya bersih. Gym Premium harga affordable yang worth it cuma di U CAN GYM sih. kelas DANCEnya paling aku suka.”",
    url: "pics/pram.jpeg",
  },
  {
    nama: "Ryan Jago",
    testi:
      "“U CAN GYM salah satu tempat gym yang konsepnya millenial banget, mulai dari program kelas yang bervarian dan bikin addicted untuk terus datang olahraga, membantu saya bisa mencapai impian menjadi petarung MMA (Mixed Martial Arts).”",
    url: "pics/ryan.jpeg",
  },
  {
    nama: "Vesa Gaming",
    testi:
      "Aku nyaman banget ngegym di U CAN GYM. Alatnya itu high class seperti di megagym tapi harganya terjangkau, tempatnya juga bersih dan rapi. Program kelas yang bervarian dan bikin addicted untuk terus datang olahraga",
    url: "pics/vesa.jpeg",
  },
];
let dataPengguna;
let selectedClassGym = {};
function addCustomer() {
  let result = {};
  let fieldNama = document.querySelector("#nama");
  let fieldNoHp = document.querySelector("#nohp");
  let fieldEmail = document.querySelector("#email");
  if (fieldNama.value && fieldNoHp.value && fieldEmail.value) {
    result.nama = fieldNama.value;
    result.nohp = fieldNoHp.value;
    result.email = fieldEmail.value;
  }
  return result;
}

function setClassList(classGym) {
  let result = "";
  for (const key in classGym) {
    result += `<div class="col-md-4 mb-3 ">
                    <div class="card">
                        <img src=${classGym[key].url} class="card-img-top" alt="project1">
                        <div class="card-body">
                            <p class="card-text">${classGym[key].description}</p>
                            <!-- Button trigger modal -->
                            <button type="button" class="info-class btn btn-info "  style="color: white;" value=${key} data-bs-toggle="modal" data-bs-target="#modal">
                                Selengkapnya..
                            </button>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" onChange='manageSelectClassGym(classGym,selectedClassGym)' value=${key} name='ambil'>
                                <label class="form-check-label" for="defaultCheck1">
                                    Ambil Kelas ${key}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>`;
  }
  document.querySelector(".list-class").innerHTML = result;
}
setClassList(classGym);
function setTestimoni(testimoni) {
  let result = testimoni
    .map(
      (item, index) =>
        `<div class="card">
                <div class="profile">
                    <img src=${item.url}>
                    <p>${item.testi}</p>
                    <span>${item.nama}</span>
                </div>
            </div>`
    )
    .join("");
  document.querySelector("#testimonih").innerHTML = result;
}
setTestimoni(testimoni);
function manageSelectClassGym(classGym, paramselectedClassGym) {
  paramselectedClassGym = {};
  let selectClass = document.getElementsByName("ambil");
  let result = 0;
  for (let i = 0; i < selectClass.length; i++) {
    if (selectClass[i].checked) {
      paramselectedClassGym[selectClass[i].value] =
        classGym[selectClass[i].value];
      result += classGym[selectClass[i].value].price;
    }
  }
  document.querySelector("#total").innerHTML = result;
  selectedClassGym = paramselectedClassGym;
  generateTable(paramselectedClassGym);
}
let person;
document.addEventListener("click", (e) => {
  let temp = "";
  if (e.target.classList.contains("btn-lanjut")) {
    console.log(selectedClassGym);
    person = addCustomer();
    if (!Object.keys(person).length) {
      temp =
        "<h1 class='text-danger'>Eitsssss data diri kamu ga lengkap, aku ga mau lanjutin :(</h1>";
    } else if (!Object.keys(selectedClassGym).length) {
      temp = "<h1 class='text-danger'>Dipilih dulu gih kelas nya :)</h1>";
    } else {
      temp = `<div class="row">
                    <div class="col">
                        <ul class="list-group">
                            <li class="list-group-item"><span class="fw-bolder">Nama: ${
                              person.nama
                            }</li>
                            <li class="list-group-item"><span class="fw-bolder">Nomor Hp: ${
                              person.nohp
                            }</li>
                            <li class="list-group-item"><span class="fw-bolder">Email: ${
                              person.email
                            }</li>
                        </ul>
                        
                        <div class="row d-flex justify-content-center">
                                <img class='' style="width:50%;" src="pics/brcd.jpg">
                                <h6 class="text-dark">Total Pembayaran : ${
                                  document.querySelector("#total").textContent
                                }</h6>
                            </div>
                            <h6 class="text-dark">akan expire pada ${new Date().toLocaleDateString()}
                                ${
                                  new Date().getHours() + 1
                                }:${new Date().getMinutes()}</h6>
                    </div>
                    <button type="button" class="btn-bayar btn btn-info " onclick='showAlert(person)'style="color: white;"data-bs-toggle="modal" data-bs-target="#modal">
                                Sudah Bayar
                            </button>
                </div>`;
    }
    document.querySelector(".modal-body").innerHTML = temp;
  }
});
function showAlert(person) {
  alert(
    `Terima Kasih ${person.nama} bukti pembayaran dan jadwal sudah di kirim ke ${person.email} sampai jumpa besok ya :3`
  );
}

function generateTable(obj) {
  let result = "";
  let hariKelas = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let jamKelas = [
    "09.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
  ];
  for (let i = 0; i < jamKelas.length; i++) {
    result += "<tr>";
    result += `<td>${jamKelas[i]}</td>`;
    for (let j = 0; j < hariKelas.length; j++) {
      let adaKelas = false;
      let kelas = "";
      for (let keyKls in obj) {
        for (let k = 0; k < obj[keyKls].schedule.length; k++) {
          if (
            obj[keyKls].schedule[k].hari === hariKelas[j] &&
            obj[keyKls].schedule[k].waktu === jamKelas[i]
          ) {
            adaKelas = true;
            kelas = keyKls;
          }
        }
      }

      if (adaKelas) {
        console.log(kelas, jamKelas[i], hariKelas[j]);
        result += `<td style='background-color:${obj[kelas].color}'></td>`;
      } else {
        result += "<td></td>";
      }
    }
    result += "</tr>";
  }
  let keterangan = "";
  for (let key in obj) {
    keterangan += `<li class="list-group-item text-white fw-bolder" style="background-color:${obj[key].color} ;">${key}</li>`;
  }
  document.querySelector(".keterangan").innerHTML = keterangan;
  document.querySelector("#tabel-jadwal").innerHTML = result;
}
let data = {
  mindBody: {
    schedule: [
      { hari: "Senin", waktu: "13.00" },
      { hari: "Selasa", waktu: "14.00" },
      { hari: "Rabu", waktu: "15.00" },
    ],
    price: 200_000,
  },
  yoga: {
    schedule: [
      { hari: "Senin", waktu: "11.00" },
      { hari: "Selasa", waktu: "12.00" },
      { hari: "Rabu", waktu: "09.00" },
    ],
    price: 300_000,
  },
  zoomba: {
    schedule: [
      { hari: "Kamis", waktu: "13.00" },
      { hari: "Jumat", waktu: "14.00" },
      { hari: "Sabtu", waktu: "15.00" },
    ],
    price: 250_000,
  },
  cardio: {
    schedule: [
      { hari: "Kamis", waktu: "11.00" },
      { hari: "Jumat", waktu: "12.00" },
      { hari: "Sabtu", waktu: "09.00" },
    ],
    price: 350_000,
  },
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("info-class")) {
    let kls = classGym[e.target.value];
    let jadwal = kls.schedule
      .map(
        (item, index) =>
          `<li class="list-group-item">
        ${index + 1}. ${item.hari} ${item.waktu}</li>`
      )
      .join("");
    let temp = `<div class="row">
                            <img class="img-fluid" src='${kls.url}'>
                            <div class="col">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h3>${e.target.value}</h3>
                                        <p>${kls.description}</p>
                                    </li>
                                    <li class="list-group-item"><span class="fw-bolder">Jadwal
                                        <ul class="list-group">
                                            ${jadwal}
                                        </ul>
                                    </li>
                                    <li class="list-group-item"><span class="fw-bolder">Harga: ${kls.price}</li>
                                    <li class="list-group-item"><span class="fw-bolder">Durasi: ${kls.durasi}</li>

                                </ul>
                            </div>
                        </div>`;
    document.querySelector(".modal-body").innerHTML = temp;
  }
});
