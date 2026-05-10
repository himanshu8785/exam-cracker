import { GoogleGenerativeAI }
from "@google/generative-ai";

const genAI =
new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export async function POST(req){

  try{

    const { question } =
    await req.json();

    const model =
    genAI.getGenerativeModel({
      model:"gemini-1.5-flash"
    });

    const result =
    await model.generateContent(

      `Solve this JEE/NEET doubt clearly:

      ${question}`

    );

    const response =
    await result.response;

    const text =
    response.text();

    return Response.json({

      answer:text

    });

  }

  catch(error){

    console.log(error);

    return Response.json({

      answer:
      "AI failed to respond 🚀"

    });

  }

}