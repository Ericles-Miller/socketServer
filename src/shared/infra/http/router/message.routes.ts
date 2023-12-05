import { ListMessageController } from "@modules/messages/listMessages/useCases/ListMessagesController";
import { Router } from "express";

export const messageRouter = Router();

const listMessagesController = new ListMessageController();

messageRouter.get("/", listMessagesController.handle);
