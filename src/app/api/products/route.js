import clientPromise from "@/app/library/mongodb";




export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('shopdb');
    const collection = db.collection('products');




    const data = await collection.find({}).toArray();




    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
