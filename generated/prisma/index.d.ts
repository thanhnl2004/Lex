
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model TripMessage
 * 
 */
export type TripMessage = $Result.DefaultSelection<Prisma.$TripMessagePayload>
/**
 * Model TripPlan
 * 
 */
export type TripPlan = $Result.DefaultSelection<Prisma.$TripPlanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT',
  SYSTEM: 'SYSTEM',
  TOOL: 'TOOL'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Trips
 * const trips = await prisma.trip.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Trips
   * const trips = await prisma.trip.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripMessage`: Exposes CRUD operations for the **TripMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripMessages
    * const tripMessages = await prisma.tripMessage.findMany()
    * ```
    */
  get tripMessage(): Prisma.TripMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPlan`: Exposes CRUD operations for the **TripPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPlans
    * const tripPlans = await prisma.tripPlan.findMany()
    * ```
    */
  get tripPlan(): Prisma.TripPlanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Trip: 'Trip',
    TripMessage: 'TripMessage',
    TripPlan: 'TripPlan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "trip" | "tripMessage" | "tripPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      TripMessage: {
        payload: Prisma.$TripMessagePayload<ExtArgs>
        fields: Prisma.TripMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>
          }
          findFirst: {
            args: Prisma.TripMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>
          }
          findMany: {
            args: Prisma.TripMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>[]
          }
          create: {
            args: Prisma.TripMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>
          }
          createMany: {
            args: Prisma.TripMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>[]
          }
          delete: {
            args: Prisma.TripMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>
          }
          update: {
            args: Prisma.TripMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>
          }
          deleteMany: {
            args: Prisma.TripMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>[]
          }
          upsert: {
            args: Prisma.TripMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMessagePayload>
          }
          aggregate: {
            args: Prisma.TripMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripMessage>
          }
          groupBy: {
            args: Prisma.TripMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripMessageCountArgs<ExtArgs>
            result: $Utils.Optional<TripMessageCountAggregateOutputType> | number
          }
        }
      }
      TripPlan: {
        payload: Prisma.$TripPlanPayload<ExtArgs>
        fields: Prisma.TripPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findFirst: {
            args: Prisma.TripPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          findMany: {
            args: Prisma.TripPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          create: {
            args: Prisma.TripPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          createMany: {
            args: Prisma.TripPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          delete: {
            args: Prisma.TripPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          update: {
            args: Prisma.TripPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          deleteMany: {
            args: Prisma.TripPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>[]
          }
          upsert: {
            args: Prisma.TripPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPlanPayload>
          }
          aggregate: {
            args: Prisma.TripPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPlan>
          }
          groupBy: {
            args: Prisma.TripPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TripPlanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    trip?: TripOmit
    tripMessage?: TripMessageOmit
    tripPlan?: TripPlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    messages: number
    plans: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TripCountOutputTypeCountMessagesArgs
    plans?: boolean | TripCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripMessageWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    budget: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    budget: number | null
  }

  export type TripMinAggregateOutputType = {
    userId: string | null
    id: number | null
    title: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    budget: number | null
  }

  export type TripMaxAggregateOutputType = {
    userId: string | null
    id: number | null
    title: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    budget: number | null
  }

  export type TripCountAggregateOutputType = {
    userId: number
    id: number
    title: number
    destination: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    budget: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    budget?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    budget?: true
  }

  export type TripMinAggregateInputType = {
    userId?: true
    id?: true
    title?: true
    destination?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    budget?: true
  }

  export type TripMaxAggregateInputType = {
    userId?: true
    id?: true
    title?: true
    destination?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    budget?: true
  }

  export type TripCountAggregateInputType = {
    userId?: true
    id?: true
    title?: true
    destination?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    budget?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    userId: string
    id: number
    title: string
    destination: string
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    budget: number | null
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    id?: boolean
    title?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    budget?: boolean
    messages?: boolean | Trip$messagesArgs<ExtArgs>
    plans?: boolean | Trip$plansArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    id?: boolean
    title?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    budget?: boolean
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    id?: boolean
    title?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    budget?: boolean
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    userId?: boolean
    id?: boolean
    title?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    budget?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "id" | "title" | "destination" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "budget", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Trip$messagesArgs<ExtArgs>
    plans?: boolean | Trip$plansArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      messages: Prisma.$TripMessagePayload<ExtArgs>[]
      plans: Prisma.$TripPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      id: number
      title: string
      destination: string
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
      budget: number | null
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const tripWithUserIdOnly = await prisma.trip.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `userId`
     * const tripWithUserIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `userId`
     * const tripWithUserIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Trip$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Trip$plansArgs<ExtArgs> = {}>(args?: Subset<T, Trip$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly userId: FieldRef<"Trip", 'String'>
    readonly id: FieldRef<"Trip", 'Int'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
    readonly budget: FieldRef<"Trip", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.messages
   */
  export type Trip$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    where?: TripMessageWhereInput
    orderBy?: TripMessageOrderByWithRelationInput | TripMessageOrderByWithRelationInput[]
    cursor?: TripMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripMessageScalarFieldEnum | TripMessageScalarFieldEnum[]
  }

  /**
   * Trip.plans
   */
  export type Trip$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    cursor?: TripPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model TripMessage
   */

  export type AggregateTripMessage = {
    _count: TripMessageCountAggregateOutputType | null
    _avg: TripMessageAvgAggregateOutputType | null
    _sum: TripMessageSumAggregateOutputType | null
    _min: TripMessageMinAggregateOutputType | null
    _max: TripMessageMaxAggregateOutputType | null
  }

  export type TripMessageAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TripMessageSumAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TripMessageMinAggregateOutputType = {
    id: number | null
    tripId: number | null
    createdAt: Date | null
    role: $Enums.Role | null
    content: string | null
  }

  export type TripMessageMaxAggregateOutputType = {
    id: number | null
    tripId: number | null
    createdAt: Date | null
    role: $Enums.Role | null
    content: string | null
  }

  export type TripMessageCountAggregateOutputType = {
    id: number
    tripId: number
    createdAt: number
    role: number
    content: number
    _all: number
  }


  export type TripMessageAvgAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TripMessageSumAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TripMessageMinAggregateInputType = {
    id?: true
    tripId?: true
    createdAt?: true
    role?: true
    content?: true
  }

  export type TripMessageMaxAggregateInputType = {
    id?: true
    tripId?: true
    createdAt?: true
    role?: true
    content?: true
  }

  export type TripMessageCountAggregateInputType = {
    id?: true
    tripId?: true
    createdAt?: true
    role?: true
    content?: true
    _all?: true
  }

  export type TripMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripMessage to aggregate.
     */
    where?: TripMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMessages to fetch.
     */
    orderBy?: TripMessageOrderByWithRelationInput | TripMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripMessages
    **/
    _count?: true | TripMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMessageMaxAggregateInputType
  }

  export type GetTripMessageAggregateType<T extends TripMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTripMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripMessage[P]>
      : GetScalarType<T[P], AggregateTripMessage[P]>
  }




  export type TripMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripMessageWhereInput
    orderBy?: TripMessageOrderByWithAggregationInput | TripMessageOrderByWithAggregationInput[]
    by: TripMessageScalarFieldEnum[] | TripMessageScalarFieldEnum
    having?: TripMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripMessageCountAggregateInputType | true
    _avg?: TripMessageAvgAggregateInputType
    _sum?: TripMessageSumAggregateInputType
    _min?: TripMessageMinAggregateInputType
    _max?: TripMessageMaxAggregateInputType
  }

  export type TripMessageGroupByOutputType = {
    id: number
    tripId: number
    createdAt: Date
    role: $Enums.Role
    content: string
    _count: TripMessageCountAggregateOutputType | null
    _avg: TripMessageAvgAggregateOutputType | null
    _sum: TripMessageSumAggregateOutputType | null
    _min: TripMessageMinAggregateOutputType | null
    _max: TripMessageMaxAggregateOutputType | null
  }

  type GetTripMessageGroupByPayload<T extends TripMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TripMessageGroupByOutputType[P]>
        }
      >
    >


  export type TripMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMessage"]>

  export type TripMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMessage"]>

  export type TripMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMessage"]>

  export type TripMessageSelectScalar = {
    id?: boolean
    tripId?: boolean
    createdAt?: boolean
    role?: boolean
    content?: boolean
  }

  export type TripMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "createdAt" | "role" | "content", ExtArgs["result"]["tripMessage"]>
  export type TripMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripMessage"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripId: number
      createdAt: Date
      role: $Enums.Role
      content: string
    }, ExtArgs["result"]["tripMessage"]>
    composites: {}
  }

  type TripMessageGetPayload<S extends boolean | null | undefined | TripMessageDefaultArgs> = $Result.GetResult<Prisma.$TripMessagePayload, S>

  type TripMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripMessageCountAggregateInputType | true
    }

  export interface TripMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripMessage'], meta: { name: 'TripMessage' } }
    /**
     * Find zero or one TripMessage that matches the filter.
     * @param {TripMessageFindUniqueArgs} args - Arguments to find a TripMessage
     * @example
     * // Get one TripMessage
     * const tripMessage = await prisma.tripMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripMessageFindUniqueArgs>(args: SelectSubset<T, TripMessageFindUniqueArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripMessageFindUniqueOrThrowArgs} args - Arguments to find a TripMessage
     * @example
     * // Get one TripMessage
     * const tripMessage = await prisma.tripMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, TripMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMessageFindFirstArgs} args - Arguments to find a TripMessage
     * @example
     * // Get one TripMessage
     * const tripMessage = await prisma.tripMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripMessageFindFirstArgs>(args?: SelectSubset<T, TripMessageFindFirstArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMessageFindFirstOrThrowArgs} args - Arguments to find a TripMessage
     * @example
     * // Get one TripMessage
     * const tripMessage = await prisma.tripMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, TripMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripMessages
     * const tripMessages = await prisma.tripMessage.findMany()
     * 
     * // Get first 10 TripMessages
     * const tripMessages = await prisma.tripMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripMessageWithIdOnly = await prisma.tripMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripMessageFindManyArgs>(args?: SelectSubset<T, TripMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripMessage.
     * @param {TripMessageCreateArgs} args - Arguments to create a TripMessage.
     * @example
     * // Create one TripMessage
     * const TripMessage = await prisma.tripMessage.create({
     *   data: {
     *     // ... data to create a TripMessage
     *   }
     * })
     * 
     */
    create<T extends TripMessageCreateArgs>(args: SelectSubset<T, TripMessageCreateArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripMessages.
     * @param {TripMessageCreateManyArgs} args - Arguments to create many TripMessages.
     * @example
     * // Create many TripMessages
     * const tripMessage = await prisma.tripMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripMessageCreateManyArgs>(args?: SelectSubset<T, TripMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripMessages and returns the data saved in the database.
     * @param {TripMessageCreateManyAndReturnArgs} args - Arguments to create many TripMessages.
     * @example
     * // Create many TripMessages
     * const tripMessage = await prisma.tripMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripMessages and only return the `id`
     * const tripMessageWithIdOnly = await prisma.tripMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, TripMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripMessage.
     * @param {TripMessageDeleteArgs} args - Arguments to delete one TripMessage.
     * @example
     * // Delete one TripMessage
     * const TripMessage = await prisma.tripMessage.delete({
     *   where: {
     *     // ... filter to delete one TripMessage
     *   }
     * })
     * 
     */
    delete<T extends TripMessageDeleteArgs>(args: SelectSubset<T, TripMessageDeleteArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripMessage.
     * @param {TripMessageUpdateArgs} args - Arguments to update one TripMessage.
     * @example
     * // Update one TripMessage
     * const tripMessage = await prisma.tripMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripMessageUpdateArgs>(args: SelectSubset<T, TripMessageUpdateArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripMessages.
     * @param {TripMessageDeleteManyArgs} args - Arguments to filter TripMessages to delete.
     * @example
     * // Delete a few TripMessages
     * const { count } = await prisma.tripMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripMessageDeleteManyArgs>(args?: SelectSubset<T, TripMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripMessages
     * const tripMessage = await prisma.tripMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripMessageUpdateManyArgs>(args: SelectSubset<T, TripMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripMessages and returns the data updated in the database.
     * @param {TripMessageUpdateManyAndReturnArgs} args - Arguments to update many TripMessages.
     * @example
     * // Update many TripMessages
     * const tripMessage = await prisma.tripMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripMessages and only return the `id`
     * const tripMessageWithIdOnly = await prisma.tripMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, TripMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripMessage.
     * @param {TripMessageUpsertArgs} args - Arguments to update or create a TripMessage.
     * @example
     * // Update or create a TripMessage
     * const tripMessage = await prisma.tripMessage.upsert({
     *   create: {
     *     // ... data to create a TripMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripMessage we want to update
     *   }
     * })
     */
    upsert<T extends TripMessageUpsertArgs>(args: SelectSubset<T, TripMessageUpsertArgs<ExtArgs>>): Prisma__TripMessageClient<$Result.GetResult<Prisma.$TripMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMessageCountArgs} args - Arguments to filter TripMessages to count.
     * @example
     * // Count the number of TripMessages
     * const count = await prisma.tripMessage.count({
     *   where: {
     *     // ... the filter for the TripMessages we want to count
     *   }
     * })
    **/
    count<T extends TripMessageCountArgs>(
      args?: Subset<T, TripMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripMessageAggregateArgs>(args: Subset<T, TripMessageAggregateArgs>): Prisma.PrismaPromise<GetTripMessageAggregateType<T>>

    /**
     * Group by TripMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripMessageGroupByArgs['orderBy'] }
        : { orderBy?: TripMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripMessage model
   */
  readonly fields: TripMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripMessage model
   */
  interface TripMessageFieldRefs {
    readonly id: FieldRef<"TripMessage", 'Int'>
    readonly tripId: FieldRef<"TripMessage", 'Int'>
    readonly createdAt: FieldRef<"TripMessage", 'DateTime'>
    readonly role: FieldRef<"TripMessage", 'Role'>
    readonly content: FieldRef<"TripMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripMessage findUnique
   */
  export type TripMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * Filter, which TripMessage to fetch.
     */
    where: TripMessageWhereUniqueInput
  }

  /**
   * TripMessage findUniqueOrThrow
   */
  export type TripMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * Filter, which TripMessage to fetch.
     */
    where: TripMessageWhereUniqueInput
  }

  /**
   * TripMessage findFirst
   */
  export type TripMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * Filter, which TripMessage to fetch.
     */
    where?: TripMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMessages to fetch.
     */
    orderBy?: TripMessageOrderByWithRelationInput | TripMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripMessages.
     */
    cursor?: TripMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMessages.
     */
    distinct?: TripMessageScalarFieldEnum | TripMessageScalarFieldEnum[]
  }

  /**
   * TripMessage findFirstOrThrow
   */
  export type TripMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * Filter, which TripMessage to fetch.
     */
    where?: TripMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMessages to fetch.
     */
    orderBy?: TripMessageOrderByWithRelationInput | TripMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripMessages.
     */
    cursor?: TripMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMessages.
     */
    distinct?: TripMessageScalarFieldEnum | TripMessageScalarFieldEnum[]
  }

  /**
   * TripMessage findMany
   */
  export type TripMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * Filter, which TripMessages to fetch.
     */
    where?: TripMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMessages to fetch.
     */
    orderBy?: TripMessageOrderByWithRelationInput | TripMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripMessages.
     */
    cursor?: TripMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMessages.
     */
    skip?: number
    distinct?: TripMessageScalarFieldEnum | TripMessageScalarFieldEnum[]
  }

  /**
   * TripMessage create
   */
  export type TripMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TripMessage.
     */
    data: XOR<TripMessageCreateInput, TripMessageUncheckedCreateInput>
  }

  /**
   * TripMessage createMany
   */
  export type TripMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripMessages.
     */
    data: TripMessageCreateManyInput | TripMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripMessage createManyAndReturn
   */
  export type TripMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * The data used to create many TripMessages.
     */
    data: TripMessageCreateManyInput | TripMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripMessage update
   */
  export type TripMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TripMessage.
     */
    data: XOR<TripMessageUpdateInput, TripMessageUncheckedUpdateInput>
    /**
     * Choose, which TripMessage to update.
     */
    where: TripMessageWhereUniqueInput
  }

  /**
   * TripMessage updateMany
   */
  export type TripMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripMessages.
     */
    data: XOR<TripMessageUpdateManyMutationInput, TripMessageUncheckedUpdateManyInput>
    /**
     * Filter which TripMessages to update
     */
    where?: TripMessageWhereInput
    /**
     * Limit how many TripMessages to update.
     */
    limit?: number
  }

  /**
   * TripMessage updateManyAndReturn
   */
  export type TripMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * The data used to update TripMessages.
     */
    data: XOR<TripMessageUpdateManyMutationInput, TripMessageUncheckedUpdateManyInput>
    /**
     * Filter which TripMessages to update
     */
    where?: TripMessageWhereInput
    /**
     * Limit how many TripMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripMessage upsert
   */
  export type TripMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TripMessage to update in case it exists.
     */
    where: TripMessageWhereUniqueInput
    /**
     * In case the TripMessage found by the `where` argument doesn't exist, create a new TripMessage with this data.
     */
    create: XOR<TripMessageCreateInput, TripMessageUncheckedCreateInput>
    /**
     * In case the TripMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripMessageUpdateInput, TripMessageUncheckedUpdateInput>
  }

  /**
   * TripMessage delete
   */
  export type TripMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
    /**
     * Filter which TripMessage to delete.
     */
    where: TripMessageWhereUniqueInput
  }

  /**
   * TripMessage deleteMany
   */
  export type TripMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripMessages to delete
     */
    where?: TripMessageWhereInput
    /**
     * Limit how many TripMessages to delete.
     */
    limit?: number
  }

  /**
   * TripMessage without action
   */
  export type TripMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMessage
     */
    select?: TripMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMessage
     */
    omit?: TripMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMessageInclude<ExtArgs> | null
  }


  /**
   * Model TripPlan
   */

  export type AggregateTripPlan = {
    _count: TripPlanCountAggregateOutputType | null
    _avg: TripPlanAvgAggregateOutputType | null
    _sum: TripPlanSumAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  export type TripPlanAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TripPlanSumAggregateOutputType = {
    id: number | null
    tripId: number | null
  }

  export type TripPlanMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    tripId: number | null
  }

  export type TripPlanMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    tripId: number | null
  }

  export type TripPlanCountAggregateOutputType = {
    id: number
    plan: number
    sources: number
    createdAt: number
    tripId: number
    _all: number
  }


  export type TripPlanAvgAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TripPlanSumAggregateInputType = {
    id?: true
    tripId?: true
  }

  export type TripPlanMinAggregateInputType = {
    id?: true
    createdAt?: true
    tripId?: true
  }

  export type TripPlanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    tripId?: true
  }

  export type TripPlanCountAggregateInputType = {
    id?: true
    plan?: true
    sources?: true
    createdAt?: true
    tripId?: true
    _all?: true
  }

  export type TripPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlan to aggregate.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPlans
    **/
    _count?: true | TripPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPlanMaxAggregateInputType
  }

  export type GetTripPlanAggregateType<T extends TripPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPlan[P]>
      : GetScalarType<T[P], AggregateTripPlan[P]>
  }




  export type TripPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPlanWhereInput
    orderBy?: TripPlanOrderByWithAggregationInput | TripPlanOrderByWithAggregationInput[]
    by: TripPlanScalarFieldEnum[] | TripPlanScalarFieldEnum
    having?: TripPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPlanCountAggregateInputType | true
    _avg?: TripPlanAvgAggregateInputType
    _sum?: TripPlanSumAggregateInputType
    _min?: TripPlanMinAggregateInputType
    _max?: TripPlanMaxAggregateInputType
  }

  export type TripPlanGroupByOutputType = {
    id: number
    plan: JsonValue
    sources: JsonValue
    createdAt: Date
    tripId: number
    _count: TripPlanCountAggregateOutputType | null
    _avg: TripPlanAvgAggregateOutputType | null
    _sum: TripPlanSumAggregateOutputType | null
    _min: TripPlanMinAggregateOutputType | null
    _max: TripPlanMaxAggregateOutputType | null
  }

  type GetTripPlanGroupByPayload<T extends TripPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TripPlanGroupByOutputType[P]>
        }
      >
    >


  export type TripPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    sources?: boolean
    createdAt?: boolean
    tripId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    sources?: boolean
    createdAt?: boolean
    tripId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    sources?: boolean
    createdAt?: boolean
    tripId?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPlan"]>

  export type TripPlanSelectScalar = {
    id?: boolean
    plan?: boolean
    sources?: boolean
    createdAt?: boolean
    tripId?: boolean
  }

  export type TripPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan" | "sources" | "createdAt" | "tripId", ExtArgs["result"]["tripPlan"]>
  export type TripPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPlan"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plan: Prisma.JsonValue
      sources: Prisma.JsonValue
      createdAt: Date
      tripId: number
    }, ExtArgs["result"]["tripPlan"]>
    composites: {}
  }

  type TripPlanGetPayload<S extends boolean | null | undefined | TripPlanDefaultArgs> = $Result.GetResult<Prisma.$TripPlanPayload, S>

  type TripPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPlanCountAggregateInputType | true
    }

  export interface TripPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPlan'], meta: { name: 'TripPlan' } }
    /**
     * Find zero or one TripPlan that matches the filter.
     * @param {TripPlanFindUniqueArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPlanFindUniqueArgs>(args: SelectSubset<T, TripPlanFindUniqueArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPlanFindUniqueOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPlanFindFirstArgs>(args?: SelectSubset<T, TripPlanFindFirstArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindFirstOrThrowArgs} args - Arguments to find a TripPlan
     * @example
     * // Get one TripPlan
     * const tripPlan = await prisma.tripPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPlans
     * const tripPlans = await prisma.tripPlan.findMany()
     * 
     * // Get first 10 TripPlans
     * const tripPlans = await prisma.tripPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPlanFindManyArgs>(args?: SelectSubset<T, TripPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPlan.
     * @param {TripPlanCreateArgs} args - Arguments to create a TripPlan.
     * @example
     * // Create one TripPlan
     * const TripPlan = await prisma.tripPlan.create({
     *   data: {
     *     // ... data to create a TripPlan
     *   }
     * })
     * 
     */
    create<T extends TripPlanCreateArgs>(args: SelectSubset<T, TripPlanCreateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPlans.
     * @param {TripPlanCreateManyArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPlanCreateManyArgs>(args?: SelectSubset<T, TripPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPlans and returns the data saved in the database.
     * @param {TripPlanCreateManyAndReturnArgs} args - Arguments to create many TripPlans.
     * @example
     * // Create many TripPlans
     * const tripPlan = await prisma.tripPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPlans and only return the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPlan.
     * @param {TripPlanDeleteArgs} args - Arguments to delete one TripPlan.
     * @example
     * // Delete one TripPlan
     * const TripPlan = await prisma.tripPlan.delete({
     *   where: {
     *     // ... filter to delete one TripPlan
     *   }
     * })
     * 
     */
    delete<T extends TripPlanDeleteArgs>(args: SelectSubset<T, TripPlanDeleteArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPlan.
     * @param {TripPlanUpdateArgs} args - Arguments to update one TripPlan.
     * @example
     * // Update one TripPlan
     * const tripPlan = await prisma.tripPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPlanUpdateArgs>(args: SelectSubset<T, TripPlanUpdateArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPlans.
     * @param {TripPlanDeleteManyArgs} args - Arguments to filter TripPlans to delete.
     * @example
     * // Delete a few TripPlans
     * const { count } = await prisma.tripPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPlanDeleteManyArgs>(args?: SelectSubset<T, TripPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPlans
     * const tripPlan = await prisma.tripPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPlanUpdateManyArgs>(args: SelectSubset<T, TripPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPlans and returns the data updated in the database.
     * @param {TripPlanUpdateManyAndReturnArgs} args - Arguments to update many TripPlans.
     * @example
     * // Update many TripPlans
     * const tripPlan = await prisma.tripPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPlans and only return the `id`
     * const tripPlanWithIdOnly = await prisma.tripPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPlan.
     * @param {TripPlanUpsertArgs} args - Arguments to update or create a TripPlan.
     * @example
     * // Update or create a TripPlan
     * const tripPlan = await prisma.tripPlan.upsert({
     *   create: {
     *     // ... data to create a TripPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPlan we want to update
     *   }
     * })
     */
    upsert<T extends TripPlanUpsertArgs>(args: SelectSubset<T, TripPlanUpsertArgs<ExtArgs>>): Prisma__TripPlanClient<$Result.GetResult<Prisma.$TripPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanCountArgs} args - Arguments to filter TripPlans to count.
     * @example
     * // Count the number of TripPlans
     * const count = await prisma.tripPlan.count({
     *   where: {
     *     // ... the filter for the TripPlans we want to count
     *   }
     * })
    **/
    count<T extends TripPlanCountArgs>(
      args?: Subset<T, TripPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripPlanAggregateArgs>(args: Subset<T, TripPlanAggregateArgs>): Prisma.PrismaPromise<GetTripPlanAggregateType<T>>

    /**
     * Group by TripPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPlanGroupByArgs['orderBy'] }
        : { orderBy?: TripPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPlan model
   */
  readonly fields: TripPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripPlan model
   */
  interface TripPlanFieldRefs {
    readonly id: FieldRef<"TripPlan", 'Int'>
    readonly plan: FieldRef<"TripPlan", 'Json'>
    readonly sources: FieldRef<"TripPlan", 'Json'>
    readonly createdAt: FieldRef<"TripPlan", 'DateTime'>
    readonly tripId: FieldRef<"TripPlan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TripPlan findUnique
   */
  export type TripPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findUniqueOrThrow
   */
  export type TripPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan findFirst
   */
  export type TripPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findFirstOrThrow
   */
  export type TripPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlan to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPlans.
     */
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan findMany
   */
  export type TripPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter, which TripPlans to fetch.
     */
    where?: TripPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPlans to fetch.
     */
    orderBy?: TripPlanOrderByWithRelationInput | TripPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPlans.
     */
    cursor?: TripPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPlans.
     */
    skip?: number
    distinct?: TripPlanScalarFieldEnum | TripPlanScalarFieldEnum[]
  }

  /**
   * TripPlan create
   */
  export type TripPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPlan.
     */
    data: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
  }

  /**
   * TripPlan createMany
   */
  export type TripPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripPlan createManyAndReturn
   */
  export type TripPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TripPlans.
     */
    data: TripPlanCreateManyInput | TripPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlan update
   */
  export type TripPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPlan.
     */
    data: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
    /**
     * Choose, which TripPlan to update.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan updateMany
   */
  export type TripPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPlans.
     */
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyInput>
    /**
     * Filter which TripPlans to update
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to update.
     */
    limit?: number
  }

  /**
   * TripPlan updateManyAndReturn
   */
  export type TripPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * The data used to update TripPlans.
     */
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyInput>
    /**
     * Filter which TripPlans to update
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPlan upsert
   */
  export type TripPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPlan to update in case it exists.
     */
    where: TripPlanWhereUniqueInput
    /**
     * In case the TripPlan found by the `where` argument doesn't exist, create a new TripPlan with this data.
     */
    create: XOR<TripPlanCreateInput, TripPlanUncheckedCreateInput>
    /**
     * In case the TripPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPlanUpdateInput, TripPlanUncheckedUpdateInput>
  }

  /**
   * TripPlan delete
   */
  export type TripPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
    /**
     * Filter which TripPlan to delete.
     */
    where: TripPlanWhereUniqueInput
  }

  /**
   * TripPlan deleteMany
   */
  export type TripPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPlans to delete
     */
    where?: TripPlanWhereInput
    /**
     * Limit how many TripPlans to delete.
     */
    limit?: number
  }

  /**
   * TripPlan without action
   */
  export type TripPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPlan
     */
    select?: TripPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPlan
     */
    omit?: TripPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPlanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TripScalarFieldEnum: {
    userId: 'userId',
    id: 'id',
    title: 'title',
    destination: 'destination',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    budget: 'budget'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const TripMessageScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    createdAt: 'createdAt',
    role: 'role',
    content: 'content'
  };

  export type TripMessageScalarFieldEnum = (typeof TripMessageScalarFieldEnum)[keyof typeof TripMessageScalarFieldEnum]


  export const TripPlanScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    sources: 'sources',
    createdAt: 'createdAt',
    tripId: 'tripId'
  };

  export type TripPlanScalarFieldEnum = (typeof TripPlanScalarFieldEnum)[keyof typeof TripPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    userId?: StringFilter<"Trip"> | string
    id?: IntFilter<"Trip"> | number
    title?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    budget?: IntNullableFilter<"Trip"> | number | null
    messages?: TripMessageListRelationFilter
    plans?: TripPlanListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    userId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    destination?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    budget?: SortOrderInput | SortOrder
    messages?: TripMessageOrderByRelationAggregateInput
    plans?: TripPlanOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    userId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    budget?: IntNullableFilter<"Trip"> | number | null
    messages?: TripMessageListRelationFilter
    plans?: TripPlanListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    userId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    destination?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    budget?: SortOrderInput | SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Trip"> | string
    id?: IntWithAggregatesFilter<"Trip"> | number
    title?: StringWithAggregatesFilter<"Trip"> | string
    destination?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    budget?: IntNullableWithAggregatesFilter<"Trip"> | number | null
  }

  export type TripMessageWhereInput = {
    AND?: TripMessageWhereInput | TripMessageWhereInput[]
    OR?: TripMessageWhereInput[]
    NOT?: TripMessageWhereInput | TripMessageWhereInput[]
    id?: IntFilter<"TripMessage"> | number
    tripId?: IntFilter<"TripMessage"> | number
    createdAt?: DateTimeFilter<"TripMessage"> | Date | string
    role?: EnumRoleFilter<"TripMessage"> | $Enums.Role
    content?: StringFilter<"TripMessage"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TripMessageOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TripMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripMessageWhereInput | TripMessageWhereInput[]
    OR?: TripMessageWhereInput[]
    NOT?: TripMessageWhereInput | TripMessageWhereInput[]
    tripId?: IntFilter<"TripMessage"> | number
    createdAt?: DateTimeFilter<"TripMessage"> | Date | string
    role?: EnumRoleFilter<"TripMessage"> | $Enums.Role
    content?: StringFilter<"TripMessage"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type TripMessageOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
    _count?: TripMessageCountOrderByAggregateInput
    _avg?: TripMessageAvgOrderByAggregateInput
    _max?: TripMessageMaxOrderByAggregateInput
    _min?: TripMessageMinOrderByAggregateInput
    _sum?: TripMessageSumOrderByAggregateInput
  }

  export type TripMessageScalarWhereWithAggregatesInput = {
    AND?: TripMessageScalarWhereWithAggregatesInput | TripMessageScalarWhereWithAggregatesInput[]
    OR?: TripMessageScalarWhereWithAggregatesInput[]
    NOT?: TripMessageScalarWhereWithAggregatesInput | TripMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TripMessage"> | number
    tripId?: IntWithAggregatesFilter<"TripMessage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TripMessage"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"TripMessage"> | $Enums.Role
    content?: StringWithAggregatesFilter<"TripMessage"> | string
  }

  export type TripPlanWhereInput = {
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    id?: IntFilter<"TripPlan"> | number
    plan?: JsonFilter<"TripPlan">
    sources?: JsonFilter<"TripPlan">
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    tripId?: IntFilter<"TripPlan"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TripPlanOrderByWithRelationInput = {
    id?: SortOrder
    plan?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TripPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripPlanWhereInput | TripPlanWhereInput[]
    OR?: TripPlanWhereInput[]
    NOT?: TripPlanWhereInput | TripPlanWhereInput[]
    plan?: JsonFilter<"TripPlan">
    sources?: JsonFilter<"TripPlan">
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    tripId?: IntFilter<"TripPlan"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type TripPlanOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
    _count?: TripPlanCountOrderByAggregateInput
    _avg?: TripPlanAvgOrderByAggregateInput
    _max?: TripPlanMaxOrderByAggregateInput
    _min?: TripPlanMinOrderByAggregateInput
    _sum?: TripPlanSumOrderByAggregateInput
  }

  export type TripPlanScalarWhereWithAggregatesInput = {
    AND?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    OR?: TripPlanScalarWhereWithAggregatesInput[]
    NOT?: TripPlanScalarWhereWithAggregatesInput | TripPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TripPlan"> | number
    plan?: JsonWithAggregatesFilter<"TripPlan">
    sources?: JsonWithAggregatesFilter<"TripPlan">
    createdAt?: DateTimeWithAggregatesFilter<"TripPlan"> | Date | string
    tripId?: IntWithAggregatesFilter<"TripPlan"> | number
  }

  export type TripCreateInput = {
    userId: string
    title: string
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    budget?: number | null
    messages?: TripMessageCreateNestedManyWithoutTripInput
    plans?: TripPlanCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    userId: string
    id?: number
    title: string
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    budget?: number | null
    messages?: TripMessageUncheckedCreateNestedManyWithoutTripInput
    plans?: TripPlanUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: TripMessageUpdateManyWithoutTripNestedInput
    plans?: TripPlanUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: TripMessageUncheckedUpdateManyWithoutTripNestedInput
    plans?: TripPlanUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    userId: string
    id?: number
    title: string
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    budget?: number | null
  }

  export type TripUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TripMessageCreateInput = {
    createdAt?: Date | string
    role: $Enums.Role
    content: string
    trip: TripCreateNestedOneWithoutMessagesInput
  }

  export type TripMessageUncheckedCreateInput = {
    id?: number
    tripId: number
    createdAt?: Date | string
    role: $Enums.Role
    content: string
  }

  export type TripMessageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TripMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TripMessageCreateManyInput = {
    id?: number
    tripId: number
    createdAt?: Date | string
    role: $Enums.Role
    content: string
  }

  export type TripMessageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TripMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TripPlanCreateInput = {
    plan: JsonNullValueInput | InputJsonValue
    sources: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutPlansInput
  }

  export type TripPlanUncheckedCreateInput = {
    id?: number
    plan: JsonNullValueInput | InputJsonValue
    sources: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    tripId: number
  }

  export type TripPlanUpdateInput = {
    plan?: JsonNullValueInput | InputJsonValue
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPlansNestedInput
  }

  export type TripPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type TripPlanCreateManyInput = {
    id?: number
    plan: JsonNullValueInput | InputJsonValue
    sources: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    tripId: number
  }

  export type TripPlanUpdateManyMutationInput = {
    plan?: JsonNullValueInput | InputJsonValue
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TripMessageListRelationFilter = {
    every?: TripMessageWhereInput
    some?: TripMessageWhereInput
    none?: TripMessageWhereInput
  }

  export type TripPlanListRelationFilter = {
    every?: TripPlanWhereInput
    some?: TripPlanWhereInput
    none?: TripPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    budget?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    budget?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    userId?: SortOrder
    id?: SortOrder
    title?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    budget?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type TripMessageCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
  }

  export type TripMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }

  export type TripMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
  }

  export type TripMessageMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    content?: SortOrder
  }

  export type TripMessageSumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TripPlanCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
  }

  export type TripPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }

  export type TripPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
  }

  export type TripPlanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    tripId?: SortOrder
  }

  export type TripPlanSumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TripMessageCreateNestedManyWithoutTripInput = {
    create?: XOR<TripMessageCreateWithoutTripInput, TripMessageUncheckedCreateWithoutTripInput> | TripMessageCreateWithoutTripInput[] | TripMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMessageCreateOrConnectWithoutTripInput | TripMessageCreateOrConnectWithoutTripInput[]
    createMany?: TripMessageCreateManyTripInputEnvelope
    connect?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
  }

  export type TripPlanCreateNestedManyWithoutTripInput = {
    create?: XOR<TripPlanCreateWithoutTripInput, TripPlanUncheckedCreateWithoutTripInput> | TripPlanCreateWithoutTripInput[] | TripPlanUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutTripInput | TripPlanCreateOrConnectWithoutTripInput[]
    createMany?: TripPlanCreateManyTripInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type TripMessageUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripMessageCreateWithoutTripInput, TripMessageUncheckedCreateWithoutTripInput> | TripMessageCreateWithoutTripInput[] | TripMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMessageCreateOrConnectWithoutTripInput | TripMessageCreateOrConnectWithoutTripInput[]
    createMany?: TripMessageCreateManyTripInputEnvelope
    connect?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
  }

  export type TripPlanUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripPlanCreateWithoutTripInput, TripPlanUncheckedCreateWithoutTripInput> | TripPlanCreateWithoutTripInput[] | TripPlanUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutTripInput | TripPlanCreateOrConnectWithoutTripInput[]
    createMany?: TripPlanCreateManyTripInputEnvelope
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripMessageUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripMessageCreateWithoutTripInput, TripMessageUncheckedCreateWithoutTripInput> | TripMessageCreateWithoutTripInput[] | TripMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMessageCreateOrConnectWithoutTripInput | TripMessageCreateOrConnectWithoutTripInput[]
    upsert?: TripMessageUpsertWithWhereUniqueWithoutTripInput | TripMessageUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripMessageCreateManyTripInputEnvelope
    set?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    disconnect?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    delete?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    connect?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    update?: TripMessageUpdateWithWhereUniqueWithoutTripInput | TripMessageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripMessageUpdateManyWithWhereWithoutTripInput | TripMessageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripMessageScalarWhereInput | TripMessageScalarWhereInput[]
  }

  export type TripPlanUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripPlanCreateWithoutTripInput, TripPlanUncheckedCreateWithoutTripInput> | TripPlanCreateWithoutTripInput[] | TripPlanUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutTripInput | TripPlanCreateOrConnectWithoutTripInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutTripInput | TripPlanUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripPlanCreateManyTripInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutTripInput | TripPlanUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutTripInput | TripPlanUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripMessageUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripMessageCreateWithoutTripInput, TripMessageUncheckedCreateWithoutTripInput> | TripMessageCreateWithoutTripInput[] | TripMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMessageCreateOrConnectWithoutTripInput | TripMessageCreateOrConnectWithoutTripInput[]
    upsert?: TripMessageUpsertWithWhereUniqueWithoutTripInput | TripMessageUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripMessageCreateManyTripInputEnvelope
    set?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    disconnect?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    delete?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    connect?: TripMessageWhereUniqueInput | TripMessageWhereUniqueInput[]
    update?: TripMessageUpdateWithWhereUniqueWithoutTripInput | TripMessageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripMessageUpdateManyWithWhereWithoutTripInput | TripMessageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripMessageScalarWhereInput | TripMessageScalarWhereInput[]
  }

  export type TripPlanUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripPlanCreateWithoutTripInput, TripPlanUncheckedCreateWithoutTripInput> | TripPlanCreateWithoutTripInput[] | TripPlanUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPlanCreateOrConnectWithoutTripInput | TripPlanCreateOrConnectWithoutTripInput[]
    upsert?: TripPlanUpsertWithWhereUniqueWithoutTripInput | TripPlanUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripPlanCreateManyTripInputEnvelope
    set?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    disconnect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    delete?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    connect?: TripPlanWhereUniqueInput | TripPlanWhereUniqueInput[]
    update?: TripPlanUpdateWithWhereUniqueWithoutTripInput | TripPlanUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripPlanUpdateManyWithWhereWithoutTripInput | TripPlanUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutMessagesInput
    connect?: TripWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TripUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutMessagesInput
    upsert?: TripUpsertWithoutMessagesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutMessagesInput, TripUpdateWithoutMessagesInput>, TripUncheckedUpdateWithoutMessagesInput>
  }

  export type TripCreateNestedOneWithoutPlansInput = {
    create?: XOR<TripCreateWithoutPlansInput, TripUncheckedCreateWithoutPlansInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlansInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<TripCreateWithoutPlansInput, TripUncheckedCreateWithoutPlansInput>
    connectOrCreate?: TripCreateOrConnectWithoutPlansInput
    upsert?: TripUpsertWithoutPlansInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPlansInput, TripUpdateWithoutPlansInput>, TripUncheckedUpdateWithoutPlansInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TripMessageCreateWithoutTripInput = {
    createdAt?: Date | string
    role: $Enums.Role
    content: string
  }

  export type TripMessageUncheckedCreateWithoutTripInput = {
    id?: number
    createdAt?: Date | string
    role: $Enums.Role
    content: string
  }

  export type TripMessageCreateOrConnectWithoutTripInput = {
    where: TripMessageWhereUniqueInput
    create: XOR<TripMessageCreateWithoutTripInput, TripMessageUncheckedCreateWithoutTripInput>
  }

  export type TripMessageCreateManyTripInputEnvelope = {
    data: TripMessageCreateManyTripInput | TripMessageCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripPlanCreateWithoutTripInput = {
    plan: JsonNullValueInput | InputJsonValue
    sources: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TripPlanUncheckedCreateWithoutTripInput = {
    id?: number
    plan: JsonNullValueInput | InputJsonValue
    sources: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TripPlanCreateOrConnectWithoutTripInput = {
    where: TripPlanWhereUniqueInput
    create: XOR<TripPlanCreateWithoutTripInput, TripPlanUncheckedCreateWithoutTripInput>
  }

  export type TripPlanCreateManyTripInputEnvelope = {
    data: TripPlanCreateManyTripInput | TripPlanCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripMessageUpsertWithWhereUniqueWithoutTripInput = {
    where: TripMessageWhereUniqueInput
    update: XOR<TripMessageUpdateWithoutTripInput, TripMessageUncheckedUpdateWithoutTripInput>
    create: XOR<TripMessageCreateWithoutTripInput, TripMessageUncheckedCreateWithoutTripInput>
  }

  export type TripMessageUpdateWithWhereUniqueWithoutTripInput = {
    where: TripMessageWhereUniqueInput
    data: XOR<TripMessageUpdateWithoutTripInput, TripMessageUncheckedUpdateWithoutTripInput>
  }

  export type TripMessageUpdateManyWithWhereWithoutTripInput = {
    where: TripMessageScalarWhereInput
    data: XOR<TripMessageUpdateManyMutationInput, TripMessageUncheckedUpdateManyWithoutTripInput>
  }

  export type TripMessageScalarWhereInput = {
    AND?: TripMessageScalarWhereInput | TripMessageScalarWhereInput[]
    OR?: TripMessageScalarWhereInput[]
    NOT?: TripMessageScalarWhereInput | TripMessageScalarWhereInput[]
    id?: IntFilter<"TripMessage"> | number
    tripId?: IntFilter<"TripMessage"> | number
    createdAt?: DateTimeFilter<"TripMessage"> | Date | string
    role?: EnumRoleFilter<"TripMessage"> | $Enums.Role
    content?: StringFilter<"TripMessage"> | string
  }

  export type TripPlanUpsertWithWhereUniqueWithoutTripInput = {
    where: TripPlanWhereUniqueInput
    update: XOR<TripPlanUpdateWithoutTripInput, TripPlanUncheckedUpdateWithoutTripInput>
    create: XOR<TripPlanCreateWithoutTripInput, TripPlanUncheckedCreateWithoutTripInput>
  }

  export type TripPlanUpdateWithWhereUniqueWithoutTripInput = {
    where: TripPlanWhereUniqueInput
    data: XOR<TripPlanUpdateWithoutTripInput, TripPlanUncheckedUpdateWithoutTripInput>
  }

  export type TripPlanUpdateManyWithWhereWithoutTripInput = {
    where: TripPlanScalarWhereInput
    data: XOR<TripPlanUpdateManyMutationInput, TripPlanUncheckedUpdateManyWithoutTripInput>
  }

  export type TripPlanScalarWhereInput = {
    AND?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    OR?: TripPlanScalarWhereInput[]
    NOT?: TripPlanScalarWhereInput | TripPlanScalarWhereInput[]
    id?: IntFilter<"TripPlan"> | number
    plan?: JsonFilter<"TripPlan">
    sources?: JsonFilter<"TripPlan">
    createdAt?: DateTimeFilter<"TripPlan"> | Date | string
    tripId?: IntFilter<"TripPlan"> | number
  }

  export type TripCreateWithoutMessagesInput = {
    userId: string
    title: string
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    budget?: number | null
    plans?: TripPlanCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutMessagesInput = {
    userId: string
    id?: number
    title: string
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    budget?: number | null
    plans?: TripPlanUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutMessagesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
  }

  export type TripUpsertWithoutMessagesInput = {
    update: XOR<TripUpdateWithoutMessagesInput, TripUncheckedUpdateWithoutMessagesInput>
    create: XOR<TripCreateWithoutMessagesInput, TripUncheckedCreateWithoutMessagesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutMessagesInput, TripUncheckedUpdateWithoutMessagesInput>
  }

  export type TripUpdateWithoutMessagesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    plans?: TripPlanUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutMessagesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    plans?: TripPlanUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutPlansInput = {
    userId: string
    title: string
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    budget?: number | null
    messages?: TripMessageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPlansInput = {
    userId: string
    id?: number
    title: string
    destination: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    budget?: number | null
    messages?: TripMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPlansInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPlansInput, TripUncheckedCreateWithoutPlansInput>
  }

  export type TripUpsertWithoutPlansInput = {
    update: XOR<TripUpdateWithoutPlansInput, TripUncheckedUpdateWithoutPlansInput>
    create: XOR<TripCreateWithoutPlansInput, TripUncheckedCreateWithoutPlansInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPlansInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPlansInput, TripUncheckedUpdateWithoutPlansInput>
  }

  export type TripUpdateWithoutPlansInput = {
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: TripMessageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPlansInput = {
    userId?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    messages?: TripMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripMessageCreateManyTripInput = {
    id?: number
    createdAt?: Date | string
    role: $Enums.Role
    content: string
  }

  export type TripPlanCreateManyTripInput = {
    id?: number
    plan: JsonNullValueInput | InputJsonValue
    sources: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TripMessageUpdateWithoutTripInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TripMessageUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TripMessageUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TripPlanUpdateWithoutTripInput = {
    plan?: JsonNullValueInput | InputJsonValue
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPlanUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    sources?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}