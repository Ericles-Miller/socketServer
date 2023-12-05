import { io } from "jobs/sockets";
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

    if (messages.length === 0) {
      throw new AppError("messages is empty");
    }

    const mensagensTeste = [{ id: 1, text: 'Teste 1' }, { id: 2, text: 'Teste 2' }];


    io.emit("sendMessages", mensagensTeste);
  }
}
