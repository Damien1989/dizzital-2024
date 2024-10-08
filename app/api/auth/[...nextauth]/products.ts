import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/prisma';
import getServerSession from 'next-auth'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === 'POST') {
    try {
      const session = await getServerSession(req);
      if (!session) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const product = await prisma.product.create({
        data: {
          ...req.body,  
          userId: session.user.id,  
        },
      });

      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      
      res.status(500).json({ error: "Failed to create product", details: (error as Error).message });
    }
  
  } else if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      
      res.status(500).json({ error: "Failed to fetch products", details: (error as Error).message });
    }

  } else {
    res.setHeader('Allow', ['GET', 'POST']); 
    res.status(405).json({ error: "Method not allowed" });
  }