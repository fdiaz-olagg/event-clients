import RedisClient from "./redis/redis.client";
import { EventClient as eventClient } from "./event.client";
export type EventClient = eventClient;
export declare const RedisEventClient: typeof RedisClient;
