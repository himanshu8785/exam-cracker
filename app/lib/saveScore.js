import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import {
  auth,
  db
} from "../../firebase";

export async function saveScore(score) {

  try {

    const user = auth.currentUser;

    if(!user){

      return;

    }

    await addDoc(

      collection(db,"scores"),

      {
        email:user.email,
        score:score,
        createdAt:serverTimestamp()
      }

    );

    console.log("Score Saved 🚀");

  }

  catch(error){

    console.log(error);

  }

}