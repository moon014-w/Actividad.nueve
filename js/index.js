
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  import { getFirestore,collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js"; 

  import { datos } from "./elementos.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCrP7ZSv1jgu9InGqbOdYzZMaWZ95HlOuw",
    authDomain: "testform-f29d4.firebaseapp.com",
    projectId: "testform-f29d4",
    storageBucket: "testform-f29d4.firebasestorage.app",
    messagingSenderId: "990494062849",
    appId: "1:990494062849:web:577c3ac263b7811db24300",
    measurementId: "G-L6MY0PTC3R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

datos.boton.addEventListener("click", async function() {
  try {
    const nombreSinComillas = datos.nombre.value.replace(/^"|"$/g, ''); // Elimina comillas al inicio y al final
      const apellidoSinComillas = datos.apellido.value.replace(/^"|"$/g, '');
      const fechaSinComillas = datos.fecha.value.replace(/^"|"$/g, '');

            first: nombreSinComillas; // Usar el valor procesado
            last: apellidoSinComillas;
            born: fechaSinComillas;

    const docRef = await addDoc(collection(db, "users"), {
      first: datos.nombre.value,
      last: datos.apellido.value,
      born: datos.fecha.value
      

           
    });
    
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}})

datos.boton2.addEventListener("click", async function() {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "cities", datos.id.value), {
        first: datos.nombre.value,
        last: datos.apellido.value,
        born: datos.fecha.value
        
  });
});

//leer documento//

datos.buscar.addEventListener("click", async function(){});

const docRef = doc(db, "datos.inputcollection.value", datos.input_id.value, "2468");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  datos,resultado.textContent = `Nombre: $docSnap.data().first  Apellido: $docSnap.data().last  Fecha de Nacimiento: $docSnap.data().born`;
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
