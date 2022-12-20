import { ChainId } from "./constants";

export abstract class Wallet {
  abstract getName(): string;
  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract getChainId(): ChainId;
  abstract getPublicKey(): string | undefined;
  abstract getBalance(): Promise<string>;
  abstract signTransaction(tx: any): Promise<any>;
  abstract sendTransaction(tx: any): Promise<any>;
  abstract signMessage(msg: Uint8Array): Promise<any>;
}