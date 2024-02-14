import { Request, Response, NextFunction } from "express";

interface Schema {
    validate: (data: any) => Promise<any>
}


export const validate = (schema: Schema) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const body = req.body
    // console.log(body, 33);
    
    try {
        await schema.validate(body)
        next()

    }catch (error:any) {
        console.log(error);
        res.status(409).send({message: error.message})
        
    }
};