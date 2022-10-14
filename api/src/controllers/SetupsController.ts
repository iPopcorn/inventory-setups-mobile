import { NextFunction, Request, Response } from 'express';

// getting all setups
const getSetups = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json({
            message: 'Hello world!',
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
};

export default { getSetups };