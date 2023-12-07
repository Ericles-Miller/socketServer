import { socket } from "jobs/sockets";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IMessageRepository } from "../infra/IMessageRepository";
import { MessageRepository } from "../infra/MessageRepository";

@injectable()
export class ListMessagesUseCase {
  constructor(
    @inject(MessageRepository)
    private messageRepository: IMessageRepository,
  ) {}

  async execute(): Promise<void> {
    const messages = await this.messageRepository.list();
    console.log(messages);

    if (messages.length === 0) {
      throw new AppError("messages is empty");
    }

    await socket(messages);
  }
}
