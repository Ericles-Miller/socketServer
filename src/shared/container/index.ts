import { IMessageRepository } from "@modules/messages/listMessages/infra/IMessageRepository";
import { MessageRepository } from "@modules/messages/listMessages/infra/MessageRepository";
import { container } from "tsyringe";

container.registerSingleton<IMessageRepository>(
  "MessageRepository",
  MessageRepository,
);
