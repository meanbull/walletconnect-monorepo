import { AppMetadata } from "./misc";
import { RelayerTypes } from "./relayer";
import { IStore } from "./store";

export declare namespace PairingTypes {
  export interface Data {
    topic: string;
    expiry: number;
    relay: RelayerTypes.ProtocolOptions;
    uri: string;
    isActive: boolean;
    selfMetadata?: AppMetadata;
  }
}

export type IPairing = IStore<PairingTypes.Data>;
