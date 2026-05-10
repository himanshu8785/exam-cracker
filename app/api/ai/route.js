export async function POST(req) {

  try {

    const body = await req.json();

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },

        body: JSON.stringify({
          model: "gpt-3.5-turbo",

          messages: [
            {
              role: "system",
              content:
                "You are a helpful JEE and NEET tutor.",
            },
            {
              role: "user",
              content: body.question,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return Response.json(data);

  } catch (error) {

    return Response.json({
      error: "AI request failed",
    });

  }

}