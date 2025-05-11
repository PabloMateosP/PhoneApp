// Importa las funciones necesarias desde el SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Asegúrate de importar Firestore
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "#",
  authDomain: "#",
  projectId: "#",
  storageBucket: "#",
  messagingSenderId: "#",
  appId: "#",
  measurementId: "#"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener Firestore y Analytics
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Exportar el objeto db para que puedas usarlo en otros archivos
export { db };