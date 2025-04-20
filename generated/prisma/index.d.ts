
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
 * Model PrioRequest
 * 
 */
export type PrioRequest = $Result.DefaultSelection<Prisma.$PrioRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PrioStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DENIED: 'DENIED',
  QUEUED: 'QUEUED',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
};

export type PrioStatus = (typeof PrioStatus)[keyof typeof PrioStatus]

}

export type PrioStatus = $Enums.PrioStatus

export const PrioStatus: typeof $Enums.PrioStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PrioRequests
 * const prioRequests = await prisma.prioRequest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PrioRequests
   * const prioRequests = await prisma.prioRequest.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.prioRequest`: Exposes CRUD operations for the **PrioRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrioRequests
    * const prioRequests = await prisma.prioRequest.findMany()
    * ```
    */
  get prioRequest(): Prisma.PrioRequestDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    PrioRequest: 'PrioRequest'
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
      modelProps: "prioRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PrioRequest: {
        payload: Prisma.$PrioRequestPayload<ExtArgs>
        fields: Prisma.PrioRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrioRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrioRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>
          }
          findFirst: {
            args: Prisma.PrioRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrioRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>
          }
          findMany: {
            args: Prisma.PrioRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>[]
          }
          create: {
            args: Prisma.PrioRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>
          }
          createMany: {
            args: Prisma.PrioRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrioRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>[]
          }
          delete: {
            args: Prisma.PrioRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>
          }
          update: {
            args: Prisma.PrioRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>
          }
          deleteMany: {
            args: Prisma.PrioRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrioRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrioRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>[]
          }
          upsert: {
            args: Prisma.PrioRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrioRequestPayload>
          }
          aggregate: {
            args: Prisma.PrioRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrioRequest>
          }
          groupBy: {
            args: Prisma.PrioRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrioRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrioRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PrioRequestCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    prioRequest?: PrioRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model PrioRequest
   */

  export type AggregatePrioRequest = {
    _count: PrioRequestCountAggregateOutputType | null
    _avg: PrioRequestAvgAggregateOutputType | null
    _sum: PrioRequestSumAggregateOutputType | null
    _min: PrioRequestMinAggregateOutputType | null
    _max: PrioRequestMaxAggregateOutputType | null
  }

  export type PrioRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type PrioRequestSumAggregateOutputType = {
    id: number | null
  }

  export type PrioRequestMinAggregateOutputType = {
    id: number | null
    creatorId: string | null
    location: string | null
    plan: string | null
    involved: string | null
    callText: string | null
    status: $Enums.PrioStatus | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrioRequestMaxAggregateOutputType = {
    id: number | null
    creatorId: string | null
    location: string | null
    plan: string | null
    involved: string | null
    callText: string | null
    status: $Enums.PrioStatus | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrioRequestCountAggregateOutputType = {
    id: number
    creatorId: number
    location: number
    plan: number
    involved: number
    callText: number
    status: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrioRequestAvgAggregateInputType = {
    id?: true
  }

  export type PrioRequestSumAggregateInputType = {
    id?: true
  }

  export type PrioRequestMinAggregateInputType = {
    id?: true
    creatorId?: true
    location?: true
    plan?: true
    involved?: true
    callText?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrioRequestMaxAggregateInputType = {
    id?: true
    creatorId?: true
    location?: true
    plan?: true
    involved?: true
    callText?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrioRequestCountAggregateInputType = {
    id?: true
    creatorId?: true
    location?: true
    plan?: true
    involved?: true
    callText?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrioRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrioRequest to aggregate.
     */
    where?: PrioRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrioRequests to fetch.
     */
    orderBy?: PrioRequestOrderByWithRelationInput | PrioRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrioRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrioRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrioRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrioRequests
    **/
    _count?: true | PrioRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrioRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrioRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrioRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrioRequestMaxAggregateInputType
  }

  export type GetPrioRequestAggregateType<T extends PrioRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePrioRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrioRequest[P]>
      : GetScalarType<T[P], AggregatePrioRequest[P]>
  }




  export type PrioRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrioRequestWhereInput
    orderBy?: PrioRequestOrderByWithAggregationInput | PrioRequestOrderByWithAggregationInput[]
    by: PrioRequestScalarFieldEnum[] | PrioRequestScalarFieldEnum
    having?: PrioRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrioRequestCountAggregateInputType | true
    _avg?: PrioRequestAvgAggregateInputType
    _sum?: PrioRequestSumAggregateInputType
    _min?: PrioRequestMinAggregateInputType
    _max?: PrioRequestMaxAggregateInputType
  }

  export type PrioRequestGroupByOutputType = {
    id: number
    creatorId: string
    location: string
    plan: string
    involved: string
    callText: string
    status: $Enums.PrioStatus
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: PrioRequestCountAggregateOutputType | null
    _avg: PrioRequestAvgAggregateOutputType | null
    _sum: PrioRequestSumAggregateOutputType | null
    _min: PrioRequestMinAggregateOutputType | null
    _max: PrioRequestMaxAggregateOutputType | null
  }

  type GetPrioRequestGroupByPayload<T extends PrioRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrioRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrioRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrioRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PrioRequestGroupByOutputType[P]>
        }
      >
    >


  export type PrioRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    location?: boolean
    plan?: boolean
    involved?: boolean
    callText?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prioRequest"]>

  export type PrioRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    location?: boolean
    plan?: boolean
    involved?: boolean
    callText?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prioRequest"]>

  export type PrioRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    location?: boolean
    plan?: boolean
    involved?: boolean
    callText?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prioRequest"]>

  export type PrioRequestSelectScalar = {
    id?: boolean
    creatorId?: boolean
    location?: boolean
    plan?: boolean
    involved?: boolean
    callText?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrioRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "location" | "plan" | "involved" | "callText" | "status" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["prioRequest"]>

  export type $PrioRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrioRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creatorId: string
      location: string
      plan: string
      involved: string
      callText: string
      status: $Enums.PrioStatus
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prioRequest"]>
    composites: {}
  }

  type PrioRequestGetPayload<S extends boolean | null | undefined | PrioRequestDefaultArgs> = $Result.GetResult<Prisma.$PrioRequestPayload, S>

  type PrioRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrioRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrioRequestCountAggregateInputType | true
    }

  export interface PrioRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrioRequest'], meta: { name: 'PrioRequest' } }
    /**
     * Find zero or one PrioRequest that matches the filter.
     * @param {PrioRequestFindUniqueArgs} args - Arguments to find a PrioRequest
     * @example
     * // Get one PrioRequest
     * const prioRequest = await prisma.prioRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrioRequestFindUniqueArgs>(args: SelectSubset<T, PrioRequestFindUniqueArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrioRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrioRequestFindUniqueOrThrowArgs} args - Arguments to find a PrioRequest
     * @example
     * // Get one PrioRequest
     * const prioRequest = await prisma.prioRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrioRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PrioRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrioRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioRequestFindFirstArgs} args - Arguments to find a PrioRequest
     * @example
     * // Get one PrioRequest
     * const prioRequest = await prisma.prioRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrioRequestFindFirstArgs>(args?: SelectSubset<T, PrioRequestFindFirstArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrioRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioRequestFindFirstOrThrowArgs} args - Arguments to find a PrioRequest
     * @example
     * // Get one PrioRequest
     * const prioRequest = await prisma.prioRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrioRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PrioRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrioRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrioRequests
     * const prioRequests = await prisma.prioRequest.findMany()
     * 
     * // Get first 10 PrioRequests
     * const prioRequests = await prisma.prioRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prioRequestWithIdOnly = await prisma.prioRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrioRequestFindManyArgs>(args?: SelectSubset<T, PrioRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrioRequest.
     * @param {PrioRequestCreateArgs} args - Arguments to create a PrioRequest.
     * @example
     * // Create one PrioRequest
     * const PrioRequest = await prisma.prioRequest.create({
     *   data: {
     *     // ... data to create a PrioRequest
     *   }
     * })
     * 
     */
    create<T extends PrioRequestCreateArgs>(args: SelectSubset<T, PrioRequestCreateArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrioRequests.
     * @param {PrioRequestCreateManyArgs} args - Arguments to create many PrioRequests.
     * @example
     * // Create many PrioRequests
     * const prioRequest = await prisma.prioRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrioRequestCreateManyArgs>(args?: SelectSubset<T, PrioRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrioRequests and returns the data saved in the database.
     * @param {PrioRequestCreateManyAndReturnArgs} args - Arguments to create many PrioRequests.
     * @example
     * // Create many PrioRequests
     * const prioRequest = await prisma.prioRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrioRequests and only return the `id`
     * const prioRequestWithIdOnly = await prisma.prioRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrioRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PrioRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrioRequest.
     * @param {PrioRequestDeleteArgs} args - Arguments to delete one PrioRequest.
     * @example
     * // Delete one PrioRequest
     * const PrioRequest = await prisma.prioRequest.delete({
     *   where: {
     *     // ... filter to delete one PrioRequest
     *   }
     * })
     * 
     */
    delete<T extends PrioRequestDeleteArgs>(args: SelectSubset<T, PrioRequestDeleteArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrioRequest.
     * @param {PrioRequestUpdateArgs} args - Arguments to update one PrioRequest.
     * @example
     * // Update one PrioRequest
     * const prioRequest = await prisma.prioRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrioRequestUpdateArgs>(args: SelectSubset<T, PrioRequestUpdateArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrioRequests.
     * @param {PrioRequestDeleteManyArgs} args - Arguments to filter PrioRequests to delete.
     * @example
     * // Delete a few PrioRequests
     * const { count } = await prisma.prioRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrioRequestDeleteManyArgs>(args?: SelectSubset<T, PrioRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrioRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrioRequests
     * const prioRequest = await prisma.prioRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrioRequestUpdateManyArgs>(args: SelectSubset<T, PrioRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrioRequests and returns the data updated in the database.
     * @param {PrioRequestUpdateManyAndReturnArgs} args - Arguments to update many PrioRequests.
     * @example
     * // Update many PrioRequests
     * const prioRequest = await prisma.prioRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrioRequests and only return the `id`
     * const prioRequestWithIdOnly = await prisma.prioRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrioRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PrioRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrioRequest.
     * @param {PrioRequestUpsertArgs} args - Arguments to update or create a PrioRequest.
     * @example
     * // Update or create a PrioRequest
     * const prioRequest = await prisma.prioRequest.upsert({
     *   create: {
     *     // ... data to create a PrioRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrioRequest we want to update
     *   }
     * })
     */
    upsert<T extends PrioRequestUpsertArgs>(args: SelectSubset<T, PrioRequestUpsertArgs<ExtArgs>>): Prisma__PrioRequestClient<$Result.GetResult<Prisma.$PrioRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrioRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioRequestCountArgs} args - Arguments to filter PrioRequests to count.
     * @example
     * // Count the number of PrioRequests
     * const count = await prisma.prioRequest.count({
     *   where: {
     *     // ... the filter for the PrioRequests we want to count
     *   }
     * })
    **/
    count<T extends PrioRequestCountArgs>(
      args?: Subset<T, PrioRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrioRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrioRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrioRequestAggregateArgs>(args: Subset<T, PrioRequestAggregateArgs>): Prisma.PrismaPromise<GetPrioRequestAggregateType<T>>

    /**
     * Group by PrioRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioRequestGroupByArgs} args - Group by arguments.
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
      T extends PrioRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrioRequestGroupByArgs['orderBy'] }
        : { orderBy?: PrioRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrioRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrioRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrioRequest model
   */
  readonly fields: PrioRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrioRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrioRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PrioRequest model
   */
  interface PrioRequestFieldRefs {
    readonly id: FieldRef<"PrioRequest", 'Int'>
    readonly creatorId: FieldRef<"PrioRequest", 'String'>
    readonly location: FieldRef<"PrioRequest", 'String'>
    readonly plan: FieldRef<"PrioRequest", 'String'>
    readonly involved: FieldRef<"PrioRequest", 'String'>
    readonly callText: FieldRef<"PrioRequest", 'String'>
    readonly status: FieldRef<"PrioRequest", 'PrioStatus'>
    readonly note: FieldRef<"PrioRequest", 'String'>
    readonly createdAt: FieldRef<"PrioRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PrioRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrioRequest findUnique
   */
  export type PrioRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrioRequest to fetch.
     */
    where: PrioRequestWhereUniqueInput
  }

  /**
   * PrioRequest findUniqueOrThrow
   */
  export type PrioRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrioRequest to fetch.
     */
    where: PrioRequestWhereUniqueInput
  }

  /**
   * PrioRequest findFirst
   */
  export type PrioRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrioRequest to fetch.
     */
    where?: PrioRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrioRequests to fetch.
     */
    orderBy?: PrioRequestOrderByWithRelationInput | PrioRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrioRequests.
     */
    cursor?: PrioRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrioRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrioRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrioRequests.
     */
    distinct?: PrioRequestScalarFieldEnum | PrioRequestScalarFieldEnum[]
  }

  /**
   * PrioRequest findFirstOrThrow
   */
  export type PrioRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrioRequest to fetch.
     */
    where?: PrioRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrioRequests to fetch.
     */
    orderBy?: PrioRequestOrderByWithRelationInput | PrioRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrioRequests.
     */
    cursor?: PrioRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrioRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrioRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrioRequests.
     */
    distinct?: PrioRequestScalarFieldEnum | PrioRequestScalarFieldEnum[]
  }

  /**
   * PrioRequest findMany
   */
  export type PrioRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * Filter, which PrioRequests to fetch.
     */
    where?: PrioRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrioRequests to fetch.
     */
    orderBy?: PrioRequestOrderByWithRelationInput | PrioRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrioRequests.
     */
    cursor?: PrioRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrioRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrioRequests.
     */
    skip?: number
    distinct?: PrioRequestScalarFieldEnum | PrioRequestScalarFieldEnum[]
  }

  /**
   * PrioRequest create
   */
  export type PrioRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a PrioRequest.
     */
    data: XOR<PrioRequestCreateInput, PrioRequestUncheckedCreateInput>
  }

  /**
   * PrioRequest createMany
   */
  export type PrioRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrioRequests.
     */
    data: PrioRequestCreateManyInput | PrioRequestCreateManyInput[]
  }

  /**
   * PrioRequest createManyAndReturn
   */
  export type PrioRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PrioRequests.
     */
    data: PrioRequestCreateManyInput | PrioRequestCreateManyInput[]
  }

  /**
   * PrioRequest update
   */
  export type PrioRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a PrioRequest.
     */
    data: XOR<PrioRequestUpdateInput, PrioRequestUncheckedUpdateInput>
    /**
     * Choose, which PrioRequest to update.
     */
    where: PrioRequestWhereUniqueInput
  }

  /**
   * PrioRequest updateMany
   */
  export type PrioRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrioRequests.
     */
    data: XOR<PrioRequestUpdateManyMutationInput, PrioRequestUncheckedUpdateManyInput>
    /**
     * Filter which PrioRequests to update
     */
    where?: PrioRequestWhereInput
    /**
     * Limit how many PrioRequests to update.
     */
    limit?: number
  }

  /**
   * PrioRequest updateManyAndReturn
   */
  export type PrioRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * The data used to update PrioRequests.
     */
    data: XOR<PrioRequestUpdateManyMutationInput, PrioRequestUncheckedUpdateManyInput>
    /**
     * Filter which PrioRequests to update
     */
    where?: PrioRequestWhereInput
    /**
     * Limit how many PrioRequests to update.
     */
    limit?: number
  }

  /**
   * PrioRequest upsert
   */
  export type PrioRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the PrioRequest to update in case it exists.
     */
    where: PrioRequestWhereUniqueInput
    /**
     * In case the PrioRequest found by the `where` argument doesn't exist, create a new PrioRequest with this data.
     */
    create: XOR<PrioRequestCreateInput, PrioRequestUncheckedCreateInput>
    /**
     * In case the PrioRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrioRequestUpdateInput, PrioRequestUncheckedUpdateInput>
  }

  /**
   * PrioRequest delete
   */
  export type PrioRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
    /**
     * Filter which PrioRequest to delete.
     */
    where: PrioRequestWhereUniqueInput
  }

  /**
   * PrioRequest deleteMany
   */
  export type PrioRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrioRequests to delete
     */
    where?: PrioRequestWhereInput
    /**
     * Limit how many PrioRequests to delete.
     */
    limit?: number
  }

  /**
   * PrioRequest without action
   */
  export type PrioRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioRequest
     */
    select?: PrioRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrioRequest
     */
    omit?: PrioRequestOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PrioRequestScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    location: 'location',
    plan: 'plan',
    involved: 'involved',
    callText: 'callText',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrioRequestScalarFieldEnum = (typeof PrioRequestScalarFieldEnum)[keyof typeof PrioRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'PrioStatus'
   */
  export type EnumPrioStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrioStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PrioRequestWhereInput = {
    AND?: PrioRequestWhereInput | PrioRequestWhereInput[]
    OR?: PrioRequestWhereInput[]
    NOT?: PrioRequestWhereInput | PrioRequestWhereInput[]
    id?: IntFilter<"PrioRequest"> | number
    creatorId?: StringFilter<"PrioRequest"> | string
    location?: StringFilter<"PrioRequest"> | string
    plan?: StringFilter<"PrioRequest"> | string
    involved?: StringFilter<"PrioRequest"> | string
    callText?: StringFilter<"PrioRequest"> | string
    status?: EnumPrioStatusFilter<"PrioRequest"> | $Enums.PrioStatus
    note?: StringNullableFilter<"PrioRequest"> | string | null
    createdAt?: DateTimeFilter<"PrioRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PrioRequest"> | Date | string
  }

  export type PrioRequestOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    location?: SortOrder
    plan?: SortOrder
    involved?: SortOrder
    callText?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrioRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrioRequestWhereInput | PrioRequestWhereInput[]
    OR?: PrioRequestWhereInput[]
    NOT?: PrioRequestWhereInput | PrioRequestWhereInput[]
    creatorId?: StringFilter<"PrioRequest"> | string
    location?: StringFilter<"PrioRequest"> | string
    plan?: StringFilter<"PrioRequest"> | string
    involved?: StringFilter<"PrioRequest"> | string
    callText?: StringFilter<"PrioRequest"> | string
    status?: EnumPrioStatusFilter<"PrioRequest"> | $Enums.PrioStatus
    note?: StringNullableFilter<"PrioRequest"> | string | null
    createdAt?: DateTimeFilter<"PrioRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PrioRequest"> | Date | string
  }, "id">

  export type PrioRequestOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    location?: SortOrder
    plan?: SortOrder
    involved?: SortOrder
    callText?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrioRequestCountOrderByAggregateInput
    _avg?: PrioRequestAvgOrderByAggregateInput
    _max?: PrioRequestMaxOrderByAggregateInput
    _min?: PrioRequestMinOrderByAggregateInput
    _sum?: PrioRequestSumOrderByAggregateInput
  }

  export type PrioRequestScalarWhereWithAggregatesInput = {
    AND?: PrioRequestScalarWhereWithAggregatesInput | PrioRequestScalarWhereWithAggregatesInput[]
    OR?: PrioRequestScalarWhereWithAggregatesInput[]
    NOT?: PrioRequestScalarWhereWithAggregatesInput | PrioRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrioRequest"> | number
    creatorId?: StringWithAggregatesFilter<"PrioRequest"> | string
    location?: StringWithAggregatesFilter<"PrioRequest"> | string
    plan?: StringWithAggregatesFilter<"PrioRequest"> | string
    involved?: StringWithAggregatesFilter<"PrioRequest"> | string
    callText?: StringWithAggregatesFilter<"PrioRequest"> | string
    status?: EnumPrioStatusWithAggregatesFilter<"PrioRequest"> | $Enums.PrioStatus
    note?: StringNullableWithAggregatesFilter<"PrioRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrioRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PrioRequest"> | Date | string
  }

  export type PrioRequestCreateInput = {
    creatorId: string
    location: string
    plan: string
    involved: string
    callText: string
    status?: $Enums.PrioStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrioRequestUncheckedCreateInput = {
    id?: number
    creatorId: string
    location: string
    plan: string
    involved: string
    callText: string
    status?: $Enums.PrioStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrioRequestUpdateInput = {
    creatorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    involved?: StringFieldUpdateOperationsInput | string
    callText?: StringFieldUpdateOperationsInput | string
    status?: EnumPrioStatusFieldUpdateOperationsInput | $Enums.PrioStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrioRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    involved?: StringFieldUpdateOperationsInput | string
    callText?: StringFieldUpdateOperationsInput | string
    status?: EnumPrioStatusFieldUpdateOperationsInput | $Enums.PrioStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrioRequestCreateManyInput = {
    id?: number
    creatorId: string
    location: string
    plan: string
    involved: string
    callText: string
    status?: $Enums.PrioStatus
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrioRequestUpdateManyMutationInput = {
    creatorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    involved?: StringFieldUpdateOperationsInput | string
    callText?: StringFieldUpdateOperationsInput | string
    status?: EnumPrioStatusFieldUpdateOperationsInput | $Enums.PrioStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrioRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    involved?: StringFieldUpdateOperationsInput | string
    callText?: StringFieldUpdateOperationsInput | string
    status?: EnumPrioStatusFieldUpdateOperationsInput | $Enums.PrioStatus
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPrioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioStatus | EnumPrioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrioStatus[]
    notIn?: $Enums.PrioStatus[]
    not?: NestedEnumPrioStatusFilter<$PrismaModel> | $Enums.PrioStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrioRequestCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    location?: SortOrder
    plan?: SortOrder
    involved?: SortOrder
    callText?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrioRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrioRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    location?: SortOrder
    plan?: SortOrder
    involved?: SortOrder
    callText?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrioRequestMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    location?: SortOrder
    plan?: SortOrder
    involved?: SortOrder
    callText?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrioRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type EnumPrioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioStatus | EnumPrioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrioStatus[]
    notIn?: $Enums.PrioStatus[]
    not?: NestedEnumPrioStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioStatusFilter<$PrismaModel>
    _max?: NestedEnumPrioStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPrioStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrioStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPrioStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioStatus | EnumPrioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrioStatus[]
    notIn?: $Enums.PrioStatus[]
    not?: NestedEnumPrioStatusFilter<$PrismaModel> | $Enums.PrioStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumPrioStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrioStatus | EnumPrioStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrioStatus[]
    notIn?: $Enums.PrioStatus[]
    not?: NestedEnumPrioStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrioStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioStatusFilter<$PrismaModel>
    _max?: NestedEnumPrioStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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