
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Olt
 * 
 */
export type Olt = $Result.DefaultSelection<Prisma.$OltPayload>
/**
 * Model Port
 * 
 */
export type Port = $Result.DefaultSelection<Prisma.$PortPayload>
/**
 * Model Edfa
 * 
 */
export type Edfa = $Result.DefaultSelection<Prisma.$EdfaPayload>
/**
 * Model Chasis
 * 
 */
export type Chasis = $Result.DefaultSelection<Prisma.$ChasisPayload>
/**
 * Model Divisor
 * 
 */
export type Divisor = $Result.DefaultSelection<Prisma.$DivisorPayload>
/**
 * Model Odf
 * 
 */
export type Odf = $Result.DefaultSelection<Prisma.$OdfPayload>
/**
 * Model OdfPort
 * 
 */
export type OdfPort = $Result.DefaultSelection<Prisma.$OdfPortPayload>
/**
 * Model Mapping
 * 
 */
export type Mapping = $Result.DefaultSelection<Prisma.$MappingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Olts
 * const olts = await prisma.olt.findMany()
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
   * // Fetch zero or more Olts
   * const olts = await prisma.olt.findMany()
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
   * `prisma.olt`: Exposes CRUD operations for the **Olt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Olts
    * const olts = await prisma.olt.findMany()
    * ```
    */
  get olt(): Prisma.OltDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.port`: Exposes CRUD operations for the **Port** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ports
    * const ports = await prisma.port.findMany()
    * ```
    */
  get port(): Prisma.PortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.edfa`: Exposes CRUD operations for the **Edfa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Edfas
    * const edfas = await prisma.edfa.findMany()
    * ```
    */
  get edfa(): Prisma.EdfaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chasis`: Exposes CRUD operations for the **Chasis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chases
    * const chases = await prisma.chasis.findMany()
    * ```
    */
  get chasis(): Prisma.ChasisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.divisor`: Exposes CRUD operations for the **Divisor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisors
    * const divisors = await prisma.divisor.findMany()
    * ```
    */
  get divisor(): Prisma.DivisorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.odf`: Exposes CRUD operations for the **Odf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Odfs
    * const odfs = await prisma.odf.findMany()
    * ```
    */
  get odf(): Prisma.OdfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.odfPort`: Exposes CRUD operations for the **OdfPort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OdfPorts
    * const odfPorts = await prisma.odfPort.findMany()
    * ```
    */
  get odfPort(): Prisma.OdfPortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapping`: Exposes CRUD operations for the **Mapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mappings
    * const mappings = await prisma.mapping.findMany()
    * ```
    */
  get mapping(): Prisma.MappingDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Olt: 'Olt',
    Port: 'Port',
    Edfa: 'Edfa',
    Chasis: 'Chasis',
    Divisor: 'Divisor',
    Odf: 'Odf',
    OdfPort: 'OdfPort',
    Mapping: 'Mapping'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "olt" | "port" | "edfa" | "chasis" | "divisor" | "odf" | "odfPort" | "mapping"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Olt: {
        payload: Prisma.$OltPayload<ExtArgs>
        fields: Prisma.OltFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OltFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OltFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>
          }
          findFirst: {
            args: Prisma.OltFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OltFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>
          }
          findMany: {
            args: Prisma.OltFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>[]
          }
          create: {
            args: Prisma.OltCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>
          }
          createMany: {
            args: Prisma.OltCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OltCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>[]
          }
          delete: {
            args: Prisma.OltDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>
          }
          update: {
            args: Prisma.OltUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>
          }
          deleteMany: {
            args: Prisma.OltDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OltUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OltUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>[]
          }
          upsert: {
            args: Prisma.OltUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OltPayload>
          }
          aggregate: {
            args: Prisma.OltAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOlt>
          }
          groupBy: {
            args: Prisma.OltGroupByArgs<ExtArgs>
            result: $Utils.Optional<OltGroupByOutputType>[]
          }
          count: {
            args: Prisma.OltCountArgs<ExtArgs>
            result: $Utils.Optional<OltCountAggregateOutputType> | number
          }
        }
      }
      Port: {
        payload: Prisma.$PortPayload<ExtArgs>
        fields: Prisma.PortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          findFirst: {
            args: Prisma.PortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          findMany: {
            args: Prisma.PortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>[]
          }
          create: {
            args: Prisma.PortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          createMany: {
            args: Prisma.PortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>[]
          }
          delete: {
            args: Prisma.PortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          update: {
            args: Prisma.PortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          deleteMany: {
            args: Prisma.PortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>[]
          }
          upsert: {
            args: Prisma.PortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortPayload>
          }
          aggregate: {
            args: Prisma.PortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePort>
          }
          groupBy: {
            args: Prisma.PortGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortCountArgs<ExtArgs>
            result: $Utils.Optional<PortCountAggregateOutputType> | number
          }
        }
      }
      Edfa: {
        payload: Prisma.$EdfaPayload<ExtArgs>
        fields: Prisma.EdfaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EdfaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EdfaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>
          }
          findFirst: {
            args: Prisma.EdfaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EdfaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>
          }
          findMany: {
            args: Prisma.EdfaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>[]
          }
          create: {
            args: Prisma.EdfaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>
          }
          createMany: {
            args: Prisma.EdfaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EdfaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>[]
          }
          delete: {
            args: Prisma.EdfaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>
          }
          update: {
            args: Prisma.EdfaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>
          }
          deleteMany: {
            args: Prisma.EdfaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EdfaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EdfaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>[]
          }
          upsert: {
            args: Prisma.EdfaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdfaPayload>
          }
          aggregate: {
            args: Prisma.EdfaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdfa>
          }
          groupBy: {
            args: Prisma.EdfaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EdfaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EdfaCountArgs<ExtArgs>
            result: $Utils.Optional<EdfaCountAggregateOutputType> | number
          }
        }
      }
      Chasis: {
        payload: Prisma.$ChasisPayload<ExtArgs>
        fields: Prisma.ChasisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChasisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChasisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>
          }
          findFirst: {
            args: Prisma.ChasisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChasisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>
          }
          findMany: {
            args: Prisma.ChasisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>[]
          }
          create: {
            args: Prisma.ChasisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>
          }
          createMany: {
            args: Prisma.ChasisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChasisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>[]
          }
          delete: {
            args: Prisma.ChasisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>
          }
          update: {
            args: Prisma.ChasisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>
          }
          deleteMany: {
            args: Prisma.ChasisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChasisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChasisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>[]
          }
          upsert: {
            args: Prisma.ChasisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChasisPayload>
          }
          aggregate: {
            args: Prisma.ChasisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChasis>
          }
          groupBy: {
            args: Prisma.ChasisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChasisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChasisCountArgs<ExtArgs>
            result: $Utils.Optional<ChasisCountAggregateOutputType> | number
          }
        }
      }
      Divisor: {
        payload: Prisma.$DivisorPayload<ExtArgs>
        fields: Prisma.DivisorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>
          }
          findFirst: {
            args: Prisma.DivisorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>
          }
          findMany: {
            args: Prisma.DivisorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>[]
          }
          create: {
            args: Prisma.DivisorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>
          }
          createMany: {
            args: Prisma.DivisorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DivisorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>[]
          }
          delete: {
            args: Prisma.DivisorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>
          }
          update: {
            args: Prisma.DivisorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>
          }
          deleteMany: {
            args: Prisma.DivisorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivisorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DivisorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>[]
          }
          upsert: {
            args: Prisma.DivisorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisorPayload>
          }
          aggregate: {
            args: Prisma.DivisorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivisor>
          }
          groupBy: {
            args: Prisma.DivisorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisorCountArgs<ExtArgs>
            result: $Utils.Optional<DivisorCountAggregateOutputType> | number
          }
        }
      }
      Odf: {
        payload: Prisma.$OdfPayload<ExtArgs>
        fields: Prisma.OdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>
          }
          findFirst: {
            args: Prisma.OdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>
          }
          findMany: {
            args: Prisma.OdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>[]
          }
          create: {
            args: Prisma.OdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>
          }
          createMany: {
            args: Prisma.OdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>[]
          }
          delete: {
            args: Prisma.OdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>
          }
          update: {
            args: Prisma.OdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>
          }
          deleteMany: {
            args: Prisma.OdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>[]
          }
          upsert: {
            args: Prisma.OdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPayload>
          }
          aggregate: {
            args: Prisma.OdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOdf>
          }
          groupBy: {
            args: Prisma.OdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<OdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.OdfCountArgs<ExtArgs>
            result: $Utils.Optional<OdfCountAggregateOutputType> | number
          }
        }
      }
      OdfPort: {
        payload: Prisma.$OdfPortPayload<ExtArgs>
        fields: Prisma.OdfPortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OdfPortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OdfPortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>
          }
          findFirst: {
            args: Prisma.OdfPortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OdfPortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>
          }
          findMany: {
            args: Prisma.OdfPortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>[]
          }
          create: {
            args: Prisma.OdfPortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>
          }
          createMany: {
            args: Prisma.OdfPortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OdfPortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>[]
          }
          delete: {
            args: Prisma.OdfPortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>
          }
          update: {
            args: Prisma.OdfPortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>
          }
          deleteMany: {
            args: Prisma.OdfPortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OdfPortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OdfPortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>[]
          }
          upsert: {
            args: Prisma.OdfPortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OdfPortPayload>
          }
          aggregate: {
            args: Prisma.OdfPortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOdfPort>
          }
          groupBy: {
            args: Prisma.OdfPortGroupByArgs<ExtArgs>
            result: $Utils.Optional<OdfPortGroupByOutputType>[]
          }
          count: {
            args: Prisma.OdfPortCountArgs<ExtArgs>
            result: $Utils.Optional<OdfPortCountAggregateOutputType> | number
          }
        }
      }
      Mapping: {
        payload: Prisma.$MappingPayload<ExtArgs>
        fields: Prisma.MappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          findFirst: {
            args: Prisma.MappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          findMany: {
            args: Prisma.MappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>[]
          }
          create: {
            args: Prisma.MappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          createMany: {
            args: Prisma.MappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>[]
          }
          delete: {
            args: Prisma.MappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          update: {
            args: Prisma.MappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          deleteMany: {
            args: Prisma.MappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>[]
          }
          upsert: {
            args: Prisma.MappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MappingPayload>
          }
          aggregate: {
            args: Prisma.MappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapping>
          }
          groupBy: {
            args: Prisma.MappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MappingCountArgs<ExtArgs>
            result: $Utils.Optional<MappingCountAggregateOutputType> | number
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    olt?: OltOmit
    port?: PortOmit
    edfa?: EdfaOmit
    chasis?: ChasisOmit
    divisor?: DivisorOmit
    odf?: OdfOmit
    odfPort?: OdfPortOmit
    mapping?: MappingOmit
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
   * Count Type OltCountOutputType
   */

  export type OltCountOutputType = {
    ports: number
  }

  export type OltCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ports?: boolean | OltCountOutputTypeCountPortsArgs
  }

  // Custom InputTypes
  /**
   * OltCountOutputType without action
   */
  export type OltCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OltCountOutputType
     */
    select?: OltCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OltCountOutputType without action
   */
  export type OltCountOutputTypeCountPortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortWhereInput
  }


  /**
   * Count Type EdfaCountOutputType
   */

  export type EdfaCountOutputType = {
    mappings: number
  }

  export type EdfaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | EdfaCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * EdfaCountOutputType without action
   */
  export type EdfaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EdfaCountOutputType
     */
    select?: EdfaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EdfaCountOutputType without action
   */
  export type EdfaCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
  }


  /**
   * Count Type ChasisCountOutputType
   */

  export type ChasisCountOutputType = {
    divisors: number
    mappings: number
  }

  export type ChasisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divisors?: boolean | ChasisCountOutputTypeCountDivisorsArgs
    mappings?: boolean | ChasisCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * ChasisCountOutputType without action
   */
  export type ChasisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChasisCountOutputType
     */
    select?: ChasisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChasisCountOutputType without action
   */
  export type ChasisCountOutputTypeCountDivisorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisorWhereInput
  }

  /**
   * ChasisCountOutputType without action
   */
  export type ChasisCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
  }


  /**
   * Count Type DivisorCountOutputType
   */

  export type DivisorCountOutputType = {
    mappings: number
  }

  export type DivisorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | DivisorCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * DivisorCountOutputType without action
   */
  export type DivisorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisorCountOutputType
     */
    select?: DivisorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DivisorCountOutputType without action
   */
  export type DivisorCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
  }


  /**
   * Count Type OdfCountOutputType
   */

  export type OdfCountOutputType = {
    mappings: number
    ports: number
  }

  export type OdfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | OdfCountOutputTypeCountMappingsArgs
    ports?: boolean | OdfCountOutputTypeCountPortsArgs
  }

  // Custom InputTypes
  /**
   * OdfCountOutputType without action
   */
  export type OdfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfCountOutputType
     */
    select?: OdfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OdfCountOutputType without action
   */
  export type OdfCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
  }

  /**
   * OdfCountOutputType without action
   */
  export type OdfCountOutputTypeCountPortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OdfPortWhereInput
  }


  /**
   * Count Type OdfPortCountOutputType
   */

  export type OdfPortCountOutputType = {
    mappings: number
  }

  export type OdfPortCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | OdfPortCountOutputTypeCountMappingsArgs
  }

  // Custom InputTypes
  /**
   * OdfPortCountOutputType without action
   */
  export type OdfPortCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPortCountOutputType
     */
    select?: OdfPortCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OdfPortCountOutputType without action
   */
  export type OdfPortCountOutputTypeCountMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Olt
   */

  export type AggregateOlt = {
    _count: OltCountAggregateOutputType | null
    _avg: OltAvgAggregateOutputType | null
    _sum: OltSumAggregateOutputType | null
    _min: OltMinAggregateOutputType | null
    _max: OltMaxAggregateOutputType | null
  }

  export type OltAvgAggregateOutputType = {
    id: number | null
  }

  export type OltSumAggregateOutputType = {
    id: number | null
  }

  export type OltMinAggregateOutputType = {
    id: number | null
    name: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type OltMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type OltCountAggregateOutputType = {
    id: number
    name: number
    ip: number
    createdAt: number
    _all: number
  }


  export type OltAvgAggregateInputType = {
    id?: true
  }

  export type OltSumAggregateInputType = {
    id?: true
  }

  export type OltMinAggregateInputType = {
    id?: true
    name?: true
    ip?: true
    createdAt?: true
  }

  export type OltMaxAggregateInputType = {
    id?: true
    name?: true
    ip?: true
    createdAt?: true
  }

  export type OltCountAggregateInputType = {
    id?: true
    name?: true
    ip?: true
    createdAt?: true
    _all?: true
  }

  export type OltAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Olt to aggregate.
     */
    where?: OltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Olts to fetch.
     */
    orderBy?: OltOrderByWithRelationInput | OltOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Olts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Olts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Olts
    **/
    _count?: true | OltCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OltAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OltSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OltMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OltMaxAggregateInputType
  }

  export type GetOltAggregateType<T extends OltAggregateArgs> = {
        [P in keyof T & keyof AggregateOlt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOlt[P]>
      : GetScalarType<T[P], AggregateOlt[P]>
  }




  export type OltGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OltWhereInput
    orderBy?: OltOrderByWithAggregationInput | OltOrderByWithAggregationInput[]
    by: OltScalarFieldEnum[] | OltScalarFieldEnum
    having?: OltScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OltCountAggregateInputType | true
    _avg?: OltAvgAggregateInputType
    _sum?: OltSumAggregateInputType
    _min?: OltMinAggregateInputType
    _max?: OltMaxAggregateInputType
  }

  export type OltGroupByOutputType = {
    id: number
    name: string
    ip: string
    createdAt: Date
    _count: OltCountAggregateOutputType | null
    _avg: OltAvgAggregateOutputType | null
    _sum: OltSumAggregateOutputType | null
    _min: OltMinAggregateOutputType | null
    _max: OltMaxAggregateOutputType | null
  }

  type GetOltGroupByPayload<T extends OltGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OltGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OltGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OltGroupByOutputType[P]>
            : GetScalarType<T[P], OltGroupByOutputType[P]>
        }
      >
    >


  export type OltSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ip?: boolean
    createdAt?: boolean
    ports?: boolean | Olt$portsArgs<ExtArgs>
    _count?: boolean | OltCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["olt"]>

  export type OltSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["olt"]>

  export type OltSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["olt"]>

  export type OltSelectScalar = {
    id?: boolean
    name?: boolean
    ip?: boolean
    createdAt?: boolean
  }

  export type OltOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ip" | "createdAt", ExtArgs["result"]["olt"]>
  export type OltInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ports?: boolean | Olt$portsArgs<ExtArgs>
    _count?: boolean | OltCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OltIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OltIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OltPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Olt"
    objects: {
      ports: Prisma.$PortPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ip: string
      createdAt: Date
    }, ExtArgs["result"]["olt"]>
    composites: {}
  }

  type OltGetPayload<S extends boolean | null | undefined | OltDefaultArgs> = $Result.GetResult<Prisma.$OltPayload, S>

  type OltCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OltFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OltCountAggregateInputType | true
    }

  export interface OltDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Olt'], meta: { name: 'Olt' } }
    /**
     * Find zero or one Olt that matches the filter.
     * @param {OltFindUniqueArgs} args - Arguments to find a Olt
     * @example
     * // Get one Olt
     * const olt = await prisma.olt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OltFindUniqueArgs>(args: SelectSubset<T, OltFindUniqueArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Olt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OltFindUniqueOrThrowArgs} args - Arguments to find a Olt
     * @example
     * // Get one Olt
     * const olt = await prisma.olt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OltFindUniqueOrThrowArgs>(args: SelectSubset<T, OltFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Olt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OltFindFirstArgs} args - Arguments to find a Olt
     * @example
     * // Get one Olt
     * const olt = await prisma.olt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OltFindFirstArgs>(args?: SelectSubset<T, OltFindFirstArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Olt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OltFindFirstOrThrowArgs} args - Arguments to find a Olt
     * @example
     * // Get one Olt
     * const olt = await prisma.olt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OltFindFirstOrThrowArgs>(args?: SelectSubset<T, OltFindFirstOrThrowArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Olts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OltFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Olts
     * const olts = await prisma.olt.findMany()
     * 
     * // Get first 10 Olts
     * const olts = await prisma.olt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oltWithIdOnly = await prisma.olt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OltFindManyArgs>(args?: SelectSubset<T, OltFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Olt.
     * @param {OltCreateArgs} args - Arguments to create a Olt.
     * @example
     * // Create one Olt
     * const Olt = await prisma.olt.create({
     *   data: {
     *     // ... data to create a Olt
     *   }
     * })
     * 
     */
    create<T extends OltCreateArgs>(args: SelectSubset<T, OltCreateArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Olts.
     * @param {OltCreateManyArgs} args - Arguments to create many Olts.
     * @example
     * // Create many Olts
     * const olt = await prisma.olt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OltCreateManyArgs>(args?: SelectSubset<T, OltCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Olts and returns the data saved in the database.
     * @param {OltCreateManyAndReturnArgs} args - Arguments to create many Olts.
     * @example
     * // Create many Olts
     * const olt = await prisma.olt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Olts and only return the `id`
     * const oltWithIdOnly = await prisma.olt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OltCreateManyAndReturnArgs>(args?: SelectSubset<T, OltCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Olt.
     * @param {OltDeleteArgs} args - Arguments to delete one Olt.
     * @example
     * // Delete one Olt
     * const Olt = await prisma.olt.delete({
     *   where: {
     *     // ... filter to delete one Olt
     *   }
     * })
     * 
     */
    delete<T extends OltDeleteArgs>(args: SelectSubset<T, OltDeleteArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Olt.
     * @param {OltUpdateArgs} args - Arguments to update one Olt.
     * @example
     * // Update one Olt
     * const olt = await prisma.olt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OltUpdateArgs>(args: SelectSubset<T, OltUpdateArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Olts.
     * @param {OltDeleteManyArgs} args - Arguments to filter Olts to delete.
     * @example
     * // Delete a few Olts
     * const { count } = await prisma.olt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OltDeleteManyArgs>(args?: SelectSubset<T, OltDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Olts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OltUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Olts
     * const olt = await prisma.olt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OltUpdateManyArgs>(args: SelectSubset<T, OltUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Olts and returns the data updated in the database.
     * @param {OltUpdateManyAndReturnArgs} args - Arguments to update many Olts.
     * @example
     * // Update many Olts
     * const olt = await prisma.olt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Olts and only return the `id`
     * const oltWithIdOnly = await prisma.olt.updateManyAndReturn({
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
    updateManyAndReturn<T extends OltUpdateManyAndReturnArgs>(args: SelectSubset<T, OltUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Olt.
     * @param {OltUpsertArgs} args - Arguments to update or create a Olt.
     * @example
     * // Update or create a Olt
     * const olt = await prisma.olt.upsert({
     *   create: {
     *     // ... data to create a Olt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Olt we want to update
     *   }
     * })
     */
    upsert<T extends OltUpsertArgs>(args: SelectSubset<T, OltUpsertArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Olts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OltCountArgs} args - Arguments to filter Olts to count.
     * @example
     * // Count the number of Olts
     * const count = await prisma.olt.count({
     *   where: {
     *     // ... the filter for the Olts we want to count
     *   }
     * })
    **/
    count<T extends OltCountArgs>(
      args?: Subset<T, OltCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OltCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Olt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OltAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OltAggregateArgs>(args: Subset<T, OltAggregateArgs>): Prisma.PrismaPromise<GetOltAggregateType<T>>

    /**
     * Group by Olt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OltGroupByArgs} args - Group by arguments.
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
      T extends OltGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OltGroupByArgs['orderBy'] }
        : { orderBy?: OltGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OltGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOltGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Olt model
   */
  readonly fields: OltFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Olt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OltClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ports<T extends Olt$portsArgs<ExtArgs> = {}>(args?: Subset<T, Olt$portsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Olt model
   */
  interface OltFieldRefs {
    readonly id: FieldRef<"Olt", 'Int'>
    readonly name: FieldRef<"Olt", 'String'>
    readonly ip: FieldRef<"Olt", 'String'>
    readonly createdAt: FieldRef<"Olt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Olt findUnique
   */
  export type OltFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * Filter, which Olt to fetch.
     */
    where: OltWhereUniqueInput
  }

  /**
   * Olt findUniqueOrThrow
   */
  export type OltFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * Filter, which Olt to fetch.
     */
    where: OltWhereUniqueInput
  }

  /**
   * Olt findFirst
   */
  export type OltFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * Filter, which Olt to fetch.
     */
    where?: OltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Olts to fetch.
     */
    orderBy?: OltOrderByWithRelationInput | OltOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Olts.
     */
    cursor?: OltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Olts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Olts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Olts.
     */
    distinct?: OltScalarFieldEnum | OltScalarFieldEnum[]
  }

  /**
   * Olt findFirstOrThrow
   */
  export type OltFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * Filter, which Olt to fetch.
     */
    where?: OltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Olts to fetch.
     */
    orderBy?: OltOrderByWithRelationInput | OltOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Olts.
     */
    cursor?: OltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Olts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Olts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Olts.
     */
    distinct?: OltScalarFieldEnum | OltScalarFieldEnum[]
  }

  /**
   * Olt findMany
   */
  export type OltFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * Filter, which Olts to fetch.
     */
    where?: OltWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Olts to fetch.
     */
    orderBy?: OltOrderByWithRelationInput | OltOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Olts.
     */
    cursor?: OltWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Olts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Olts.
     */
    skip?: number
    distinct?: OltScalarFieldEnum | OltScalarFieldEnum[]
  }

  /**
   * Olt create
   */
  export type OltCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * The data needed to create a Olt.
     */
    data: XOR<OltCreateInput, OltUncheckedCreateInput>
  }

  /**
   * Olt createMany
   */
  export type OltCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Olts.
     */
    data: OltCreateManyInput | OltCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Olt createManyAndReturn
   */
  export type OltCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * The data used to create many Olts.
     */
    data: OltCreateManyInput | OltCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Olt update
   */
  export type OltUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * The data needed to update a Olt.
     */
    data: XOR<OltUpdateInput, OltUncheckedUpdateInput>
    /**
     * Choose, which Olt to update.
     */
    where: OltWhereUniqueInput
  }

  /**
   * Olt updateMany
   */
  export type OltUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Olts.
     */
    data: XOR<OltUpdateManyMutationInput, OltUncheckedUpdateManyInput>
    /**
     * Filter which Olts to update
     */
    where?: OltWhereInput
    /**
     * Limit how many Olts to update.
     */
    limit?: number
  }

  /**
   * Olt updateManyAndReturn
   */
  export type OltUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * The data used to update Olts.
     */
    data: XOR<OltUpdateManyMutationInput, OltUncheckedUpdateManyInput>
    /**
     * Filter which Olts to update
     */
    where?: OltWhereInput
    /**
     * Limit how many Olts to update.
     */
    limit?: number
  }

  /**
   * Olt upsert
   */
  export type OltUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * The filter to search for the Olt to update in case it exists.
     */
    where: OltWhereUniqueInput
    /**
     * In case the Olt found by the `where` argument doesn't exist, create a new Olt with this data.
     */
    create: XOR<OltCreateInput, OltUncheckedCreateInput>
    /**
     * In case the Olt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OltUpdateInput, OltUncheckedUpdateInput>
  }

  /**
   * Olt delete
   */
  export type OltDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
    /**
     * Filter which Olt to delete.
     */
    where: OltWhereUniqueInput
  }

  /**
   * Olt deleteMany
   */
  export type OltDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Olts to delete
     */
    where?: OltWhereInput
    /**
     * Limit how many Olts to delete.
     */
    limit?: number
  }

  /**
   * Olt.ports
   */
  export type Olt$portsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    where?: PortWhereInput
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    cursor?: PortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortScalarFieldEnum | PortScalarFieldEnum[]
  }

  /**
   * Olt without action
   */
  export type OltDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Olt
     */
    select?: OltSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Olt
     */
    omit?: OltOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OltInclude<ExtArgs> | null
  }


  /**
   * Model Port
   */

  export type AggregatePort = {
    _count: PortCountAggregateOutputType | null
    _avg: PortAvgAggregateOutputType | null
    _sum: PortSumAggregateOutputType | null
    _min: PortMinAggregateOutputType | null
    _max: PortMaxAggregateOutputType | null
  }

  export type PortAvgAggregateOutputType = {
    id: number | null
    oltId: number | null
    slot: number | null
    portNumber: number | null
    rx: number | null
    tx: number | null
    vcc: number | null
  }

  export type PortSumAggregateOutputType = {
    id: number | null
    oltId: number | null
    slot: number | null
    portNumber: number | null
    rx: number | null
    tx: number | null
    vcc: number | null
  }

  export type PortMinAggregateOutputType = {
    id: number | null
    oltId: number | null
    slot: number | null
    portNumber: number | null
    status: string | null
    label: string | null
    rx: number | null
    tx: number | null
    vcc: number | null
    brand: string | null
  }

  export type PortMaxAggregateOutputType = {
    id: number | null
    oltId: number | null
    slot: number | null
    portNumber: number | null
    status: string | null
    label: string | null
    rx: number | null
    tx: number | null
    vcc: number | null
    brand: string | null
  }

  export type PortCountAggregateOutputType = {
    id: number
    oltId: number
    slot: number
    portNumber: number
    status: number
    label: number
    rx: number
    tx: number
    vcc: number
    brand: number
    _all: number
  }


  export type PortAvgAggregateInputType = {
    id?: true
    oltId?: true
    slot?: true
    portNumber?: true
    rx?: true
    tx?: true
    vcc?: true
  }

  export type PortSumAggregateInputType = {
    id?: true
    oltId?: true
    slot?: true
    portNumber?: true
    rx?: true
    tx?: true
    vcc?: true
  }

  export type PortMinAggregateInputType = {
    id?: true
    oltId?: true
    slot?: true
    portNumber?: true
    status?: true
    label?: true
    rx?: true
    tx?: true
    vcc?: true
    brand?: true
  }

  export type PortMaxAggregateInputType = {
    id?: true
    oltId?: true
    slot?: true
    portNumber?: true
    status?: true
    label?: true
    rx?: true
    tx?: true
    vcc?: true
    brand?: true
  }

  export type PortCountAggregateInputType = {
    id?: true
    oltId?: true
    slot?: true
    portNumber?: true
    status?: true
    label?: true
    rx?: true
    tx?: true
    vcc?: true
    brand?: true
    _all?: true
  }

  export type PortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Port to aggregate.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ports
    **/
    _count?: true | PortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortMaxAggregateInputType
  }

  export type GetPortAggregateType<T extends PortAggregateArgs> = {
        [P in keyof T & keyof AggregatePort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePort[P]>
      : GetScalarType<T[P], AggregatePort[P]>
  }




  export type PortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortWhereInput
    orderBy?: PortOrderByWithAggregationInput | PortOrderByWithAggregationInput[]
    by: PortScalarFieldEnum[] | PortScalarFieldEnum
    having?: PortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortCountAggregateInputType | true
    _avg?: PortAvgAggregateInputType
    _sum?: PortSumAggregateInputType
    _min?: PortMinAggregateInputType
    _max?: PortMaxAggregateInputType
  }

  export type PortGroupByOutputType = {
    id: number
    oltId: number
    slot: number
    portNumber: number
    status: string
    label: string | null
    rx: number | null
    tx: number | null
    vcc: number | null
    brand: string | null
    _count: PortCountAggregateOutputType | null
    _avg: PortAvgAggregateOutputType | null
    _sum: PortSumAggregateOutputType | null
    _min: PortMinAggregateOutputType | null
    _max: PortMaxAggregateOutputType | null
  }

  type GetPortGroupByPayload<T extends PortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortGroupByOutputType[P]>
            : GetScalarType<T[P], PortGroupByOutputType[P]>
        }
      >
    >


  export type PortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oltId?: boolean
    slot?: boolean
    portNumber?: boolean
    status?: boolean
    label?: boolean
    rx?: boolean
    tx?: boolean
    vcc?: boolean
    brand?: boolean
    mapping?: boolean | Port$mappingArgs<ExtArgs>
    olt?: boolean | OltDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["port"]>

  export type PortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oltId?: boolean
    slot?: boolean
    portNumber?: boolean
    status?: boolean
    label?: boolean
    rx?: boolean
    tx?: boolean
    vcc?: boolean
    brand?: boolean
    olt?: boolean | OltDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["port"]>

  export type PortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oltId?: boolean
    slot?: boolean
    portNumber?: boolean
    status?: boolean
    label?: boolean
    rx?: boolean
    tx?: boolean
    vcc?: boolean
    brand?: boolean
    olt?: boolean | OltDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["port"]>

  export type PortSelectScalar = {
    id?: boolean
    oltId?: boolean
    slot?: boolean
    portNumber?: boolean
    status?: boolean
    label?: boolean
    rx?: boolean
    tx?: boolean
    vcc?: boolean
    brand?: boolean
  }

  export type PortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "oltId" | "slot" | "portNumber" | "status" | "label" | "rx" | "tx" | "vcc" | "brand", ExtArgs["result"]["port"]>
  export type PortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapping?: boolean | Port$mappingArgs<ExtArgs>
    olt?: boolean | OltDefaultArgs<ExtArgs>
  }
  export type PortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    olt?: boolean | OltDefaultArgs<ExtArgs>
  }
  export type PortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    olt?: boolean | OltDefaultArgs<ExtArgs>
  }

  export type $PortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Port"
    objects: {
      mapping: Prisma.$MappingPayload<ExtArgs> | null
      olt: Prisma.$OltPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oltId: number
      slot: number
      portNumber: number
      status: string
      label: string | null
      rx: number | null
      tx: number | null
      vcc: number | null
      brand: string | null
    }, ExtArgs["result"]["port"]>
    composites: {}
  }

  type PortGetPayload<S extends boolean | null | undefined | PortDefaultArgs> = $Result.GetResult<Prisma.$PortPayload, S>

  type PortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortCountAggregateInputType | true
    }

  export interface PortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Port'], meta: { name: 'Port' } }
    /**
     * Find zero or one Port that matches the filter.
     * @param {PortFindUniqueArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortFindUniqueArgs>(args: SelectSubset<T, PortFindUniqueArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Port that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortFindUniqueOrThrowArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortFindUniqueOrThrowArgs>(args: SelectSubset<T, PortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Port that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortFindFirstArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortFindFirstArgs>(args?: SelectSubset<T, PortFindFirstArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Port that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortFindFirstOrThrowArgs} args - Arguments to find a Port
     * @example
     * // Get one Port
     * const port = await prisma.port.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortFindFirstOrThrowArgs>(args?: SelectSubset<T, PortFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ports
     * const ports = await prisma.port.findMany()
     * 
     * // Get first 10 Ports
     * const ports = await prisma.port.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portWithIdOnly = await prisma.port.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortFindManyArgs>(args?: SelectSubset<T, PortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Port.
     * @param {PortCreateArgs} args - Arguments to create a Port.
     * @example
     * // Create one Port
     * const Port = await prisma.port.create({
     *   data: {
     *     // ... data to create a Port
     *   }
     * })
     * 
     */
    create<T extends PortCreateArgs>(args: SelectSubset<T, PortCreateArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ports.
     * @param {PortCreateManyArgs} args - Arguments to create many Ports.
     * @example
     * // Create many Ports
     * const port = await prisma.port.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortCreateManyArgs>(args?: SelectSubset<T, PortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ports and returns the data saved in the database.
     * @param {PortCreateManyAndReturnArgs} args - Arguments to create many Ports.
     * @example
     * // Create many Ports
     * const port = await prisma.port.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ports and only return the `id`
     * const portWithIdOnly = await prisma.port.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortCreateManyAndReturnArgs>(args?: SelectSubset<T, PortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Port.
     * @param {PortDeleteArgs} args - Arguments to delete one Port.
     * @example
     * // Delete one Port
     * const Port = await prisma.port.delete({
     *   where: {
     *     // ... filter to delete one Port
     *   }
     * })
     * 
     */
    delete<T extends PortDeleteArgs>(args: SelectSubset<T, PortDeleteArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Port.
     * @param {PortUpdateArgs} args - Arguments to update one Port.
     * @example
     * // Update one Port
     * const port = await prisma.port.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortUpdateArgs>(args: SelectSubset<T, PortUpdateArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ports.
     * @param {PortDeleteManyArgs} args - Arguments to filter Ports to delete.
     * @example
     * // Delete a few Ports
     * const { count } = await prisma.port.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortDeleteManyArgs>(args?: SelectSubset<T, PortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ports
     * const port = await prisma.port.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortUpdateManyArgs>(args: SelectSubset<T, PortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ports and returns the data updated in the database.
     * @param {PortUpdateManyAndReturnArgs} args - Arguments to update many Ports.
     * @example
     * // Update many Ports
     * const port = await prisma.port.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ports and only return the `id`
     * const portWithIdOnly = await prisma.port.updateManyAndReturn({
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
    updateManyAndReturn<T extends PortUpdateManyAndReturnArgs>(args: SelectSubset<T, PortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Port.
     * @param {PortUpsertArgs} args - Arguments to update or create a Port.
     * @example
     * // Update or create a Port
     * const port = await prisma.port.upsert({
     *   create: {
     *     // ... data to create a Port
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Port we want to update
     *   }
     * })
     */
    upsert<T extends PortUpsertArgs>(args: SelectSubset<T, PortUpsertArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortCountArgs} args - Arguments to filter Ports to count.
     * @example
     * // Count the number of Ports
     * const count = await prisma.port.count({
     *   where: {
     *     // ... the filter for the Ports we want to count
     *   }
     * })
    **/
    count<T extends PortCountArgs>(
      args?: Subset<T, PortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Port.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortAggregateArgs>(args: Subset<T, PortAggregateArgs>): Prisma.PrismaPromise<GetPortAggregateType<T>>

    /**
     * Group by Port.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortGroupByArgs} args - Group by arguments.
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
      T extends PortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortGroupByArgs['orderBy'] }
        : { orderBy?: PortGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Port model
   */
  readonly fields: PortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Port.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapping<T extends Port$mappingArgs<ExtArgs> = {}>(args?: Subset<T, Port$mappingArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    olt<T extends OltDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OltDefaultArgs<ExtArgs>>): Prisma__OltClient<$Result.GetResult<Prisma.$OltPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Port model
   */
  interface PortFieldRefs {
    readonly id: FieldRef<"Port", 'Int'>
    readonly oltId: FieldRef<"Port", 'Int'>
    readonly slot: FieldRef<"Port", 'Int'>
    readonly portNumber: FieldRef<"Port", 'Int'>
    readonly status: FieldRef<"Port", 'String'>
    readonly label: FieldRef<"Port", 'String'>
    readonly rx: FieldRef<"Port", 'Float'>
    readonly tx: FieldRef<"Port", 'Float'>
    readonly vcc: FieldRef<"Port", 'Float'>
    readonly brand: FieldRef<"Port", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Port findUnique
   */
  export type PortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port findUniqueOrThrow
   */
  export type PortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port findFirst
   */
  export type PortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ports.
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ports.
     */
    distinct?: PortScalarFieldEnum | PortScalarFieldEnum[]
  }

  /**
   * Port findFirstOrThrow
   */
  export type PortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * Filter, which Port to fetch.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ports.
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ports.
     */
    distinct?: PortScalarFieldEnum | PortScalarFieldEnum[]
  }

  /**
   * Port findMany
   */
  export type PortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * Filter, which Ports to fetch.
     */
    where?: PortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ports to fetch.
     */
    orderBy?: PortOrderByWithRelationInput | PortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ports.
     */
    cursor?: PortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ports.
     */
    skip?: number
    distinct?: PortScalarFieldEnum | PortScalarFieldEnum[]
  }

  /**
   * Port create
   */
  export type PortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * The data needed to create a Port.
     */
    data: XOR<PortCreateInput, PortUncheckedCreateInput>
  }

  /**
   * Port createMany
   */
  export type PortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ports.
     */
    data: PortCreateManyInput | PortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Port createManyAndReturn
   */
  export type PortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * The data used to create many Ports.
     */
    data: PortCreateManyInput | PortCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Port update
   */
  export type PortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * The data needed to update a Port.
     */
    data: XOR<PortUpdateInput, PortUncheckedUpdateInput>
    /**
     * Choose, which Port to update.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port updateMany
   */
  export type PortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ports.
     */
    data: XOR<PortUpdateManyMutationInput, PortUncheckedUpdateManyInput>
    /**
     * Filter which Ports to update
     */
    where?: PortWhereInput
    /**
     * Limit how many Ports to update.
     */
    limit?: number
  }

  /**
   * Port updateManyAndReturn
   */
  export type PortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * The data used to update Ports.
     */
    data: XOR<PortUpdateManyMutationInput, PortUncheckedUpdateManyInput>
    /**
     * Filter which Ports to update
     */
    where?: PortWhereInput
    /**
     * Limit how many Ports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Port upsert
   */
  export type PortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * The filter to search for the Port to update in case it exists.
     */
    where: PortWhereUniqueInput
    /**
     * In case the Port found by the `where` argument doesn't exist, create a new Port with this data.
     */
    create: XOR<PortCreateInput, PortUncheckedCreateInput>
    /**
     * In case the Port was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortUpdateInput, PortUncheckedUpdateInput>
  }

  /**
   * Port delete
   */
  export type PortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
    /**
     * Filter which Port to delete.
     */
    where: PortWhereUniqueInput
  }

  /**
   * Port deleteMany
   */
  export type PortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ports to delete
     */
    where?: PortWhereInput
    /**
     * Limit how many Ports to delete.
     */
    limit?: number
  }

  /**
   * Port.mapping
   */
  export type Port$mappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
  }

  /**
   * Port without action
   */
  export type PortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Port
     */
    select?: PortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Port
     */
    omit?: PortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortInclude<ExtArgs> | null
  }


  /**
   * Model Edfa
   */

  export type AggregateEdfa = {
    _count: EdfaCountAggregateOutputType | null
    _avg: EdfaAvgAggregateOutputType | null
    _sum: EdfaSumAggregateOutputType | null
    _min: EdfaMinAggregateOutputType | null
    _max: EdfaMaxAggregateOutputType | null
  }

  export type EdfaAvgAggregateOutputType = {
    id: number | null
  }

  export type EdfaSumAggregateOutputType = {
    id: number | null
  }

  export type EdfaMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EdfaMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type EdfaCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EdfaAvgAggregateInputType = {
    id?: true
  }

  export type EdfaSumAggregateInputType = {
    id?: true
  }

  export type EdfaMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EdfaMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EdfaCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EdfaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edfa to aggregate.
     */
    where?: EdfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edfas to fetch.
     */
    orderBy?: EdfaOrderByWithRelationInput | EdfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EdfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edfas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Edfas
    **/
    _count?: true | EdfaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EdfaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EdfaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EdfaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EdfaMaxAggregateInputType
  }

  export type GetEdfaAggregateType<T extends EdfaAggregateArgs> = {
        [P in keyof T & keyof AggregateEdfa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdfa[P]>
      : GetScalarType<T[P], AggregateEdfa[P]>
  }




  export type EdfaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdfaWhereInput
    orderBy?: EdfaOrderByWithAggregationInput | EdfaOrderByWithAggregationInput[]
    by: EdfaScalarFieldEnum[] | EdfaScalarFieldEnum
    having?: EdfaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EdfaCountAggregateInputType | true
    _avg?: EdfaAvgAggregateInputType
    _sum?: EdfaSumAggregateInputType
    _min?: EdfaMinAggregateInputType
    _max?: EdfaMaxAggregateInputType
  }

  export type EdfaGroupByOutputType = {
    id: number
    name: string
    _count: EdfaCountAggregateOutputType | null
    _avg: EdfaAvgAggregateOutputType | null
    _sum: EdfaSumAggregateOutputType | null
    _min: EdfaMinAggregateOutputType | null
    _max: EdfaMaxAggregateOutputType | null
  }

  type GetEdfaGroupByPayload<T extends EdfaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EdfaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EdfaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EdfaGroupByOutputType[P]>
            : GetScalarType<T[P], EdfaGroupByOutputType[P]>
        }
      >
    >


  export type EdfaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mappings?: boolean | Edfa$mappingsArgs<ExtArgs>
    _count?: boolean | EdfaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edfa"]>

  export type EdfaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["edfa"]>

  export type EdfaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["edfa"]>

  export type EdfaSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EdfaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["edfa"]>
  export type EdfaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | Edfa$mappingsArgs<ExtArgs>
    _count?: boolean | EdfaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EdfaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EdfaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EdfaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Edfa"
    objects: {
      mappings: Prisma.$MappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["edfa"]>
    composites: {}
  }

  type EdfaGetPayload<S extends boolean | null | undefined | EdfaDefaultArgs> = $Result.GetResult<Prisma.$EdfaPayload, S>

  type EdfaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EdfaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EdfaCountAggregateInputType | true
    }

  export interface EdfaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Edfa'], meta: { name: 'Edfa' } }
    /**
     * Find zero or one Edfa that matches the filter.
     * @param {EdfaFindUniqueArgs} args - Arguments to find a Edfa
     * @example
     * // Get one Edfa
     * const edfa = await prisma.edfa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EdfaFindUniqueArgs>(args: SelectSubset<T, EdfaFindUniqueArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edfa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EdfaFindUniqueOrThrowArgs} args - Arguments to find a Edfa
     * @example
     * // Get one Edfa
     * const edfa = await prisma.edfa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EdfaFindUniqueOrThrowArgs>(args: SelectSubset<T, EdfaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edfa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdfaFindFirstArgs} args - Arguments to find a Edfa
     * @example
     * // Get one Edfa
     * const edfa = await prisma.edfa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EdfaFindFirstArgs>(args?: SelectSubset<T, EdfaFindFirstArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edfa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdfaFindFirstOrThrowArgs} args - Arguments to find a Edfa
     * @example
     * // Get one Edfa
     * const edfa = await prisma.edfa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EdfaFindFirstOrThrowArgs>(args?: SelectSubset<T, EdfaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Edfas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdfaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Edfas
     * const edfas = await prisma.edfa.findMany()
     * 
     * // Get first 10 Edfas
     * const edfas = await prisma.edfa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const edfaWithIdOnly = await prisma.edfa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EdfaFindManyArgs>(args?: SelectSubset<T, EdfaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edfa.
     * @param {EdfaCreateArgs} args - Arguments to create a Edfa.
     * @example
     * // Create one Edfa
     * const Edfa = await prisma.edfa.create({
     *   data: {
     *     // ... data to create a Edfa
     *   }
     * })
     * 
     */
    create<T extends EdfaCreateArgs>(args: SelectSubset<T, EdfaCreateArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Edfas.
     * @param {EdfaCreateManyArgs} args - Arguments to create many Edfas.
     * @example
     * // Create many Edfas
     * const edfa = await prisma.edfa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EdfaCreateManyArgs>(args?: SelectSubset<T, EdfaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Edfas and returns the data saved in the database.
     * @param {EdfaCreateManyAndReturnArgs} args - Arguments to create many Edfas.
     * @example
     * // Create many Edfas
     * const edfa = await prisma.edfa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Edfas and only return the `id`
     * const edfaWithIdOnly = await prisma.edfa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EdfaCreateManyAndReturnArgs>(args?: SelectSubset<T, EdfaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edfa.
     * @param {EdfaDeleteArgs} args - Arguments to delete one Edfa.
     * @example
     * // Delete one Edfa
     * const Edfa = await prisma.edfa.delete({
     *   where: {
     *     // ... filter to delete one Edfa
     *   }
     * })
     * 
     */
    delete<T extends EdfaDeleteArgs>(args: SelectSubset<T, EdfaDeleteArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edfa.
     * @param {EdfaUpdateArgs} args - Arguments to update one Edfa.
     * @example
     * // Update one Edfa
     * const edfa = await prisma.edfa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EdfaUpdateArgs>(args: SelectSubset<T, EdfaUpdateArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Edfas.
     * @param {EdfaDeleteManyArgs} args - Arguments to filter Edfas to delete.
     * @example
     * // Delete a few Edfas
     * const { count } = await prisma.edfa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EdfaDeleteManyArgs>(args?: SelectSubset<T, EdfaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edfas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdfaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Edfas
     * const edfa = await prisma.edfa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EdfaUpdateManyArgs>(args: SelectSubset<T, EdfaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edfas and returns the data updated in the database.
     * @param {EdfaUpdateManyAndReturnArgs} args - Arguments to update many Edfas.
     * @example
     * // Update many Edfas
     * const edfa = await prisma.edfa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Edfas and only return the `id`
     * const edfaWithIdOnly = await prisma.edfa.updateManyAndReturn({
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
    updateManyAndReturn<T extends EdfaUpdateManyAndReturnArgs>(args: SelectSubset<T, EdfaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edfa.
     * @param {EdfaUpsertArgs} args - Arguments to update or create a Edfa.
     * @example
     * // Update or create a Edfa
     * const edfa = await prisma.edfa.upsert({
     *   create: {
     *     // ... data to create a Edfa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edfa we want to update
     *   }
     * })
     */
    upsert<T extends EdfaUpsertArgs>(args: SelectSubset<T, EdfaUpsertArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Edfas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdfaCountArgs} args - Arguments to filter Edfas to count.
     * @example
     * // Count the number of Edfas
     * const count = await prisma.edfa.count({
     *   where: {
     *     // ... the filter for the Edfas we want to count
     *   }
     * })
    **/
    count<T extends EdfaCountArgs>(
      args?: Subset<T, EdfaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EdfaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edfa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdfaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EdfaAggregateArgs>(args: Subset<T, EdfaAggregateArgs>): Prisma.PrismaPromise<GetEdfaAggregateType<T>>

    /**
     * Group by Edfa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdfaGroupByArgs} args - Group by arguments.
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
      T extends EdfaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EdfaGroupByArgs['orderBy'] }
        : { orderBy?: EdfaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EdfaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEdfaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Edfa model
   */
  readonly fields: EdfaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Edfa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EdfaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends Edfa$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Edfa$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Edfa model
   */
  interface EdfaFieldRefs {
    readonly id: FieldRef<"Edfa", 'Int'>
    readonly name: FieldRef<"Edfa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Edfa findUnique
   */
  export type EdfaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * Filter, which Edfa to fetch.
     */
    where: EdfaWhereUniqueInput
  }

  /**
   * Edfa findUniqueOrThrow
   */
  export type EdfaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * Filter, which Edfa to fetch.
     */
    where: EdfaWhereUniqueInput
  }

  /**
   * Edfa findFirst
   */
  export type EdfaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * Filter, which Edfa to fetch.
     */
    where?: EdfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edfas to fetch.
     */
    orderBy?: EdfaOrderByWithRelationInput | EdfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edfas.
     */
    cursor?: EdfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edfas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edfas.
     */
    distinct?: EdfaScalarFieldEnum | EdfaScalarFieldEnum[]
  }

  /**
   * Edfa findFirstOrThrow
   */
  export type EdfaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * Filter, which Edfa to fetch.
     */
    where?: EdfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edfas to fetch.
     */
    orderBy?: EdfaOrderByWithRelationInput | EdfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edfas.
     */
    cursor?: EdfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edfas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edfas.
     */
    distinct?: EdfaScalarFieldEnum | EdfaScalarFieldEnum[]
  }

  /**
   * Edfa findMany
   */
  export type EdfaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * Filter, which Edfas to fetch.
     */
    where?: EdfaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edfas to fetch.
     */
    orderBy?: EdfaOrderByWithRelationInput | EdfaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Edfas.
     */
    cursor?: EdfaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edfas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edfas.
     */
    skip?: number
    distinct?: EdfaScalarFieldEnum | EdfaScalarFieldEnum[]
  }

  /**
   * Edfa create
   */
  export type EdfaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * The data needed to create a Edfa.
     */
    data: XOR<EdfaCreateInput, EdfaUncheckedCreateInput>
  }

  /**
   * Edfa createMany
   */
  export type EdfaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Edfas.
     */
    data: EdfaCreateManyInput | EdfaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edfa createManyAndReturn
   */
  export type EdfaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * The data used to create many Edfas.
     */
    data: EdfaCreateManyInput | EdfaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edfa update
   */
  export type EdfaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * The data needed to update a Edfa.
     */
    data: XOR<EdfaUpdateInput, EdfaUncheckedUpdateInput>
    /**
     * Choose, which Edfa to update.
     */
    where: EdfaWhereUniqueInput
  }

  /**
   * Edfa updateMany
   */
  export type EdfaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Edfas.
     */
    data: XOR<EdfaUpdateManyMutationInput, EdfaUncheckedUpdateManyInput>
    /**
     * Filter which Edfas to update
     */
    where?: EdfaWhereInput
    /**
     * Limit how many Edfas to update.
     */
    limit?: number
  }

  /**
   * Edfa updateManyAndReturn
   */
  export type EdfaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * The data used to update Edfas.
     */
    data: XOR<EdfaUpdateManyMutationInput, EdfaUncheckedUpdateManyInput>
    /**
     * Filter which Edfas to update
     */
    where?: EdfaWhereInput
    /**
     * Limit how many Edfas to update.
     */
    limit?: number
  }

  /**
   * Edfa upsert
   */
  export type EdfaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * The filter to search for the Edfa to update in case it exists.
     */
    where: EdfaWhereUniqueInput
    /**
     * In case the Edfa found by the `where` argument doesn't exist, create a new Edfa with this data.
     */
    create: XOR<EdfaCreateInput, EdfaUncheckedCreateInput>
    /**
     * In case the Edfa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EdfaUpdateInput, EdfaUncheckedUpdateInput>
  }

  /**
   * Edfa delete
   */
  export type EdfaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    /**
     * Filter which Edfa to delete.
     */
    where: EdfaWhereUniqueInput
  }

  /**
   * Edfa deleteMany
   */
  export type EdfaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edfas to delete
     */
    where?: EdfaWhereInput
    /**
     * Limit how many Edfas to delete.
     */
    limit?: number
  }

  /**
   * Edfa.mappings
   */
  export type Edfa$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    cursor?: MappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Edfa without action
   */
  export type EdfaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
  }


  /**
   * Model Chasis
   */

  export type AggregateChasis = {
    _count: ChasisCountAggregateOutputType | null
    _avg: ChasisAvgAggregateOutputType | null
    _sum: ChasisSumAggregateOutputType | null
    _min: ChasisMinAggregateOutputType | null
    _max: ChasisMaxAggregateOutputType | null
  }

  export type ChasisAvgAggregateOutputType = {
    id: number | null
  }

  export type ChasisSumAggregateOutputType = {
    id: number | null
  }

  export type ChasisMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ChasisMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ChasisCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ChasisAvgAggregateInputType = {
    id?: true
  }

  export type ChasisSumAggregateInputType = {
    id?: true
  }

  export type ChasisMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ChasisMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ChasisCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ChasisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chasis to aggregate.
     */
    where?: ChasisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chases to fetch.
     */
    orderBy?: ChasisOrderByWithRelationInput | ChasisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChasisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chases
    **/
    _count?: true | ChasisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChasisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChasisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChasisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChasisMaxAggregateInputType
  }

  export type GetChasisAggregateType<T extends ChasisAggregateArgs> = {
        [P in keyof T & keyof AggregateChasis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChasis[P]>
      : GetScalarType<T[P], AggregateChasis[P]>
  }




  export type ChasisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChasisWhereInput
    orderBy?: ChasisOrderByWithAggregationInput | ChasisOrderByWithAggregationInput[]
    by: ChasisScalarFieldEnum[] | ChasisScalarFieldEnum
    having?: ChasisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChasisCountAggregateInputType | true
    _avg?: ChasisAvgAggregateInputType
    _sum?: ChasisSumAggregateInputType
    _min?: ChasisMinAggregateInputType
    _max?: ChasisMaxAggregateInputType
  }

  export type ChasisGroupByOutputType = {
    id: number
    name: string
    _count: ChasisCountAggregateOutputType | null
    _avg: ChasisAvgAggregateOutputType | null
    _sum: ChasisSumAggregateOutputType | null
    _min: ChasisMinAggregateOutputType | null
    _max: ChasisMaxAggregateOutputType | null
  }

  type GetChasisGroupByPayload<T extends ChasisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChasisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChasisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChasisGroupByOutputType[P]>
            : GetScalarType<T[P], ChasisGroupByOutputType[P]>
        }
      >
    >


  export type ChasisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    divisors?: boolean | Chasis$divisorsArgs<ExtArgs>
    mappings?: boolean | Chasis$mappingsArgs<ExtArgs>
    _count?: boolean | ChasisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chasis"]>

  export type ChasisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["chasis"]>

  export type ChasisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["chasis"]>

  export type ChasisSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ChasisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["chasis"]>
  export type ChasisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    divisors?: boolean | Chasis$divisorsArgs<ExtArgs>
    mappings?: boolean | Chasis$mappingsArgs<ExtArgs>
    _count?: boolean | ChasisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChasisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChasisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChasisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chasis"
    objects: {
      divisors: Prisma.$DivisorPayload<ExtArgs>[]
      mappings: Prisma.$MappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["chasis"]>
    composites: {}
  }

  type ChasisGetPayload<S extends boolean | null | undefined | ChasisDefaultArgs> = $Result.GetResult<Prisma.$ChasisPayload, S>

  type ChasisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChasisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChasisCountAggregateInputType | true
    }

  export interface ChasisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chasis'], meta: { name: 'Chasis' } }
    /**
     * Find zero or one Chasis that matches the filter.
     * @param {ChasisFindUniqueArgs} args - Arguments to find a Chasis
     * @example
     * // Get one Chasis
     * const chasis = await prisma.chasis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChasisFindUniqueArgs>(args: SelectSubset<T, ChasisFindUniqueArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chasis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChasisFindUniqueOrThrowArgs} args - Arguments to find a Chasis
     * @example
     * // Get one Chasis
     * const chasis = await prisma.chasis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChasisFindUniqueOrThrowArgs>(args: SelectSubset<T, ChasisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChasisFindFirstArgs} args - Arguments to find a Chasis
     * @example
     * // Get one Chasis
     * const chasis = await prisma.chasis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChasisFindFirstArgs>(args?: SelectSubset<T, ChasisFindFirstArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chasis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChasisFindFirstOrThrowArgs} args - Arguments to find a Chasis
     * @example
     * // Get one Chasis
     * const chasis = await prisma.chasis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChasisFindFirstOrThrowArgs>(args?: SelectSubset<T, ChasisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChasisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chases
     * const chases = await prisma.chasis.findMany()
     * 
     * // Get first 10 Chases
     * const chases = await prisma.chasis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chasisWithIdOnly = await prisma.chasis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChasisFindManyArgs>(args?: SelectSubset<T, ChasisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chasis.
     * @param {ChasisCreateArgs} args - Arguments to create a Chasis.
     * @example
     * // Create one Chasis
     * const Chasis = await prisma.chasis.create({
     *   data: {
     *     // ... data to create a Chasis
     *   }
     * })
     * 
     */
    create<T extends ChasisCreateArgs>(args: SelectSubset<T, ChasisCreateArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chases.
     * @param {ChasisCreateManyArgs} args - Arguments to create many Chases.
     * @example
     * // Create many Chases
     * const chasis = await prisma.chasis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChasisCreateManyArgs>(args?: SelectSubset<T, ChasisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chases and returns the data saved in the database.
     * @param {ChasisCreateManyAndReturnArgs} args - Arguments to create many Chases.
     * @example
     * // Create many Chases
     * const chasis = await prisma.chasis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chases and only return the `id`
     * const chasisWithIdOnly = await prisma.chasis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChasisCreateManyAndReturnArgs>(args?: SelectSubset<T, ChasisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chasis.
     * @param {ChasisDeleteArgs} args - Arguments to delete one Chasis.
     * @example
     * // Delete one Chasis
     * const Chasis = await prisma.chasis.delete({
     *   where: {
     *     // ... filter to delete one Chasis
     *   }
     * })
     * 
     */
    delete<T extends ChasisDeleteArgs>(args: SelectSubset<T, ChasisDeleteArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chasis.
     * @param {ChasisUpdateArgs} args - Arguments to update one Chasis.
     * @example
     * // Update one Chasis
     * const chasis = await prisma.chasis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChasisUpdateArgs>(args: SelectSubset<T, ChasisUpdateArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chases.
     * @param {ChasisDeleteManyArgs} args - Arguments to filter Chases to delete.
     * @example
     * // Delete a few Chases
     * const { count } = await prisma.chasis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChasisDeleteManyArgs>(args?: SelectSubset<T, ChasisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChasisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chases
     * const chasis = await prisma.chasis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChasisUpdateManyArgs>(args: SelectSubset<T, ChasisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chases and returns the data updated in the database.
     * @param {ChasisUpdateManyAndReturnArgs} args - Arguments to update many Chases.
     * @example
     * // Update many Chases
     * const chasis = await prisma.chasis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chases and only return the `id`
     * const chasisWithIdOnly = await prisma.chasis.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChasisUpdateManyAndReturnArgs>(args: SelectSubset<T, ChasisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chasis.
     * @param {ChasisUpsertArgs} args - Arguments to update or create a Chasis.
     * @example
     * // Update or create a Chasis
     * const chasis = await prisma.chasis.upsert({
     *   create: {
     *     // ... data to create a Chasis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chasis we want to update
     *   }
     * })
     */
    upsert<T extends ChasisUpsertArgs>(args: SelectSubset<T, ChasisUpsertArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChasisCountArgs} args - Arguments to filter Chases to count.
     * @example
     * // Count the number of Chases
     * const count = await prisma.chasis.count({
     *   where: {
     *     // ... the filter for the Chases we want to count
     *   }
     * })
    **/
    count<T extends ChasisCountArgs>(
      args?: Subset<T, ChasisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChasisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChasisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChasisAggregateArgs>(args: Subset<T, ChasisAggregateArgs>): Prisma.PrismaPromise<GetChasisAggregateType<T>>

    /**
     * Group by Chasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChasisGroupByArgs} args - Group by arguments.
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
      T extends ChasisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChasisGroupByArgs['orderBy'] }
        : { orderBy?: ChasisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChasisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChasisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chasis model
   */
  readonly fields: ChasisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chasis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChasisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    divisors<T extends Chasis$divisorsArgs<ExtArgs> = {}>(args?: Subset<T, Chasis$divisorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mappings<T extends Chasis$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Chasis$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chasis model
   */
  interface ChasisFieldRefs {
    readonly id: FieldRef<"Chasis", 'Int'>
    readonly name: FieldRef<"Chasis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chasis findUnique
   */
  export type ChasisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * Filter, which Chasis to fetch.
     */
    where: ChasisWhereUniqueInput
  }

  /**
   * Chasis findUniqueOrThrow
   */
  export type ChasisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * Filter, which Chasis to fetch.
     */
    where: ChasisWhereUniqueInput
  }

  /**
   * Chasis findFirst
   */
  export type ChasisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * Filter, which Chasis to fetch.
     */
    where?: ChasisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chases to fetch.
     */
    orderBy?: ChasisOrderByWithRelationInput | ChasisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chases.
     */
    cursor?: ChasisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chases.
     */
    distinct?: ChasisScalarFieldEnum | ChasisScalarFieldEnum[]
  }

  /**
   * Chasis findFirstOrThrow
   */
  export type ChasisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * Filter, which Chasis to fetch.
     */
    where?: ChasisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chases to fetch.
     */
    orderBy?: ChasisOrderByWithRelationInput | ChasisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chases.
     */
    cursor?: ChasisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chases.
     */
    distinct?: ChasisScalarFieldEnum | ChasisScalarFieldEnum[]
  }

  /**
   * Chasis findMany
   */
  export type ChasisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * Filter, which Chases to fetch.
     */
    where?: ChasisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chases to fetch.
     */
    orderBy?: ChasisOrderByWithRelationInput | ChasisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chases.
     */
    cursor?: ChasisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chases.
     */
    skip?: number
    distinct?: ChasisScalarFieldEnum | ChasisScalarFieldEnum[]
  }

  /**
   * Chasis create
   */
  export type ChasisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * The data needed to create a Chasis.
     */
    data: XOR<ChasisCreateInput, ChasisUncheckedCreateInput>
  }

  /**
   * Chasis createMany
   */
  export type ChasisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chases.
     */
    data: ChasisCreateManyInput | ChasisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chasis createManyAndReturn
   */
  export type ChasisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * The data used to create many Chases.
     */
    data: ChasisCreateManyInput | ChasisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chasis update
   */
  export type ChasisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * The data needed to update a Chasis.
     */
    data: XOR<ChasisUpdateInput, ChasisUncheckedUpdateInput>
    /**
     * Choose, which Chasis to update.
     */
    where: ChasisWhereUniqueInput
  }

  /**
   * Chasis updateMany
   */
  export type ChasisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chases.
     */
    data: XOR<ChasisUpdateManyMutationInput, ChasisUncheckedUpdateManyInput>
    /**
     * Filter which Chases to update
     */
    where?: ChasisWhereInput
    /**
     * Limit how many Chases to update.
     */
    limit?: number
  }

  /**
   * Chasis updateManyAndReturn
   */
  export type ChasisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * The data used to update Chases.
     */
    data: XOR<ChasisUpdateManyMutationInput, ChasisUncheckedUpdateManyInput>
    /**
     * Filter which Chases to update
     */
    where?: ChasisWhereInput
    /**
     * Limit how many Chases to update.
     */
    limit?: number
  }

  /**
   * Chasis upsert
   */
  export type ChasisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * The filter to search for the Chasis to update in case it exists.
     */
    where: ChasisWhereUniqueInput
    /**
     * In case the Chasis found by the `where` argument doesn't exist, create a new Chasis with this data.
     */
    create: XOR<ChasisCreateInput, ChasisUncheckedCreateInput>
    /**
     * In case the Chasis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChasisUpdateInput, ChasisUncheckedUpdateInput>
  }

  /**
   * Chasis delete
   */
  export type ChasisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    /**
     * Filter which Chasis to delete.
     */
    where: ChasisWhereUniqueInput
  }

  /**
   * Chasis deleteMany
   */
  export type ChasisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chases to delete
     */
    where?: ChasisWhereInput
    /**
     * Limit how many Chases to delete.
     */
    limit?: number
  }

  /**
   * Chasis.divisors
   */
  export type Chasis$divisorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    where?: DivisorWhereInput
    orderBy?: DivisorOrderByWithRelationInput | DivisorOrderByWithRelationInput[]
    cursor?: DivisorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisorScalarFieldEnum | DivisorScalarFieldEnum[]
  }

  /**
   * Chasis.mappings
   */
  export type Chasis$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    cursor?: MappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Chasis without action
   */
  export type ChasisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
  }


  /**
   * Model Divisor
   */

  export type AggregateDivisor = {
    _count: DivisorCountAggregateOutputType | null
    _avg: DivisorAvgAggregateOutputType | null
    _sum: DivisorSumAggregateOutputType | null
    _min: DivisorMinAggregateOutputType | null
    _max: DivisorMaxAggregateOutputType | null
  }

  export type DivisorAvgAggregateOutputType = {
    id: number | null
    chasisId: number | null
    slot: number | null
  }

  export type DivisorSumAggregateOutputType = {
    id: number | null
    chasisId: number | null
    slot: number | null
  }

  export type DivisorMinAggregateOutputType = {
    id: number | null
    chasisId: number | null
    slot: number | null
    type: string | null
  }

  export type DivisorMaxAggregateOutputType = {
    id: number | null
    chasisId: number | null
    slot: number | null
    type: string | null
  }

  export type DivisorCountAggregateOutputType = {
    id: number
    chasisId: number
    slot: number
    type: number
    _all: number
  }


  export type DivisorAvgAggregateInputType = {
    id?: true
    chasisId?: true
    slot?: true
  }

  export type DivisorSumAggregateInputType = {
    id?: true
    chasisId?: true
    slot?: true
  }

  export type DivisorMinAggregateInputType = {
    id?: true
    chasisId?: true
    slot?: true
    type?: true
  }

  export type DivisorMaxAggregateInputType = {
    id?: true
    chasisId?: true
    slot?: true
    type?: true
  }

  export type DivisorCountAggregateInputType = {
    id?: true
    chasisId?: true
    slot?: true
    type?: true
    _all?: true
  }

  export type DivisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisor to aggregate.
     */
    where?: DivisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisors to fetch.
     */
    orderBy?: DivisorOrderByWithRelationInput | DivisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisors
    **/
    _count?: true | DivisorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisorMaxAggregateInputType
  }

  export type GetDivisorAggregateType<T extends DivisorAggregateArgs> = {
        [P in keyof T & keyof AggregateDivisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivisor[P]>
      : GetScalarType<T[P], AggregateDivisor[P]>
  }




  export type DivisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisorWhereInput
    orderBy?: DivisorOrderByWithAggregationInput | DivisorOrderByWithAggregationInput[]
    by: DivisorScalarFieldEnum[] | DivisorScalarFieldEnum
    having?: DivisorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisorCountAggregateInputType | true
    _avg?: DivisorAvgAggregateInputType
    _sum?: DivisorSumAggregateInputType
    _min?: DivisorMinAggregateInputType
    _max?: DivisorMaxAggregateInputType
  }

  export type DivisorGroupByOutputType = {
    id: number
    chasisId: number
    slot: number
    type: string
    _count: DivisorCountAggregateOutputType | null
    _avg: DivisorAvgAggregateOutputType | null
    _sum: DivisorSumAggregateOutputType | null
    _min: DivisorMinAggregateOutputType | null
    _max: DivisorMaxAggregateOutputType | null
  }

  type GetDivisorGroupByPayload<T extends DivisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisorGroupByOutputType[P]>
            : GetScalarType<T[P], DivisorGroupByOutputType[P]>
        }
      >
    >


  export type DivisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chasisId?: boolean
    slot?: boolean
    type?: boolean
    chasis?: boolean | ChasisDefaultArgs<ExtArgs>
    mappings?: boolean | Divisor$mappingsArgs<ExtArgs>
    _count?: boolean | DivisorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisor"]>

  export type DivisorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chasisId?: boolean
    slot?: boolean
    type?: boolean
    chasis?: boolean | ChasisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisor"]>

  export type DivisorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chasisId?: boolean
    slot?: boolean
    type?: boolean
    chasis?: boolean | ChasisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["divisor"]>

  export type DivisorSelectScalar = {
    id?: boolean
    chasisId?: boolean
    slot?: boolean
    type?: boolean
  }

  export type DivisorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chasisId" | "slot" | "type", ExtArgs["result"]["divisor"]>
  export type DivisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chasis?: boolean | ChasisDefaultArgs<ExtArgs>
    mappings?: boolean | Divisor$mappingsArgs<ExtArgs>
    _count?: boolean | DivisorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DivisorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chasis?: boolean | ChasisDefaultArgs<ExtArgs>
  }
  export type DivisorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chasis?: boolean | ChasisDefaultArgs<ExtArgs>
  }

  export type $DivisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Divisor"
    objects: {
      chasis: Prisma.$ChasisPayload<ExtArgs>
      mappings: Prisma.$MappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chasisId: number
      slot: number
      type: string
    }, ExtArgs["result"]["divisor"]>
    composites: {}
  }

  type DivisorGetPayload<S extends boolean | null | undefined | DivisorDefaultArgs> = $Result.GetResult<Prisma.$DivisorPayload, S>

  type DivisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DivisorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisorCountAggregateInputType | true
    }

  export interface DivisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Divisor'], meta: { name: 'Divisor' } }
    /**
     * Find zero or one Divisor that matches the filter.
     * @param {DivisorFindUniqueArgs} args - Arguments to find a Divisor
     * @example
     * // Get one Divisor
     * const divisor = await prisma.divisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivisorFindUniqueArgs>(args: SelectSubset<T, DivisorFindUniqueArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Divisor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DivisorFindUniqueOrThrowArgs} args - Arguments to find a Divisor
     * @example
     * // Get one Divisor
     * const divisor = await prisma.divisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivisorFindUniqueOrThrowArgs>(args: SelectSubset<T, DivisorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Divisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisorFindFirstArgs} args - Arguments to find a Divisor
     * @example
     * // Get one Divisor
     * const divisor = await prisma.divisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivisorFindFirstArgs>(args?: SelectSubset<T, DivisorFindFirstArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Divisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisorFindFirstOrThrowArgs} args - Arguments to find a Divisor
     * @example
     * // Get one Divisor
     * const divisor = await prisma.divisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivisorFindFirstOrThrowArgs>(args?: SelectSubset<T, DivisorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Divisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisors
     * const divisors = await prisma.divisor.findMany()
     * 
     * // Get first 10 Divisors
     * const divisors = await prisma.divisor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisorWithIdOnly = await prisma.divisor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DivisorFindManyArgs>(args?: SelectSubset<T, DivisorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Divisor.
     * @param {DivisorCreateArgs} args - Arguments to create a Divisor.
     * @example
     * // Create one Divisor
     * const Divisor = await prisma.divisor.create({
     *   data: {
     *     // ... data to create a Divisor
     *   }
     * })
     * 
     */
    create<T extends DivisorCreateArgs>(args: SelectSubset<T, DivisorCreateArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Divisors.
     * @param {DivisorCreateManyArgs} args - Arguments to create many Divisors.
     * @example
     * // Create many Divisors
     * const divisor = await prisma.divisor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivisorCreateManyArgs>(args?: SelectSubset<T, DivisorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Divisors and returns the data saved in the database.
     * @param {DivisorCreateManyAndReturnArgs} args - Arguments to create many Divisors.
     * @example
     * // Create many Divisors
     * const divisor = await prisma.divisor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Divisors and only return the `id`
     * const divisorWithIdOnly = await prisma.divisor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DivisorCreateManyAndReturnArgs>(args?: SelectSubset<T, DivisorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Divisor.
     * @param {DivisorDeleteArgs} args - Arguments to delete one Divisor.
     * @example
     * // Delete one Divisor
     * const Divisor = await prisma.divisor.delete({
     *   where: {
     *     // ... filter to delete one Divisor
     *   }
     * })
     * 
     */
    delete<T extends DivisorDeleteArgs>(args: SelectSubset<T, DivisorDeleteArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Divisor.
     * @param {DivisorUpdateArgs} args - Arguments to update one Divisor.
     * @example
     * // Update one Divisor
     * const divisor = await prisma.divisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivisorUpdateArgs>(args: SelectSubset<T, DivisorUpdateArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Divisors.
     * @param {DivisorDeleteManyArgs} args - Arguments to filter Divisors to delete.
     * @example
     * // Delete a few Divisors
     * const { count } = await prisma.divisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivisorDeleteManyArgs>(args?: SelectSubset<T, DivisorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisors
     * const divisor = await prisma.divisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivisorUpdateManyArgs>(args: SelectSubset<T, DivisorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisors and returns the data updated in the database.
     * @param {DivisorUpdateManyAndReturnArgs} args - Arguments to update many Divisors.
     * @example
     * // Update many Divisors
     * const divisor = await prisma.divisor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Divisors and only return the `id`
     * const divisorWithIdOnly = await prisma.divisor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DivisorUpdateManyAndReturnArgs>(args: SelectSubset<T, DivisorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Divisor.
     * @param {DivisorUpsertArgs} args - Arguments to update or create a Divisor.
     * @example
     * // Update or create a Divisor
     * const divisor = await prisma.divisor.upsert({
     *   create: {
     *     // ... data to create a Divisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Divisor we want to update
     *   }
     * })
     */
    upsert<T extends DivisorUpsertArgs>(args: SelectSubset<T, DivisorUpsertArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Divisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisorCountArgs} args - Arguments to filter Divisors to count.
     * @example
     * // Count the number of Divisors
     * const count = await prisma.divisor.count({
     *   where: {
     *     // ... the filter for the Divisors we want to count
     *   }
     * })
    **/
    count<T extends DivisorCountArgs>(
      args?: Subset<T, DivisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Divisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisorAggregateArgs>(args: Subset<T, DivisorAggregateArgs>): Prisma.PrismaPromise<GetDivisorAggregateType<T>>

    /**
     * Group by Divisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisorGroupByArgs} args - Group by arguments.
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
      T extends DivisorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisorGroupByArgs['orderBy'] }
        : { orderBy?: DivisorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Divisor model
   */
  readonly fields: DivisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Divisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chasis<T extends ChasisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChasisDefaultArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mappings<T extends Divisor$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Divisor$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Divisor model
   */
  interface DivisorFieldRefs {
    readonly id: FieldRef<"Divisor", 'Int'>
    readonly chasisId: FieldRef<"Divisor", 'Int'>
    readonly slot: FieldRef<"Divisor", 'Int'>
    readonly type: FieldRef<"Divisor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Divisor findUnique
   */
  export type DivisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * Filter, which Divisor to fetch.
     */
    where: DivisorWhereUniqueInput
  }

  /**
   * Divisor findUniqueOrThrow
   */
  export type DivisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * Filter, which Divisor to fetch.
     */
    where: DivisorWhereUniqueInput
  }

  /**
   * Divisor findFirst
   */
  export type DivisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * Filter, which Divisor to fetch.
     */
    where?: DivisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisors to fetch.
     */
    orderBy?: DivisorOrderByWithRelationInput | DivisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisors.
     */
    cursor?: DivisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisors.
     */
    distinct?: DivisorScalarFieldEnum | DivisorScalarFieldEnum[]
  }

  /**
   * Divisor findFirstOrThrow
   */
  export type DivisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * Filter, which Divisor to fetch.
     */
    where?: DivisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisors to fetch.
     */
    orderBy?: DivisorOrderByWithRelationInput | DivisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisors.
     */
    cursor?: DivisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisors.
     */
    distinct?: DivisorScalarFieldEnum | DivisorScalarFieldEnum[]
  }

  /**
   * Divisor findMany
   */
  export type DivisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * Filter, which Divisors to fetch.
     */
    where?: DivisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisors to fetch.
     */
    orderBy?: DivisorOrderByWithRelationInput | DivisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisors.
     */
    cursor?: DivisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisors.
     */
    skip?: number
    distinct?: DivisorScalarFieldEnum | DivisorScalarFieldEnum[]
  }

  /**
   * Divisor create
   */
  export type DivisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * The data needed to create a Divisor.
     */
    data: XOR<DivisorCreateInput, DivisorUncheckedCreateInput>
  }

  /**
   * Divisor createMany
   */
  export type DivisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisors.
     */
    data: DivisorCreateManyInput | DivisorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Divisor createManyAndReturn
   */
  export type DivisorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * The data used to create many Divisors.
     */
    data: DivisorCreateManyInput | DivisorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Divisor update
   */
  export type DivisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * The data needed to update a Divisor.
     */
    data: XOR<DivisorUpdateInput, DivisorUncheckedUpdateInput>
    /**
     * Choose, which Divisor to update.
     */
    where: DivisorWhereUniqueInput
  }

  /**
   * Divisor updateMany
   */
  export type DivisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisors.
     */
    data: XOR<DivisorUpdateManyMutationInput, DivisorUncheckedUpdateManyInput>
    /**
     * Filter which Divisors to update
     */
    where?: DivisorWhereInput
    /**
     * Limit how many Divisors to update.
     */
    limit?: number
  }

  /**
   * Divisor updateManyAndReturn
   */
  export type DivisorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * The data used to update Divisors.
     */
    data: XOR<DivisorUpdateManyMutationInput, DivisorUncheckedUpdateManyInput>
    /**
     * Filter which Divisors to update
     */
    where?: DivisorWhereInput
    /**
     * Limit how many Divisors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Divisor upsert
   */
  export type DivisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * The filter to search for the Divisor to update in case it exists.
     */
    where: DivisorWhereUniqueInput
    /**
     * In case the Divisor found by the `where` argument doesn't exist, create a new Divisor with this data.
     */
    create: XOR<DivisorCreateInput, DivisorUncheckedCreateInput>
    /**
     * In case the Divisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisorUpdateInput, DivisorUncheckedUpdateInput>
  }

  /**
   * Divisor delete
   */
  export type DivisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    /**
     * Filter which Divisor to delete.
     */
    where: DivisorWhereUniqueInput
  }

  /**
   * Divisor deleteMany
   */
  export type DivisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisors to delete
     */
    where?: DivisorWhereInput
    /**
     * Limit how many Divisors to delete.
     */
    limit?: number
  }

  /**
   * Divisor.mappings
   */
  export type Divisor$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    cursor?: MappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Divisor without action
   */
  export type DivisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
  }


  /**
   * Model Odf
   */

  export type AggregateOdf = {
    _count: OdfCountAggregateOutputType | null
    _avg: OdfAvgAggregateOutputType | null
    _sum: OdfSumAggregateOutputType | null
    _min: OdfMinAggregateOutputType | null
    _max: OdfMaxAggregateOutputType | null
  }

  export type OdfAvgAggregateOutputType = {
    id: number | null
    odfNumber: number | null
  }

  export type OdfSumAggregateOutputType = {
    id: number | null
    odfNumber: number | null
  }

  export type OdfMinAggregateOutputType = {
    id: number | null
    odfNumber: number | null
    name: string | null
    networks: string | null
  }

  export type OdfMaxAggregateOutputType = {
    id: number | null
    odfNumber: number | null
    name: string | null
    networks: string | null
  }

  export type OdfCountAggregateOutputType = {
    id: number
    odfNumber: number
    name: number
    networks: number
    _all: number
  }


  export type OdfAvgAggregateInputType = {
    id?: true
    odfNumber?: true
  }

  export type OdfSumAggregateInputType = {
    id?: true
    odfNumber?: true
  }

  export type OdfMinAggregateInputType = {
    id?: true
    odfNumber?: true
    name?: true
    networks?: true
  }

  export type OdfMaxAggregateInputType = {
    id?: true
    odfNumber?: true
    name?: true
    networks?: true
  }

  export type OdfCountAggregateInputType = {
    id?: true
    odfNumber?: true
    name?: true
    networks?: true
    _all?: true
  }

  export type OdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Odf to aggregate.
     */
    where?: OdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Odfs to fetch.
     */
    orderBy?: OdfOrderByWithRelationInput | OdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Odfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Odfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Odfs
    **/
    _count?: true | OdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OdfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OdfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OdfMaxAggregateInputType
  }

  export type GetOdfAggregateType<T extends OdfAggregateArgs> = {
        [P in keyof T & keyof AggregateOdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOdf[P]>
      : GetScalarType<T[P], AggregateOdf[P]>
  }




  export type OdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OdfWhereInput
    orderBy?: OdfOrderByWithAggregationInput | OdfOrderByWithAggregationInput[]
    by: OdfScalarFieldEnum[] | OdfScalarFieldEnum
    having?: OdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OdfCountAggregateInputType | true
    _avg?: OdfAvgAggregateInputType
    _sum?: OdfSumAggregateInputType
    _min?: OdfMinAggregateInputType
    _max?: OdfMaxAggregateInputType
  }

  export type OdfGroupByOutputType = {
    id: number
    odfNumber: number
    name: string
    networks: string | null
    _count: OdfCountAggregateOutputType | null
    _avg: OdfAvgAggregateOutputType | null
    _sum: OdfSumAggregateOutputType | null
    _min: OdfMinAggregateOutputType | null
    _max: OdfMaxAggregateOutputType | null
  }

  type GetOdfGroupByPayload<T extends OdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OdfGroupByOutputType[P]>
            : GetScalarType<T[P], OdfGroupByOutputType[P]>
        }
      >
    >


  export type OdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    odfNumber?: boolean
    name?: boolean
    networks?: boolean
    mappings?: boolean | Odf$mappingsArgs<ExtArgs>
    ports?: boolean | Odf$portsArgs<ExtArgs>
    _count?: boolean | OdfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["odf"]>

  export type OdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    odfNumber?: boolean
    name?: boolean
    networks?: boolean
  }, ExtArgs["result"]["odf"]>

  export type OdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    odfNumber?: boolean
    name?: boolean
    networks?: boolean
  }, ExtArgs["result"]["odf"]>

  export type OdfSelectScalar = {
    id?: boolean
    odfNumber?: boolean
    name?: boolean
    networks?: boolean
  }

  export type OdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "odfNumber" | "name" | "networks", ExtArgs["result"]["odf"]>
  export type OdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | Odf$mappingsArgs<ExtArgs>
    ports?: boolean | Odf$portsArgs<ExtArgs>
    _count?: boolean | OdfCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Odf"
    objects: {
      mappings: Prisma.$MappingPayload<ExtArgs>[]
      ports: Prisma.$OdfPortPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      odfNumber: number
      name: string
      networks: string | null
    }, ExtArgs["result"]["odf"]>
    composites: {}
  }

  type OdfGetPayload<S extends boolean | null | undefined | OdfDefaultArgs> = $Result.GetResult<Prisma.$OdfPayload, S>

  type OdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OdfCountAggregateInputType | true
    }

  export interface OdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Odf'], meta: { name: 'Odf' } }
    /**
     * Find zero or one Odf that matches the filter.
     * @param {OdfFindUniqueArgs} args - Arguments to find a Odf
     * @example
     * // Get one Odf
     * const odf = await prisma.odf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OdfFindUniqueArgs>(args: SelectSubset<T, OdfFindUniqueArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Odf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OdfFindUniqueOrThrowArgs} args - Arguments to find a Odf
     * @example
     * // Get one Odf
     * const odf = await prisma.odf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OdfFindUniqueOrThrowArgs>(args: SelectSubset<T, OdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Odf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfFindFirstArgs} args - Arguments to find a Odf
     * @example
     * // Get one Odf
     * const odf = await prisma.odf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OdfFindFirstArgs>(args?: SelectSubset<T, OdfFindFirstArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Odf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfFindFirstOrThrowArgs} args - Arguments to find a Odf
     * @example
     * // Get one Odf
     * const odf = await prisma.odf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OdfFindFirstOrThrowArgs>(args?: SelectSubset<T, OdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Odfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Odfs
     * const odfs = await prisma.odf.findMany()
     * 
     * // Get first 10 Odfs
     * const odfs = await prisma.odf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const odfWithIdOnly = await prisma.odf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OdfFindManyArgs>(args?: SelectSubset<T, OdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Odf.
     * @param {OdfCreateArgs} args - Arguments to create a Odf.
     * @example
     * // Create one Odf
     * const Odf = await prisma.odf.create({
     *   data: {
     *     // ... data to create a Odf
     *   }
     * })
     * 
     */
    create<T extends OdfCreateArgs>(args: SelectSubset<T, OdfCreateArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Odfs.
     * @param {OdfCreateManyArgs} args - Arguments to create many Odfs.
     * @example
     * // Create many Odfs
     * const odf = await prisma.odf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OdfCreateManyArgs>(args?: SelectSubset<T, OdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Odfs and returns the data saved in the database.
     * @param {OdfCreateManyAndReturnArgs} args - Arguments to create many Odfs.
     * @example
     * // Create many Odfs
     * const odf = await prisma.odf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Odfs and only return the `id`
     * const odfWithIdOnly = await prisma.odf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OdfCreateManyAndReturnArgs>(args?: SelectSubset<T, OdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Odf.
     * @param {OdfDeleteArgs} args - Arguments to delete one Odf.
     * @example
     * // Delete one Odf
     * const Odf = await prisma.odf.delete({
     *   where: {
     *     // ... filter to delete one Odf
     *   }
     * })
     * 
     */
    delete<T extends OdfDeleteArgs>(args: SelectSubset<T, OdfDeleteArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Odf.
     * @param {OdfUpdateArgs} args - Arguments to update one Odf.
     * @example
     * // Update one Odf
     * const odf = await prisma.odf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OdfUpdateArgs>(args: SelectSubset<T, OdfUpdateArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Odfs.
     * @param {OdfDeleteManyArgs} args - Arguments to filter Odfs to delete.
     * @example
     * // Delete a few Odfs
     * const { count } = await prisma.odf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OdfDeleteManyArgs>(args?: SelectSubset<T, OdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Odfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Odfs
     * const odf = await prisma.odf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OdfUpdateManyArgs>(args: SelectSubset<T, OdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Odfs and returns the data updated in the database.
     * @param {OdfUpdateManyAndReturnArgs} args - Arguments to update many Odfs.
     * @example
     * // Update many Odfs
     * const odf = await prisma.odf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Odfs and only return the `id`
     * const odfWithIdOnly = await prisma.odf.updateManyAndReturn({
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
    updateManyAndReturn<T extends OdfUpdateManyAndReturnArgs>(args: SelectSubset<T, OdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Odf.
     * @param {OdfUpsertArgs} args - Arguments to update or create a Odf.
     * @example
     * // Update or create a Odf
     * const odf = await prisma.odf.upsert({
     *   create: {
     *     // ... data to create a Odf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Odf we want to update
     *   }
     * })
     */
    upsert<T extends OdfUpsertArgs>(args: SelectSubset<T, OdfUpsertArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Odfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfCountArgs} args - Arguments to filter Odfs to count.
     * @example
     * // Count the number of Odfs
     * const count = await prisma.odf.count({
     *   where: {
     *     // ... the filter for the Odfs we want to count
     *   }
     * })
    **/
    count<T extends OdfCountArgs>(
      args?: Subset<T, OdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Odf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OdfAggregateArgs>(args: Subset<T, OdfAggregateArgs>): Prisma.PrismaPromise<GetOdfAggregateType<T>>

    /**
     * Group by Odf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfGroupByArgs} args - Group by arguments.
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
      T extends OdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OdfGroupByArgs['orderBy'] }
        : { orderBy?: OdfGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Odf model
   */
  readonly fields: OdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Odf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends Odf$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, Odf$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ports<T extends Odf$portsArgs<ExtArgs> = {}>(args?: Subset<T, Odf$portsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Odf model
   */
  interface OdfFieldRefs {
    readonly id: FieldRef<"Odf", 'Int'>
    readonly odfNumber: FieldRef<"Odf", 'Int'>
    readonly name: FieldRef<"Odf", 'String'>
    readonly networks: FieldRef<"Odf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Odf findUnique
   */
  export type OdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * Filter, which Odf to fetch.
     */
    where: OdfWhereUniqueInput
  }

  /**
   * Odf findUniqueOrThrow
   */
  export type OdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * Filter, which Odf to fetch.
     */
    where: OdfWhereUniqueInput
  }

  /**
   * Odf findFirst
   */
  export type OdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * Filter, which Odf to fetch.
     */
    where?: OdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Odfs to fetch.
     */
    orderBy?: OdfOrderByWithRelationInput | OdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Odfs.
     */
    cursor?: OdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Odfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Odfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Odfs.
     */
    distinct?: OdfScalarFieldEnum | OdfScalarFieldEnum[]
  }

  /**
   * Odf findFirstOrThrow
   */
  export type OdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * Filter, which Odf to fetch.
     */
    where?: OdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Odfs to fetch.
     */
    orderBy?: OdfOrderByWithRelationInput | OdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Odfs.
     */
    cursor?: OdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Odfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Odfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Odfs.
     */
    distinct?: OdfScalarFieldEnum | OdfScalarFieldEnum[]
  }

  /**
   * Odf findMany
   */
  export type OdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * Filter, which Odfs to fetch.
     */
    where?: OdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Odfs to fetch.
     */
    orderBy?: OdfOrderByWithRelationInput | OdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Odfs.
     */
    cursor?: OdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Odfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Odfs.
     */
    skip?: number
    distinct?: OdfScalarFieldEnum | OdfScalarFieldEnum[]
  }

  /**
   * Odf create
   */
  export type OdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * The data needed to create a Odf.
     */
    data: XOR<OdfCreateInput, OdfUncheckedCreateInput>
  }

  /**
   * Odf createMany
   */
  export type OdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Odfs.
     */
    data: OdfCreateManyInput | OdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Odf createManyAndReturn
   */
  export type OdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * The data used to create many Odfs.
     */
    data: OdfCreateManyInput | OdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Odf update
   */
  export type OdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * The data needed to update a Odf.
     */
    data: XOR<OdfUpdateInput, OdfUncheckedUpdateInput>
    /**
     * Choose, which Odf to update.
     */
    where: OdfWhereUniqueInput
  }

  /**
   * Odf updateMany
   */
  export type OdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Odfs.
     */
    data: XOR<OdfUpdateManyMutationInput, OdfUncheckedUpdateManyInput>
    /**
     * Filter which Odfs to update
     */
    where?: OdfWhereInput
    /**
     * Limit how many Odfs to update.
     */
    limit?: number
  }

  /**
   * Odf updateManyAndReturn
   */
  export type OdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * The data used to update Odfs.
     */
    data: XOR<OdfUpdateManyMutationInput, OdfUncheckedUpdateManyInput>
    /**
     * Filter which Odfs to update
     */
    where?: OdfWhereInput
    /**
     * Limit how many Odfs to update.
     */
    limit?: number
  }

  /**
   * Odf upsert
   */
  export type OdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * The filter to search for the Odf to update in case it exists.
     */
    where: OdfWhereUniqueInput
    /**
     * In case the Odf found by the `where` argument doesn't exist, create a new Odf with this data.
     */
    create: XOR<OdfCreateInput, OdfUncheckedCreateInput>
    /**
     * In case the Odf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OdfUpdateInput, OdfUncheckedUpdateInput>
  }

  /**
   * Odf delete
   */
  export type OdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    /**
     * Filter which Odf to delete.
     */
    where: OdfWhereUniqueInput
  }

  /**
   * Odf deleteMany
   */
  export type OdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Odfs to delete
     */
    where?: OdfWhereInput
    /**
     * Limit how many Odfs to delete.
     */
    limit?: number
  }

  /**
   * Odf.mappings
   */
  export type Odf$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    cursor?: MappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Odf.ports
   */
  export type Odf$portsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    where?: OdfPortWhereInput
    orderBy?: OdfPortOrderByWithRelationInput | OdfPortOrderByWithRelationInput[]
    cursor?: OdfPortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OdfPortScalarFieldEnum | OdfPortScalarFieldEnum[]
  }

  /**
   * Odf without action
   */
  export type OdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
  }


  /**
   * Model OdfPort
   */

  export type AggregateOdfPort = {
    _count: OdfPortCountAggregateOutputType | null
    _avg: OdfPortAvgAggregateOutputType | null
    _sum: OdfPortSumAggregateOutputType | null
    _min: OdfPortMinAggregateOutputType | null
    _max: OdfPortMaxAggregateOutputType | null
  }

  export type OdfPortAvgAggregateOutputType = {
    id: number | null
    odfId: number | null
    number: number | null
    buffer: number | null
  }

  export type OdfPortSumAggregateOutputType = {
    id: number | null
    odfId: number | null
    number: number | null
    buffer: number | null
  }

  export type OdfPortMinAggregateOutputType = {
    id: number | null
    odfId: number | null
    number: number | null
    buffer: number | null
    color: string | null
  }

  export type OdfPortMaxAggregateOutputType = {
    id: number | null
    odfId: number | null
    number: number | null
    buffer: number | null
    color: string | null
  }

  export type OdfPortCountAggregateOutputType = {
    id: number
    odfId: number
    number: number
    buffer: number
    color: number
    _all: number
  }


  export type OdfPortAvgAggregateInputType = {
    id?: true
    odfId?: true
    number?: true
    buffer?: true
  }

  export type OdfPortSumAggregateInputType = {
    id?: true
    odfId?: true
    number?: true
    buffer?: true
  }

  export type OdfPortMinAggregateInputType = {
    id?: true
    odfId?: true
    number?: true
    buffer?: true
    color?: true
  }

  export type OdfPortMaxAggregateInputType = {
    id?: true
    odfId?: true
    number?: true
    buffer?: true
    color?: true
  }

  export type OdfPortCountAggregateInputType = {
    id?: true
    odfId?: true
    number?: true
    buffer?: true
    color?: true
    _all?: true
  }

  export type OdfPortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OdfPort to aggregate.
     */
    where?: OdfPortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OdfPorts to fetch.
     */
    orderBy?: OdfPortOrderByWithRelationInput | OdfPortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OdfPortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OdfPorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OdfPorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OdfPorts
    **/
    _count?: true | OdfPortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OdfPortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OdfPortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OdfPortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OdfPortMaxAggregateInputType
  }

  export type GetOdfPortAggregateType<T extends OdfPortAggregateArgs> = {
        [P in keyof T & keyof AggregateOdfPort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOdfPort[P]>
      : GetScalarType<T[P], AggregateOdfPort[P]>
  }




  export type OdfPortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OdfPortWhereInput
    orderBy?: OdfPortOrderByWithAggregationInput | OdfPortOrderByWithAggregationInput[]
    by: OdfPortScalarFieldEnum[] | OdfPortScalarFieldEnum
    having?: OdfPortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OdfPortCountAggregateInputType | true
    _avg?: OdfPortAvgAggregateInputType
    _sum?: OdfPortSumAggregateInputType
    _min?: OdfPortMinAggregateInputType
    _max?: OdfPortMaxAggregateInputType
  }

  export type OdfPortGroupByOutputType = {
    id: number
    odfId: number
    number: number
    buffer: number | null
    color: string | null
    _count: OdfPortCountAggregateOutputType | null
    _avg: OdfPortAvgAggregateOutputType | null
    _sum: OdfPortSumAggregateOutputType | null
    _min: OdfPortMinAggregateOutputType | null
    _max: OdfPortMaxAggregateOutputType | null
  }

  type GetOdfPortGroupByPayload<T extends OdfPortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OdfPortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OdfPortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OdfPortGroupByOutputType[P]>
            : GetScalarType<T[P], OdfPortGroupByOutputType[P]>
        }
      >
    >


  export type OdfPortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    odfId?: boolean
    number?: boolean
    buffer?: boolean
    color?: boolean
    mappings?: boolean | OdfPort$mappingsArgs<ExtArgs>
    odf?: boolean | OdfDefaultArgs<ExtArgs>
    _count?: boolean | OdfPortCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["odfPort"]>

  export type OdfPortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    odfId?: boolean
    number?: boolean
    buffer?: boolean
    color?: boolean
    odf?: boolean | OdfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["odfPort"]>

  export type OdfPortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    odfId?: boolean
    number?: boolean
    buffer?: boolean
    color?: boolean
    odf?: boolean | OdfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["odfPort"]>

  export type OdfPortSelectScalar = {
    id?: boolean
    odfId?: boolean
    number?: boolean
    buffer?: boolean
    color?: boolean
  }

  export type OdfPortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "odfId" | "number" | "buffer" | "color", ExtArgs["result"]["odfPort"]>
  export type OdfPortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mappings?: boolean | OdfPort$mappingsArgs<ExtArgs>
    odf?: boolean | OdfDefaultArgs<ExtArgs>
    _count?: boolean | OdfPortCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OdfPortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    odf?: boolean | OdfDefaultArgs<ExtArgs>
  }
  export type OdfPortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    odf?: boolean | OdfDefaultArgs<ExtArgs>
  }

  export type $OdfPortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OdfPort"
    objects: {
      mappings: Prisma.$MappingPayload<ExtArgs>[]
      odf: Prisma.$OdfPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      odfId: number
      number: number
      buffer: number | null
      color: string | null
    }, ExtArgs["result"]["odfPort"]>
    composites: {}
  }

  type OdfPortGetPayload<S extends boolean | null | undefined | OdfPortDefaultArgs> = $Result.GetResult<Prisma.$OdfPortPayload, S>

  type OdfPortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OdfPortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OdfPortCountAggregateInputType | true
    }

  export interface OdfPortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OdfPort'], meta: { name: 'OdfPort' } }
    /**
     * Find zero or one OdfPort that matches the filter.
     * @param {OdfPortFindUniqueArgs} args - Arguments to find a OdfPort
     * @example
     * // Get one OdfPort
     * const odfPort = await prisma.odfPort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OdfPortFindUniqueArgs>(args: SelectSubset<T, OdfPortFindUniqueArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OdfPort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OdfPortFindUniqueOrThrowArgs} args - Arguments to find a OdfPort
     * @example
     * // Get one OdfPort
     * const odfPort = await prisma.odfPort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OdfPortFindUniqueOrThrowArgs>(args: SelectSubset<T, OdfPortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OdfPort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfPortFindFirstArgs} args - Arguments to find a OdfPort
     * @example
     * // Get one OdfPort
     * const odfPort = await prisma.odfPort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OdfPortFindFirstArgs>(args?: SelectSubset<T, OdfPortFindFirstArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OdfPort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfPortFindFirstOrThrowArgs} args - Arguments to find a OdfPort
     * @example
     * // Get one OdfPort
     * const odfPort = await prisma.odfPort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OdfPortFindFirstOrThrowArgs>(args?: SelectSubset<T, OdfPortFindFirstOrThrowArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OdfPorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfPortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OdfPorts
     * const odfPorts = await prisma.odfPort.findMany()
     * 
     * // Get first 10 OdfPorts
     * const odfPorts = await prisma.odfPort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const odfPortWithIdOnly = await prisma.odfPort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OdfPortFindManyArgs>(args?: SelectSubset<T, OdfPortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OdfPort.
     * @param {OdfPortCreateArgs} args - Arguments to create a OdfPort.
     * @example
     * // Create one OdfPort
     * const OdfPort = await prisma.odfPort.create({
     *   data: {
     *     // ... data to create a OdfPort
     *   }
     * })
     * 
     */
    create<T extends OdfPortCreateArgs>(args: SelectSubset<T, OdfPortCreateArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OdfPorts.
     * @param {OdfPortCreateManyArgs} args - Arguments to create many OdfPorts.
     * @example
     * // Create many OdfPorts
     * const odfPort = await prisma.odfPort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OdfPortCreateManyArgs>(args?: SelectSubset<T, OdfPortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OdfPorts and returns the data saved in the database.
     * @param {OdfPortCreateManyAndReturnArgs} args - Arguments to create many OdfPorts.
     * @example
     * // Create many OdfPorts
     * const odfPort = await prisma.odfPort.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OdfPorts and only return the `id`
     * const odfPortWithIdOnly = await prisma.odfPort.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OdfPortCreateManyAndReturnArgs>(args?: SelectSubset<T, OdfPortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OdfPort.
     * @param {OdfPortDeleteArgs} args - Arguments to delete one OdfPort.
     * @example
     * // Delete one OdfPort
     * const OdfPort = await prisma.odfPort.delete({
     *   where: {
     *     // ... filter to delete one OdfPort
     *   }
     * })
     * 
     */
    delete<T extends OdfPortDeleteArgs>(args: SelectSubset<T, OdfPortDeleteArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OdfPort.
     * @param {OdfPortUpdateArgs} args - Arguments to update one OdfPort.
     * @example
     * // Update one OdfPort
     * const odfPort = await prisma.odfPort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OdfPortUpdateArgs>(args: SelectSubset<T, OdfPortUpdateArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OdfPorts.
     * @param {OdfPortDeleteManyArgs} args - Arguments to filter OdfPorts to delete.
     * @example
     * // Delete a few OdfPorts
     * const { count } = await prisma.odfPort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OdfPortDeleteManyArgs>(args?: SelectSubset<T, OdfPortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OdfPorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfPortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OdfPorts
     * const odfPort = await prisma.odfPort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OdfPortUpdateManyArgs>(args: SelectSubset<T, OdfPortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OdfPorts and returns the data updated in the database.
     * @param {OdfPortUpdateManyAndReturnArgs} args - Arguments to update many OdfPorts.
     * @example
     * // Update many OdfPorts
     * const odfPort = await prisma.odfPort.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OdfPorts and only return the `id`
     * const odfPortWithIdOnly = await prisma.odfPort.updateManyAndReturn({
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
    updateManyAndReturn<T extends OdfPortUpdateManyAndReturnArgs>(args: SelectSubset<T, OdfPortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OdfPort.
     * @param {OdfPortUpsertArgs} args - Arguments to update or create a OdfPort.
     * @example
     * // Update or create a OdfPort
     * const odfPort = await prisma.odfPort.upsert({
     *   create: {
     *     // ... data to create a OdfPort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OdfPort we want to update
     *   }
     * })
     */
    upsert<T extends OdfPortUpsertArgs>(args: SelectSubset<T, OdfPortUpsertArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OdfPorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfPortCountArgs} args - Arguments to filter OdfPorts to count.
     * @example
     * // Count the number of OdfPorts
     * const count = await prisma.odfPort.count({
     *   where: {
     *     // ... the filter for the OdfPorts we want to count
     *   }
     * })
    **/
    count<T extends OdfPortCountArgs>(
      args?: Subset<T, OdfPortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OdfPortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OdfPort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfPortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OdfPortAggregateArgs>(args: Subset<T, OdfPortAggregateArgs>): Prisma.PrismaPromise<GetOdfPortAggregateType<T>>

    /**
     * Group by OdfPort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OdfPortGroupByArgs} args - Group by arguments.
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
      T extends OdfPortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OdfPortGroupByArgs['orderBy'] }
        : { orderBy?: OdfPortGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OdfPortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOdfPortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OdfPort model
   */
  readonly fields: OdfPortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OdfPort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OdfPortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mappings<T extends OdfPort$mappingsArgs<ExtArgs> = {}>(args?: Subset<T, OdfPort$mappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    odf<T extends OdfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OdfDefaultArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OdfPort model
   */
  interface OdfPortFieldRefs {
    readonly id: FieldRef<"OdfPort", 'Int'>
    readonly odfId: FieldRef<"OdfPort", 'Int'>
    readonly number: FieldRef<"OdfPort", 'Int'>
    readonly buffer: FieldRef<"OdfPort", 'Int'>
    readonly color: FieldRef<"OdfPort", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OdfPort findUnique
   */
  export type OdfPortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * Filter, which OdfPort to fetch.
     */
    where: OdfPortWhereUniqueInput
  }

  /**
   * OdfPort findUniqueOrThrow
   */
  export type OdfPortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * Filter, which OdfPort to fetch.
     */
    where: OdfPortWhereUniqueInput
  }

  /**
   * OdfPort findFirst
   */
  export type OdfPortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * Filter, which OdfPort to fetch.
     */
    where?: OdfPortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OdfPorts to fetch.
     */
    orderBy?: OdfPortOrderByWithRelationInput | OdfPortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OdfPorts.
     */
    cursor?: OdfPortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OdfPorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OdfPorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OdfPorts.
     */
    distinct?: OdfPortScalarFieldEnum | OdfPortScalarFieldEnum[]
  }

  /**
   * OdfPort findFirstOrThrow
   */
  export type OdfPortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * Filter, which OdfPort to fetch.
     */
    where?: OdfPortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OdfPorts to fetch.
     */
    orderBy?: OdfPortOrderByWithRelationInput | OdfPortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OdfPorts.
     */
    cursor?: OdfPortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OdfPorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OdfPorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OdfPorts.
     */
    distinct?: OdfPortScalarFieldEnum | OdfPortScalarFieldEnum[]
  }

  /**
   * OdfPort findMany
   */
  export type OdfPortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * Filter, which OdfPorts to fetch.
     */
    where?: OdfPortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OdfPorts to fetch.
     */
    orderBy?: OdfPortOrderByWithRelationInput | OdfPortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OdfPorts.
     */
    cursor?: OdfPortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OdfPorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OdfPorts.
     */
    skip?: number
    distinct?: OdfPortScalarFieldEnum | OdfPortScalarFieldEnum[]
  }

  /**
   * OdfPort create
   */
  export type OdfPortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * The data needed to create a OdfPort.
     */
    data: XOR<OdfPortCreateInput, OdfPortUncheckedCreateInput>
  }

  /**
   * OdfPort createMany
   */
  export type OdfPortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OdfPorts.
     */
    data: OdfPortCreateManyInput | OdfPortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OdfPort createManyAndReturn
   */
  export type OdfPortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * The data used to create many OdfPorts.
     */
    data: OdfPortCreateManyInput | OdfPortCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OdfPort update
   */
  export type OdfPortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * The data needed to update a OdfPort.
     */
    data: XOR<OdfPortUpdateInput, OdfPortUncheckedUpdateInput>
    /**
     * Choose, which OdfPort to update.
     */
    where: OdfPortWhereUniqueInput
  }

  /**
   * OdfPort updateMany
   */
  export type OdfPortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OdfPorts.
     */
    data: XOR<OdfPortUpdateManyMutationInput, OdfPortUncheckedUpdateManyInput>
    /**
     * Filter which OdfPorts to update
     */
    where?: OdfPortWhereInput
    /**
     * Limit how many OdfPorts to update.
     */
    limit?: number
  }

  /**
   * OdfPort updateManyAndReturn
   */
  export type OdfPortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * The data used to update OdfPorts.
     */
    data: XOR<OdfPortUpdateManyMutationInput, OdfPortUncheckedUpdateManyInput>
    /**
     * Filter which OdfPorts to update
     */
    where?: OdfPortWhereInput
    /**
     * Limit how many OdfPorts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OdfPort upsert
   */
  export type OdfPortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * The filter to search for the OdfPort to update in case it exists.
     */
    where: OdfPortWhereUniqueInput
    /**
     * In case the OdfPort found by the `where` argument doesn't exist, create a new OdfPort with this data.
     */
    create: XOR<OdfPortCreateInput, OdfPortUncheckedCreateInput>
    /**
     * In case the OdfPort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OdfPortUpdateInput, OdfPortUncheckedUpdateInput>
  }

  /**
   * OdfPort delete
   */
  export type OdfPortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    /**
     * Filter which OdfPort to delete.
     */
    where: OdfPortWhereUniqueInput
  }

  /**
   * OdfPort deleteMany
   */
  export type OdfPortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OdfPorts to delete
     */
    where?: OdfPortWhereInput
    /**
     * Limit how many OdfPorts to delete.
     */
    limit?: number
  }

  /**
   * OdfPort.mappings
   */
  export type OdfPort$mappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    cursor?: MappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * OdfPort without action
   */
  export type OdfPortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
  }


  /**
   * Model Mapping
   */

  export type AggregateMapping = {
    _count: MappingCountAggregateOutputType | null
    _avg: MappingAvgAggregateOutputType | null
    _sum: MappingSumAggregateOutputType | null
    _min: MappingMinAggregateOutputType | null
    _max: MappingMaxAggregateOutputType | null
  }

  export type MappingAvgAggregateOutputType = {
    id: number | null
    portId: number | null
    edfaId: number | null
    chasisId: number | null
    divisorId: number | null
    odfId: number | null
    odfPortId: number | null
    edfaPort: number | null
  }

  export type MappingSumAggregateOutputType = {
    id: number | null
    portId: number | null
    edfaId: number | null
    chasisId: number | null
    divisorId: number | null
    odfId: number | null
    odfPortId: number | null
    edfaPort: number | null
  }

  export type MappingMinAggregateOutputType = {
    id: number | null
    portId: number | null
    edfaId: number | null
    chasisId: number | null
    divisorId: number | null
    odfId: number | null
    odfPortId: number | null
    edfaPort: number | null
    createdAt: Date | null
  }

  export type MappingMaxAggregateOutputType = {
    id: number | null
    portId: number | null
    edfaId: number | null
    chasisId: number | null
    divisorId: number | null
    odfId: number | null
    odfPortId: number | null
    edfaPort: number | null
    createdAt: Date | null
  }

  export type MappingCountAggregateOutputType = {
    id: number
    portId: number
    edfaId: number
    chasisId: number
    divisorId: number
    odfId: number
    odfPortId: number
    edfaPort: number
    createdAt: number
    _all: number
  }


  export type MappingAvgAggregateInputType = {
    id?: true
    portId?: true
    edfaId?: true
    chasisId?: true
    divisorId?: true
    odfId?: true
    odfPortId?: true
    edfaPort?: true
  }

  export type MappingSumAggregateInputType = {
    id?: true
    portId?: true
    edfaId?: true
    chasisId?: true
    divisorId?: true
    odfId?: true
    odfPortId?: true
    edfaPort?: true
  }

  export type MappingMinAggregateInputType = {
    id?: true
    portId?: true
    edfaId?: true
    chasisId?: true
    divisorId?: true
    odfId?: true
    odfPortId?: true
    edfaPort?: true
    createdAt?: true
  }

  export type MappingMaxAggregateInputType = {
    id?: true
    portId?: true
    edfaId?: true
    chasisId?: true
    divisorId?: true
    odfId?: true
    odfPortId?: true
    edfaPort?: true
    createdAt?: true
  }

  export type MappingCountAggregateInputType = {
    id?: true
    portId?: true
    edfaId?: true
    chasisId?: true
    divisorId?: true
    odfId?: true
    odfPortId?: true
    edfaPort?: true
    createdAt?: true
    _all?: true
  }

  export type MappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mapping to aggregate.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mappings
    **/
    _count?: true | MappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MappingMaxAggregateInputType
  }

  export type GetMappingAggregateType<T extends MappingAggregateArgs> = {
        [P in keyof T & keyof AggregateMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapping[P]>
      : GetScalarType<T[P], AggregateMapping[P]>
  }




  export type MappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MappingWhereInput
    orderBy?: MappingOrderByWithAggregationInput | MappingOrderByWithAggregationInput[]
    by: MappingScalarFieldEnum[] | MappingScalarFieldEnum
    having?: MappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MappingCountAggregateInputType | true
    _avg?: MappingAvgAggregateInputType
    _sum?: MappingSumAggregateInputType
    _min?: MappingMinAggregateInputType
    _max?: MappingMaxAggregateInputType
  }

  export type MappingGroupByOutputType = {
    id: number
    portId: number
    edfaId: number | null
    chasisId: number | null
    divisorId: number | null
    odfId: number | null
    odfPortId: number | null
    edfaPort: number | null
    createdAt: Date
    _count: MappingCountAggregateOutputType | null
    _avg: MappingAvgAggregateOutputType | null
    _sum: MappingSumAggregateOutputType | null
    _min: MappingMinAggregateOutputType | null
    _max: MappingMaxAggregateOutputType | null
  }

  type GetMappingGroupByPayload<T extends MappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MappingGroupByOutputType[P]>
            : GetScalarType<T[P], MappingGroupByOutputType[P]>
        }
      >
    >


  export type MappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portId?: boolean
    edfaId?: boolean
    chasisId?: boolean
    divisorId?: boolean
    odfId?: boolean
    odfPortId?: boolean
    edfaPort?: boolean
    createdAt?: boolean
    chasis?: boolean | Mapping$chasisArgs<ExtArgs>
    divisor?: boolean | Mapping$divisorArgs<ExtArgs>
    edfa?: boolean | Mapping$edfaArgs<ExtArgs>
    odf?: boolean | Mapping$odfArgs<ExtArgs>
    odfPort?: boolean | Mapping$odfPortArgs<ExtArgs>
    port?: boolean | PortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type MappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portId?: boolean
    edfaId?: boolean
    chasisId?: boolean
    divisorId?: boolean
    odfId?: boolean
    odfPortId?: boolean
    edfaPort?: boolean
    createdAt?: boolean
    chasis?: boolean | Mapping$chasisArgs<ExtArgs>
    divisor?: boolean | Mapping$divisorArgs<ExtArgs>
    edfa?: boolean | Mapping$edfaArgs<ExtArgs>
    odf?: boolean | Mapping$odfArgs<ExtArgs>
    odfPort?: boolean | Mapping$odfPortArgs<ExtArgs>
    port?: boolean | PortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type MappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portId?: boolean
    edfaId?: boolean
    chasisId?: boolean
    divisorId?: boolean
    odfId?: boolean
    odfPortId?: boolean
    edfaPort?: boolean
    createdAt?: boolean
    chasis?: boolean | Mapping$chasisArgs<ExtArgs>
    divisor?: boolean | Mapping$divisorArgs<ExtArgs>
    edfa?: boolean | Mapping$edfaArgs<ExtArgs>
    odf?: boolean | Mapping$odfArgs<ExtArgs>
    odfPort?: boolean | Mapping$odfPortArgs<ExtArgs>
    port?: boolean | PortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapping"]>

  export type MappingSelectScalar = {
    id?: boolean
    portId?: boolean
    edfaId?: boolean
    chasisId?: boolean
    divisorId?: boolean
    odfId?: boolean
    odfPortId?: boolean
    edfaPort?: boolean
    createdAt?: boolean
  }

  export type MappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portId" | "edfaId" | "chasisId" | "divisorId" | "odfId" | "odfPortId" | "edfaPort" | "createdAt", ExtArgs["result"]["mapping"]>
  export type MappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chasis?: boolean | Mapping$chasisArgs<ExtArgs>
    divisor?: boolean | Mapping$divisorArgs<ExtArgs>
    edfa?: boolean | Mapping$edfaArgs<ExtArgs>
    odf?: boolean | Mapping$odfArgs<ExtArgs>
    odfPort?: boolean | Mapping$odfPortArgs<ExtArgs>
    port?: boolean | PortDefaultArgs<ExtArgs>
  }
  export type MappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chasis?: boolean | Mapping$chasisArgs<ExtArgs>
    divisor?: boolean | Mapping$divisorArgs<ExtArgs>
    edfa?: boolean | Mapping$edfaArgs<ExtArgs>
    odf?: boolean | Mapping$odfArgs<ExtArgs>
    odfPort?: boolean | Mapping$odfPortArgs<ExtArgs>
    port?: boolean | PortDefaultArgs<ExtArgs>
  }
  export type MappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chasis?: boolean | Mapping$chasisArgs<ExtArgs>
    divisor?: boolean | Mapping$divisorArgs<ExtArgs>
    edfa?: boolean | Mapping$edfaArgs<ExtArgs>
    odf?: boolean | Mapping$odfArgs<ExtArgs>
    odfPort?: boolean | Mapping$odfPortArgs<ExtArgs>
    port?: boolean | PortDefaultArgs<ExtArgs>
  }

  export type $MappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mapping"
    objects: {
      chasis: Prisma.$ChasisPayload<ExtArgs> | null
      divisor: Prisma.$DivisorPayload<ExtArgs> | null
      edfa: Prisma.$EdfaPayload<ExtArgs> | null
      odf: Prisma.$OdfPayload<ExtArgs> | null
      odfPort: Prisma.$OdfPortPayload<ExtArgs> | null
      port: Prisma.$PortPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      portId: number
      edfaId: number | null
      chasisId: number | null
      divisorId: number | null
      odfId: number | null
      odfPortId: number | null
      edfaPort: number | null
      createdAt: Date
    }, ExtArgs["result"]["mapping"]>
    composites: {}
  }

  type MappingGetPayload<S extends boolean | null | undefined | MappingDefaultArgs> = $Result.GetResult<Prisma.$MappingPayload, S>

  type MappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MappingCountAggregateInputType | true
    }

  export interface MappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mapping'], meta: { name: 'Mapping' } }
    /**
     * Find zero or one Mapping that matches the filter.
     * @param {MappingFindUniqueArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MappingFindUniqueArgs>(args: SelectSubset<T, MappingFindUniqueArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MappingFindUniqueOrThrowArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MappingFindUniqueOrThrowArgs>(args: SelectSubset<T, MappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingFindFirstArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MappingFindFirstArgs>(args?: SelectSubset<T, MappingFindFirstArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingFindFirstOrThrowArgs} args - Arguments to find a Mapping
     * @example
     * // Get one Mapping
     * const mapping = await prisma.mapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MappingFindFirstOrThrowArgs>(args?: SelectSubset<T, MappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mappings
     * const mappings = await prisma.mapping.findMany()
     * 
     * // Get first 10 Mappings
     * const mappings = await prisma.mapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mappingWithIdOnly = await prisma.mapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MappingFindManyArgs>(args?: SelectSubset<T, MappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mapping.
     * @param {MappingCreateArgs} args - Arguments to create a Mapping.
     * @example
     * // Create one Mapping
     * const Mapping = await prisma.mapping.create({
     *   data: {
     *     // ... data to create a Mapping
     *   }
     * })
     * 
     */
    create<T extends MappingCreateArgs>(args: SelectSubset<T, MappingCreateArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mappings.
     * @param {MappingCreateManyArgs} args - Arguments to create many Mappings.
     * @example
     * // Create many Mappings
     * const mapping = await prisma.mapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MappingCreateManyArgs>(args?: SelectSubset<T, MappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mappings and returns the data saved in the database.
     * @param {MappingCreateManyAndReturnArgs} args - Arguments to create many Mappings.
     * @example
     * // Create many Mappings
     * const mapping = await prisma.mapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mappings and only return the `id`
     * const mappingWithIdOnly = await prisma.mapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MappingCreateManyAndReturnArgs>(args?: SelectSubset<T, MappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mapping.
     * @param {MappingDeleteArgs} args - Arguments to delete one Mapping.
     * @example
     * // Delete one Mapping
     * const Mapping = await prisma.mapping.delete({
     *   where: {
     *     // ... filter to delete one Mapping
     *   }
     * })
     * 
     */
    delete<T extends MappingDeleteArgs>(args: SelectSubset<T, MappingDeleteArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mapping.
     * @param {MappingUpdateArgs} args - Arguments to update one Mapping.
     * @example
     * // Update one Mapping
     * const mapping = await prisma.mapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MappingUpdateArgs>(args: SelectSubset<T, MappingUpdateArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mappings.
     * @param {MappingDeleteManyArgs} args - Arguments to filter Mappings to delete.
     * @example
     * // Delete a few Mappings
     * const { count } = await prisma.mapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MappingDeleteManyArgs>(args?: SelectSubset<T, MappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mappings
     * const mapping = await prisma.mapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MappingUpdateManyArgs>(args: SelectSubset<T, MappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mappings and returns the data updated in the database.
     * @param {MappingUpdateManyAndReturnArgs} args - Arguments to update many Mappings.
     * @example
     * // Update many Mappings
     * const mapping = await prisma.mapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mappings and only return the `id`
     * const mappingWithIdOnly = await prisma.mapping.updateManyAndReturn({
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
    updateManyAndReturn<T extends MappingUpdateManyAndReturnArgs>(args: SelectSubset<T, MappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mapping.
     * @param {MappingUpsertArgs} args - Arguments to update or create a Mapping.
     * @example
     * // Update or create a Mapping
     * const mapping = await prisma.mapping.upsert({
     *   create: {
     *     // ... data to create a Mapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mapping we want to update
     *   }
     * })
     */
    upsert<T extends MappingUpsertArgs>(args: SelectSubset<T, MappingUpsertArgs<ExtArgs>>): Prisma__MappingClient<$Result.GetResult<Prisma.$MappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingCountArgs} args - Arguments to filter Mappings to count.
     * @example
     * // Count the number of Mappings
     * const count = await prisma.mapping.count({
     *   where: {
     *     // ... the filter for the Mappings we want to count
     *   }
     * })
    **/
    count<T extends MappingCountArgs>(
      args?: Subset<T, MappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MappingAggregateArgs>(args: Subset<T, MappingAggregateArgs>): Prisma.PrismaPromise<GetMappingAggregateType<T>>

    /**
     * Group by Mapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MappingGroupByArgs} args - Group by arguments.
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
      T extends MappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MappingGroupByArgs['orderBy'] }
        : { orderBy?: MappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mapping model
   */
  readonly fields: MappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chasis<T extends Mapping$chasisArgs<ExtArgs> = {}>(args?: Subset<T, Mapping$chasisArgs<ExtArgs>>): Prisma__ChasisClient<$Result.GetResult<Prisma.$ChasisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    divisor<T extends Mapping$divisorArgs<ExtArgs> = {}>(args?: Subset<T, Mapping$divisorArgs<ExtArgs>>): Prisma__DivisorClient<$Result.GetResult<Prisma.$DivisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    edfa<T extends Mapping$edfaArgs<ExtArgs> = {}>(args?: Subset<T, Mapping$edfaArgs<ExtArgs>>): Prisma__EdfaClient<$Result.GetResult<Prisma.$EdfaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    odf<T extends Mapping$odfArgs<ExtArgs> = {}>(args?: Subset<T, Mapping$odfArgs<ExtArgs>>): Prisma__OdfClient<$Result.GetResult<Prisma.$OdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    odfPort<T extends Mapping$odfPortArgs<ExtArgs> = {}>(args?: Subset<T, Mapping$odfPortArgs<ExtArgs>>): Prisma__OdfPortClient<$Result.GetResult<Prisma.$OdfPortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    port<T extends PortDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortDefaultArgs<ExtArgs>>): Prisma__PortClient<$Result.GetResult<Prisma.$PortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mapping model
   */
  interface MappingFieldRefs {
    readonly id: FieldRef<"Mapping", 'Int'>
    readonly portId: FieldRef<"Mapping", 'Int'>
    readonly edfaId: FieldRef<"Mapping", 'Int'>
    readonly chasisId: FieldRef<"Mapping", 'Int'>
    readonly divisorId: FieldRef<"Mapping", 'Int'>
    readonly odfId: FieldRef<"Mapping", 'Int'>
    readonly odfPortId: FieldRef<"Mapping", 'Int'>
    readonly edfaPort: FieldRef<"Mapping", 'Int'>
    readonly createdAt: FieldRef<"Mapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mapping findUnique
   */
  export type MappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping findUniqueOrThrow
   */
  export type MappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping findFirst
   */
  export type MappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mappings.
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mappings.
     */
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Mapping findFirstOrThrow
   */
  export type MappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mapping to fetch.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mappings.
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mappings.
     */
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Mapping findMany
   */
  export type MappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter, which Mappings to fetch.
     */
    where?: MappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mappings to fetch.
     */
    orderBy?: MappingOrderByWithRelationInput | MappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mappings.
     */
    cursor?: MappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mappings.
     */
    skip?: number
    distinct?: MappingScalarFieldEnum | MappingScalarFieldEnum[]
  }

  /**
   * Mapping create
   */
  export type MappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * The data needed to create a Mapping.
     */
    data: XOR<MappingCreateInput, MappingUncheckedCreateInput>
  }

  /**
   * Mapping createMany
   */
  export type MappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mappings.
     */
    data: MappingCreateManyInput | MappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mapping createManyAndReturn
   */
  export type MappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * The data used to create many Mappings.
     */
    data: MappingCreateManyInput | MappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mapping update
   */
  export type MappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * The data needed to update a Mapping.
     */
    data: XOR<MappingUpdateInput, MappingUncheckedUpdateInput>
    /**
     * Choose, which Mapping to update.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping updateMany
   */
  export type MappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mappings.
     */
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyInput>
    /**
     * Filter which Mappings to update
     */
    where?: MappingWhereInput
    /**
     * Limit how many Mappings to update.
     */
    limit?: number
  }

  /**
   * Mapping updateManyAndReturn
   */
  export type MappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * The data used to update Mappings.
     */
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyInput>
    /**
     * Filter which Mappings to update
     */
    where?: MappingWhereInput
    /**
     * Limit how many Mappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mapping upsert
   */
  export type MappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * The filter to search for the Mapping to update in case it exists.
     */
    where: MappingWhereUniqueInput
    /**
     * In case the Mapping found by the `where` argument doesn't exist, create a new Mapping with this data.
     */
    create: XOR<MappingCreateInput, MappingUncheckedCreateInput>
    /**
     * In case the Mapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MappingUpdateInput, MappingUncheckedUpdateInput>
  }

  /**
   * Mapping delete
   */
  export type MappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
    /**
     * Filter which Mapping to delete.
     */
    where: MappingWhereUniqueInput
  }

  /**
   * Mapping deleteMany
   */
  export type MappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mappings to delete
     */
    where?: MappingWhereInput
    /**
     * Limit how many Mappings to delete.
     */
    limit?: number
  }

  /**
   * Mapping.chasis
   */
  export type Mapping$chasisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chasis
     */
    select?: ChasisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chasis
     */
    omit?: ChasisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChasisInclude<ExtArgs> | null
    where?: ChasisWhereInput
  }

  /**
   * Mapping.divisor
   */
  export type Mapping$divisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Divisor
     */
    select?: DivisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Divisor
     */
    omit?: DivisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DivisorInclude<ExtArgs> | null
    where?: DivisorWhereInput
  }

  /**
   * Mapping.edfa
   */
  export type Mapping$edfaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edfa
     */
    select?: EdfaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edfa
     */
    omit?: EdfaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdfaInclude<ExtArgs> | null
    where?: EdfaWhereInput
  }

  /**
   * Mapping.odf
   */
  export type Mapping$odfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Odf
     */
    select?: OdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Odf
     */
    omit?: OdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfInclude<ExtArgs> | null
    where?: OdfWhereInput
  }

  /**
   * Mapping.odfPort
   */
  export type Mapping$odfPortArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OdfPort
     */
    select?: OdfPortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OdfPort
     */
    omit?: OdfPortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OdfPortInclude<ExtArgs> | null
    where?: OdfPortWhereInput
  }

  /**
   * Mapping without action
   */
  export type MappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapping
     */
    select?: MappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapping
     */
    omit?: MappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MappingInclude<ExtArgs> | null
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


  export const OltScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ip: 'ip',
    createdAt: 'createdAt'
  };

  export type OltScalarFieldEnum = (typeof OltScalarFieldEnum)[keyof typeof OltScalarFieldEnum]


  export const PortScalarFieldEnum: {
    id: 'id',
    oltId: 'oltId',
    slot: 'slot',
    portNumber: 'portNumber',
    status: 'status',
    label: 'label',
    rx: 'rx',
    tx: 'tx',
    vcc: 'vcc',
    brand: 'brand'
  };

  export type PortScalarFieldEnum = (typeof PortScalarFieldEnum)[keyof typeof PortScalarFieldEnum]


  export const EdfaScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EdfaScalarFieldEnum = (typeof EdfaScalarFieldEnum)[keyof typeof EdfaScalarFieldEnum]


  export const ChasisScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ChasisScalarFieldEnum = (typeof ChasisScalarFieldEnum)[keyof typeof ChasisScalarFieldEnum]


  export const DivisorScalarFieldEnum: {
    id: 'id',
    chasisId: 'chasisId',
    slot: 'slot',
    type: 'type'
  };

  export type DivisorScalarFieldEnum = (typeof DivisorScalarFieldEnum)[keyof typeof DivisorScalarFieldEnum]


  export const OdfScalarFieldEnum: {
    id: 'id',
    odfNumber: 'odfNumber',
    name: 'name',
    networks: 'networks'
  };

  export type OdfScalarFieldEnum = (typeof OdfScalarFieldEnum)[keyof typeof OdfScalarFieldEnum]


  export const OdfPortScalarFieldEnum: {
    id: 'id',
    odfId: 'odfId',
    number: 'number',
    buffer: 'buffer',
    color: 'color'
  };

  export type OdfPortScalarFieldEnum = (typeof OdfPortScalarFieldEnum)[keyof typeof OdfPortScalarFieldEnum]


  export const MappingScalarFieldEnum: {
    id: 'id',
    portId: 'portId',
    edfaId: 'edfaId',
    chasisId: 'chasisId',
    divisorId: 'divisorId',
    odfId: 'odfId',
    odfPortId: 'odfPortId',
    edfaPort: 'edfaPort',
    createdAt: 'createdAt'
  };

  export type MappingScalarFieldEnum = (typeof MappingScalarFieldEnum)[keyof typeof MappingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type OltWhereInput = {
    AND?: OltWhereInput | OltWhereInput[]
    OR?: OltWhereInput[]
    NOT?: OltWhereInput | OltWhereInput[]
    id?: IntFilter<"Olt"> | number
    name?: StringFilter<"Olt"> | string
    ip?: StringFilter<"Olt"> | string
    createdAt?: DateTimeFilter<"Olt"> | Date | string
    ports?: PortListRelationFilter
  }

  export type OltOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    ports?: PortOrderByRelationAggregateInput
  }

  export type OltWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OltWhereInput | OltWhereInput[]
    OR?: OltWhereInput[]
    NOT?: OltWhereInput | OltWhereInput[]
    name?: StringFilter<"Olt"> | string
    ip?: StringFilter<"Olt"> | string
    createdAt?: DateTimeFilter<"Olt"> | Date | string
    ports?: PortListRelationFilter
  }, "id">

  export type OltOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    _count?: OltCountOrderByAggregateInput
    _avg?: OltAvgOrderByAggregateInput
    _max?: OltMaxOrderByAggregateInput
    _min?: OltMinOrderByAggregateInput
    _sum?: OltSumOrderByAggregateInput
  }

  export type OltScalarWhereWithAggregatesInput = {
    AND?: OltScalarWhereWithAggregatesInput | OltScalarWhereWithAggregatesInput[]
    OR?: OltScalarWhereWithAggregatesInput[]
    NOT?: OltScalarWhereWithAggregatesInput | OltScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Olt"> | number
    name?: StringWithAggregatesFilter<"Olt"> | string
    ip?: StringWithAggregatesFilter<"Olt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Olt"> | Date | string
  }

  export type PortWhereInput = {
    AND?: PortWhereInput | PortWhereInput[]
    OR?: PortWhereInput[]
    NOT?: PortWhereInput | PortWhereInput[]
    id?: IntFilter<"Port"> | number
    oltId?: IntFilter<"Port"> | number
    slot?: IntFilter<"Port"> | number
    portNumber?: IntFilter<"Port"> | number
    status?: StringFilter<"Port"> | string
    label?: StringNullableFilter<"Port"> | string | null
    rx?: FloatNullableFilter<"Port"> | number | null
    tx?: FloatNullableFilter<"Port"> | number | null
    vcc?: FloatNullableFilter<"Port"> | number | null
    brand?: StringNullableFilter<"Port"> | string | null
    mapping?: XOR<MappingNullableScalarRelationFilter, MappingWhereInput> | null
    olt?: XOR<OltScalarRelationFilter, OltWhereInput>
  }

  export type PortOrderByWithRelationInput = {
    id?: SortOrder
    oltId?: SortOrder
    slot?: SortOrder
    portNumber?: SortOrder
    status?: SortOrder
    label?: SortOrderInput | SortOrder
    rx?: SortOrderInput | SortOrder
    tx?: SortOrderInput | SortOrder
    vcc?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    mapping?: MappingOrderByWithRelationInput
    olt?: OltOrderByWithRelationInput
  }

  export type PortWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    oltId_slot_portNumber?: PortOltIdSlotPortNumberCompoundUniqueInput
    AND?: PortWhereInput | PortWhereInput[]
    OR?: PortWhereInput[]
    NOT?: PortWhereInput | PortWhereInput[]
    oltId?: IntFilter<"Port"> | number
    slot?: IntFilter<"Port"> | number
    portNumber?: IntFilter<"Port"> | number
    status?: StringFilter<"Port"> | string
    label?: StringNullableFilter<"Port"> | string | null
    rx?: FloatNullableFilter<"Port"> | number | null
    tx?: FloatNullableFilter<"Port"> | number | null
    vcc?: FloatNullableFilter<"Port"> | number | null
    brand?: StringNullableFilter<"Port"> | string | null
    mapping?: XOR<MappingNullableScalarRelationFilter, MappingWhereInput> | null
    olt?: XOR<OltScalarRelationFilter, OltWhereInput>
  }, "id" | "oltId_slot_portNumber">

  export type PortOrderByWithAggregationInput = {
    id?: SortOrder
    oltId?: SortOrder
    slot?: SortOrder
    portNumber?: SortOrder
    status?: SortOrder
    label?: SortOrderInput | SortOrder
    rx?: SortOrderInput | SortOrder
    tx?: SortOrderInput | SortOrder
    vcc?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    _count?: PortCountOrderByAggregateInput
    _avg?: PortAvgOrderByAggregateInput
    _max?: PortMaxOrderByAggregateInput
    _min?: PortMinOrderByAggregateInput
    _sum?: PortSumOrderByAggregateInput
  }

  export type PortScalarWhereWithAggregatesInput = {
    AND?: PortScalarWhereWithAggregatesInput | PortScalarWhereWithAggregatesInput[]
    OR?: PortScalarWhereWithAggregatesInput[]
    NOT?: PortScalarWhereWithAggregatesInput | PortScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Port"> | number
    oltId?: IntWithAggregatesFilter<"Port"> | number
    slot?: IntWithAggregatesFilter<"Port"> | number
    portNumber?: IntWithAggregatesFilter<"Port"> | number
    status?: StringWithAggregatesFilter<"Port"> | string
    label?: StringNullableWithAggregatesFilter<"Port"> | string | null
    rx?: FloatNullableWithAggregatesFilter<"Port"> | number | null
    tx?: FloatNullableWithAggregatesFilter<"Port"> | number | null
    vcc?: FloatNullableWithAggregatesFilter<"Port"> | number | null
    brand?: StringNullableWithAggregatesFilter<"Port"> | string | null
  }

  export type EdfaWhereInput = {
    AND?: EdfaWhereInput | EdfaWhereInput[]
    OR?: EdfaWhereInput[]
    NOT?: EdfaWhereInput | EdfaWhereInput[]
    id?: IntFilter<"Edfa"> | number
    name?: StringFilter<"Edfa"> | string
    mappings?: MappingListRelationFilter
  }

  export type EdfaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mappings?: MappingOrderByRelationAggregateInput
  }

  export type EdfaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EdfaWhereInput | EdfaWhereInput[]
    OR?: EdfaWhereInput[]
    NOT?: EdfaWhereInput | EdfaWhereInput[]
    name?: StringFilter<"Edfa"> | string
    mappings?: MappingListRelationFilter
  }, "id">

  export type EdfaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: EdfaCountOrderByAggregateInput
    _avg?: EdfaAvgOrderByAggregateInput
    _max?: EdfaMaxOrderByAggregateInput
    _min?: EdfaMinOrderByAggregateInput
    _sum?: EdfaSumOrderByAggregateInput
  }

  export type EdfaScalarWhereWithAggregatesInput = {
    AND?: EdfaScalarWhereWithAggregatesInput | EdfaScalarWhereWithAggregatesInput[]
    OR?: EdfaScalarWhereWithAggregatesInput[]
    NOT?: EdfaScalarWhereWithAggregatesInput | EdfaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Edfa"> | number
    name?: StringWithAggregatesFilter<"Edfa"> | string
  }

  export type ChasisWhereInput = {
    AND?: ChasisWhereInput | ChasisWhereInput[]
    OR?: ChasisWhereInput[]
    NOT?: ChasisWhereInput | ChasisWhereInput[]
    id?: IntFilter<"Chasis"> | number
    name?: StringFilter<"Chasis"> | string
    divisors?: DivisorListRelationFilter
    mappings?: MappingListRelationFilter
  }

  export type ChasisOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    divisors?: DivisorOrderByRelationAggregateInput
    mappings?: MappingOrderByRelationAggregateInput
  }

  export type ChasisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChasisWhereInput | ChasisWhereInput[]
    OR?: ChasisWhereInput[]
    NOT?: ChasisWhereInput | ChasisWhereInput[]
    name?: StringFilter<"Chasis"> | string
    divisors?: DivisorListRelationFilter
    mappings?: MappingListRelationFilter
  }, "id">

  export type ChasisOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ChasisCountOrderByAggregateInput
    _avg?: ChasisAvgOrderByAggregateInput
    _max?: ChasisMaxOrderByAggregateInput
    _min?: ChasisMinOrderByAggregateInput
    _sum?: ChasisSumOrderByAggregateInput
  }

  export type ChasisScalarWhereWithAggregatesInput = {
    AND?: ChasisScalarWhereWithAggregatesInput | ChasisScalarWhereWithAggregatesInput[]
    OR?: ChasisScalarWhereWithAggregatesInput[]
    NOT?: ChasisScalarWhereWithAggregatesInput | ChasisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chasis"> | number
    name?: StringWithAggregatesFilter<"Chasis"> | string
  }

  export type DivisorWhereInput = {
    AND?: DivisorWhereInput | DivisorWhereInput[]
    OR?: DivisorWhereInput[]
    NOT?: DivisorWhereInput | DivisorWhereInput[]
    id?: IntFilter<"Divisor"> | number
    chasisId?: IntFilter<"Divisor"> | number
    slot?: IntFilter<"Divisor"> | number
    type?: StringFilter<"Divisor"> | string
    chasis?: XOR<ChasisScalarRelationFilter, ChasisWhereInput>
    mappings?: MappingListRelationFilter
  }

  export type DivisorOrderByWithRelationInput = {
    id?: SortOrder
    chasisId?: SortOrder
    slot?: SortOrder
    type?: SortOrder
    chasis?: ChasisOrderByWithRelationInput
    mappings?: MappingOrderByRelationAggregateInput
  }

  export type DivisorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivisorWhereInput | DivisorWhereInput[]
    OR?: DivisorWhereInput[]
    NOT?: DivisorWhereInput | DivisorWhereInput[]
    chasisId?: IntFilter<"Divisor"> | number
    slot?: IntFilter<"Divisor"> | number
    type?: StringFilter<"Divisor"> | string
    chasis?: XOR<ChasisScalarRelationFilter, ChasisWhereInput>
    mappings?: MappingListRelationFilter
  }, "id">

  export type DivisorOrderByWithAggregationInput = {
    id?: SortOrder
    chasisId?: SortOrder
    slot?: SortOrder
    type?: SortOrder
    _count?: DivisorCountOrderByAggregateInput
    _avg?: DivisorAvgOrderByAggregateInput
    _max?: DivisorMaxOrderByAggregateInput
    _min?: DivisorMinOrderByAggregateInput
    _sum?: DivisorSumOrderByAggregateInput
  }

  export type DivisorScalarWhereWithAggregatesInput = {
    AND?: DivisorScalarWhereWithAggregatesInput | DivisorScalarWhereWithAggregatesInput[]
    OR?: DivisorScalarWhereWithAggregatesInput[]
    NOT?: DivisorScalarWhereWithAggregatesInput | DivisorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Divisor"> | number
    chasisId?: IntWithAggregatesFilter<"Divisor"> | number
    slot?: IntWithAggregatesFilter<"Divisor"> | number
    type?: StringWithAggregatesFilter<"Divisor"> | string
  }

  export type OdfWhereInput = {
    AND?: OdfWhereInput | OdfWhereInput[]
    OR?: OdfWhereInput[]
    NOT?: OdfWhereInput | OdfWhereInput[]
    id?: IntFilter<"Odf"> | number
    odfNumber?: IntFilter<"Odf"> | number
    name?: StringFilter<"Odf"> | string
    networks?: StringNullableFilter<"Odf"> | string | null
    mappings?: MappingListRelationFilter
    ports?: OdfPortListRelationFilter
  }

  export type OdfOrderByWithRelationInput = {
    id?: SortOrder
    odfNumber?: SortOrder
    name?: SortOrder
    networks?: SortOrderInput | SortOrder
    mappings?: MappingOrderByRelationAggregateInput
    ports?: OdfPortOrderByRelationAggregateInput
  }

  export type OdfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OdfWhereInput | OdfWhereInput[]
    OR?: OdfWhereInput[]
    NOT?: OdfWhereInput | OdfWhereInput[]
    odfNumber?: IntFilter<"Odf"> | number
    name?: StringFilter<"Odf"> | string
    networks?: StringNullableFilter<"Odf"> | string | null
    mappings?: MappingListRelationFilter
    ports?: OdfPortListRelationFilter
  }, "id">

  export type OdfOrderByWithAggregationInput = {
    id?: SortOrder
    odfNumber?: SortOrder
    name?: SortOrder
    networks?: SortOrderInput | SortOrder
    _count?: OdfCountOrderByAggregateInput
    _avg?: OdfAvgOrderByAggregateInput
    _max?: OdfMaxOrderByAggregateInput
    _min?: OdfMinOrderByAggregateInput
    _sum?: OdfSumOrderByAggregateInput
  }

  export type OdfScalarWhereWithAggregatesInput = {
    AND?: OdfScalarWhereWithAggregatesInput | OdfScalarWhereWithAggregatesInput[]
    OR?: OdfScalarWhereWithAggregatesInput[]
    NOT?: OdfScalarWhereWithAggregatesInput | OdfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Odf"> | number
    odfNumber?: IntWithAggregatesFilter<"Odf"> | number
    name?: StringWithAggregatesFilter<"Odf"> | string
    networks?: StringNullableWithAggregatesFilter<"Odf"> | string | null
  }

  export type OdfPortWhereInput = {
    AND?: OdfPortWhereInput | OdfPortWhereInput[]
    OR?: OdfPortWhereInput[]
    NOT?: OdfPortWhereInput | OdfPortWhereInput[]
    id?: IntFilter<"OdfPort"> | number
    odfId?: IntFilter<"OdfPort"> | number
    number?: IntFilter<"OdfPort"> | number
    buffer?: IntNullableFilter<"OdfPort"> | number | null
    color?: StringNullableFilter<"OdfPort"> | string | null
    mappings?: MappingListRelationFilter
    odf?: XOR<OdfScalarRelationFilter, OdfWhereInput>
  }

  export type OdfPortOrderByWithRelationInput = {
    id?: SortOrder
    odfId?: SortOrder
    number?: SortOrder
    buffer?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    mappings?: MappingOrderByRelationAggregateInput
    odf?: OdfOrderByWithRelationInput
  }

  export type OdfPortWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OdfPortWhereInput | OdfPortWhereInput[]
    OR?: OdfPortWhereInput[]
    NOT?: OdfPortWhereInput | OdfPortWhereInput[]
    odfId?: IntFilter<"OdfPort"> | number
    number?: IntFilter<"OdfPort"> | number
    buffer?: IntNullableFilter<"OdfPort"> | number | null
    color?: StringNullableFilter<"OdfPort"> | string | null
    mappings?: MappingListRelationFilter
    odf?: XOR<OdfScalarRelationFilter, OdfWhereInput>
  }, "id">

  export type OdfPortOrderByWithAggregationInput = {
    id?: SortOrder
    odfId?: SortOrder
    number?: SortOrder
    buffer?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    _count?: OdfPortCountOrderByAggregateInput
    _avg?: OdfPortAvgOrderByAggregateInput
    _max?: OdfPortMaxOrderByAggregateInput
    _min?: OdfPortMinOrderByAggregateInput
    _sum?: OdfPortSumOrderByAggregateInput
  }

  export type OdfPortScalarWhereWithAggregatesInput = {
    AND?: OdfPortScalarWhereWithAggregatesInput | OdfPortScalarWhereWithAggregatesInput[]
    OR?: OdfPortScalarWhereWithAggregatesInput[]
    NOT?: OdfPortScalarWhereWithAggregatesInput | OdfPortScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OdfPort"> | number
    odfId?: IntWithAggregatesFilter<"OdfPort"> | number
    number?: IntWithAggregatesFilter<"OdfPort"> | number
    buffer?: IntNullableWithAggregatesFilter<"OdfPort"> | number | null
    color?: StringNullableWithAggregatesFilter<"OdfPort"> | string | null
  }

  export type MappingWhereInput = {
    AND?: MappingWhereInput | MappingWhereInput[]
    OR?: MappingWhereInput[]
    NOT?: MappingWhereInput | MappingWhereInput[]
    id?: IntFilter<"Mapping"> | number
    portId?: IntFilter<"Mapping"> | number
    edfaId?: IntNullableFilter<"Mapping"> | number | null
    chasisId?: IntNullableFilter<"Mapping"> | number | null
    divisorId?: IntNullableFilter<"Mapping"> | number | null
    odfId?: IntNullableFilter<"Mapping"> | number | null
    odfPortId?: IntNullableFilter<"Mapping"> | number | null
    edfaPort?: IntNullableFilter<"Mapping"> | number | null
    createdAt?: DateTimeFilter<"Mapping"> | Date | string
    chasis?: XOR<ChasisNullableScalarRelationFilter, ChasisWhereInput> | null
    divisor?: XOR<DivisorNullableScalarRelationFilter, DivisorWhereInput> | null
    edfa?: XOR<EdfaNullableScalarRelationFilter, EdfaWhereInput> | null
    odf?: XOR<OdfNullableScalarRelationFilter, OdfWhereInput> | null
    odfPort?: XOR<OdfPortNullableScalarRelationFilter, OdfPortWhereInput> | null
    port?: XOR<PortScalarRelationFilter, PortWhereInput>
  }

  export type MappingOrderByWithRelationInput = {
    id?: SortOrder
    portId?: SortOrder
    edfaId?: SortOrderInput | SortOrder
    chasisId?: SortOrderInput | SortOrder
    divisorId?: SortOrderInput | SortOrder
    odfId?: SortOrderInput | SortOrder
    odfPortId?: SortOrderInput | SortOrder
    edfaPort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    chasis?: ChasisOrderByWithRelationInput
    divisor?: DivisorOrderByWithRelationInput
    edfa?: EdfaOrderByWithRelationInput
    odf?: OdfOrderByWithRelationInput
    odfPort?: OdfPortOrderByWithRelationInput
    port?: PortOrderByWithRelationInput
  }

  export type MappingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    portId?: number
    AND?: MappingWhereInput | MappingWhereInput[]
    OR?: MappingWhereInput[]
    NOT?: MappingWhereInput | MappingWhereInput[]
    edfaId?: IntNullableFilter<"Mapping"> | number | null
    chasisId?: IntNullableFilter<"Mapping"> | number | null
    divisorId?: IntNullableFilter<"Mapping"> | number | null
    odfId?: IntNullableFilter<"Mapping"> | number | null
    odfPortId?: IntNullableFilter<"Mapping"> | number | null
    edfaPort?: IntNullableFilter<"Mapping"> | number | null
    createdAt?: DateTimeFilter<"Mapping"> | Date | string
    chasis?: XOR<ChasisNullableScalarRelationFilter, ChasisWhereInput> | null
    divisor?: XOR<DivisorNullableScalarRelationFilter, DivisorWhereInput> | null
    edfa?: XOR<EdfaNullableScalarRelationFilter, EdfaWhereInput> | null
    odf?: XOR<OdfNullableScalarRelationFilter, OdfWhereInput> | null
    odfPort?: XOR<OdfPortNullableScalarRelationFilter, OdfPortWhereInput> | null
    port?: XOR<PortScalarRelationFilter, PortWhereInput>
  }, "id" | "portId">

  export type MappingOrderByWithAggregationInput = {
    id?: SortOrder
    portId?: SortOrder
    edfaId?: SortOrderInput | SortOrder
    chasisId?: SortOrderInput | SortOrder
    divisorId?: SortOrderInput | SortOrder
    odfId?: SortOrderInput | SortOrder
    odfPortId?: SortOrderInput | SortOrder
    edfaPort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MappingCountOrderByAggregateInput
    _avg?: MappingAvgOrderByAggregateInput
    _max?: MappingMaxOrderByAggregateInput
    _min?: MappingMinOrderByAggregateInput
    _sum?: MappingSumOrderByAggregateInput
  }

  export type MappingScalarWhereWithAggregatesInput = {
    AND?: MappingScalarWhereWithAggregatesInput | MappingScalarWhereWithAggregatesInput[]
    OR?: MappingScalarWhereWithAggregatesInput[]
    NOT?: MappingScalarWhereWithAggregatesInput | MappingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mapping"> | number
    portId?: IntWithAggregatesFilter<"Mapping"> | number
    edfaId?: IntNullableWithAggregatesFilter<"Mapping"> | number | null
    chasisId?: IntNullableWithAggregatesFilter<"Mapping"> | number | null
    divisorId?: IntNullableWithAggregatesFilter<"Mapping"> | number | null
    odfId?: IntNullableWithAggregatesFilter<"Mapping"> | number | null
    odfPortId?: IntNullableWithAggregatesFilter<"Mapping"> | number | null
    edfaPort?: IntNullableWithAggregatesFilter<"Mapping"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Mapping"> | Date | string
  }

  export type OltCreateInput = {
    name: string
    ip: string
    createdAt?: Date | string
    ports?: PortCreateNestedManyWithoutOltInput
  }

  export type OltUncheckedCreateInput = {
    id?: number
    name: string
    ip: string
    createdAt?: Date | string
    ports?: PortUncheckedCreateNestedManyWithoutOltInput
  }

  export type OltUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ports?: PortUpdateManyWithoutOltNestedInput
  }

  export type OltUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ports?: PortUncheckedUpdateManyWithoutOltNestedInput
  }

  export type OltCreateManyInput = {
    id?: number
    name: string
    ip: string
    createdAt?: Date | string
  }

  export type OltUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OltUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortCreateInput = {
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
    mapping?: MappingCreateNestedOneWithoutPortInput
    olt: OltCreateNestedOneWithoutPortsInput
  }

  export type PortUncheckedCreateInput = {
    id?: number
    oltId: number
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
    mapping?: MappingUncheckedCreateNestedOneWithoutPortInput
  }

  export type PortUpdateInput = {
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mapping?: MappingUpdateOneWithoutPortNestedInput
    olt?: OltUpdateOneRequiredWithoutPortsNestedInput
  }

  export type PortUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oltId?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mapping?: MappingUncheckedUpdateOneWithoutPortNestedInput
  }

  export type PortCreateManyInput = {
    id?: number
    oltId: number
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
  }

  export type PortUpdateManyMutationInput = {
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oltId?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EdfaCreateInput = {
    name: string
    mappings?: MappingCreateNestedManyWithoutEdfaInput
  }

  export type EdfaUncheckedCreateInput = {
    id?: number
    name: string
    mappings?: MappingUncheckedCreateNestedManyWithoutEdfaInput
  }

  export type EdfaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUpdateManyWithoutEdfaNestedInput
  }

  export type EdfaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUncheckedUpdateManyWithoutEdfaNestedInput
  }

  export type EdfaCreateManyInput = {
    id?: number
    name: string
  }

  export type EdfaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EdfaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChasisCreateInput = {
    name: string
    divisors?: DivisorCreateNestedManyWithoutChasisInput
    mappings?: MappingCreateNestedManyWithoutChasisInput
  }

  export type ChasisUncheckedCreateInput = {
    id?: number
    name: string
    divisors?: DivisorUncheckedCreateNestedManyWithoutChasisInput
    mappings?: MappingUncheckedCreateNestedManyWithoutChasisInput
  }

  export type ChasisUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    divisors?: DivisorUpdateManyWithoutChasisNestedInput
    mappings?: MappingUpdateManyWithoutChasisNestedInput
  }

  export type ChasisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    divisors?: DivisorUncheckedUpdateManyWithoutChasisNestedInput
    mappings?: MappingUncheckedUpdateManyWithoutChasisNestedInput
  }

  export type ChasisCreateManyInput = {
    id?: number
    name: string
  }

  export type ChasisUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChasisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DivisorCreateInput = {
    slot: number
    type: string
    chasis: ChasisCreateNestedOneWithoutDivisorsInput
    mappings?: MappingCreateNestedManyWithoutDivisorInput
  }

  export type DivisorUncheckedCreateInput = {
    id?: number
    chasisId: number
    slot: number
    type: string
    mappings?: MappingUncheckedCreateNestedManyWithoutDivisorInput
  }

  export type DivisorUpdateInput = {
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    chasis?: ChasisUpdateOneRequiredWithoutDivisorsNestedInput
    mappings?: MappingUpdateManyWithoutDivisorNestedInput
  }

  export type DivisorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chasisId?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUncheckedUpdateManyWithoutDivisorNestedInput
  }

  export type DivisorCreateManyInput = {
    id?: number
    chasisId: number
    slot: number
    type: string
  }

  export type DivisorUpdateManyMutationInput = {
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type DivisorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chasisId?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type OdfCreateInput = {
    odfNumber: number
    name: string
    networks?: string | null
    mappings?: MappingCreateNestedManyWithoutOdfInput
    ports?: OdfPortCreateNestedManyWithoutOdfInput
  }

  export type OdfUncheckedCreateInput = {
    id?: number
    odfNumber: number
    name: string
    networks?: string | null
    mappings?: MappingUncheckedCreateNestedManyWithoutOdfInput
    ports?: OdfPortUncheckedCreateNestedManyWithoutOdfInput
  }

  export type OdfUpdateInput = {
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUpdateManyWithoutOdfNestedInput
    ports?: OdfPortUpdateManyWithoutOdfNestedInput
  }

  export type OdfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUncheckedUpdateManyWithoutOdfNestedInput
    ports?: OdfPortUncheckedUpdateManyWithoutOdfNestedInput
  }

  export type OdfCreateManyInput = {
    id?: number
    odfNumber: number
    name: string
    networks?: string | null
  }

  export type OdfUpdateManyMutationInput = {
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OdfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OdfPortCreateInput = {
    number: number
    buffer?: number | null
    color?: string | null
    mappings?: MappingCreateNestedManyWithoutOdfPortInput
    odf: OdfCreateNestedOneWithoutPortsInput
  }

  export type OdfPortUncheckedCreateInput = {
    id?: number
    odfId: number
    number: number
    buffer?: number | null
    color?: string | null
    mappings?: MappingUncheckedCreateNestedManyWithoutOdfPortInput
  }

  export type OdfPortUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUpdateManyWithoutOdfPortNestedInput
    odf?: OdfUpdateOneRequiredWithoutPortsNestedInput
  }

  export type OdfPortUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    odfId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUncheckedUpdateManyWithoutOdfPortNestedInput
  }

  export type OdfPortCreateManyInput = {
    id?: number
    odfId: number
    number: number
    buffer?: number | null
    color?: string | null
  }

  export type OdfPortUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OdfPortUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    odfId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MappingCreateInput = {
    edfaPort?: number | null
    createdAt?: Date | string
    chasis?: ChasisCreateNestedOneWithoutMappingsInput
    divisor?: DivisorCreateNestedOneWithoutMappingsInput
    edfa?: EdfaCreateNestedOneWithoutMappingsInput
    odf?: OdfCreateNestedOneWithoutMappingsInput
    odfPort?: OdfPortCreateNestedOneWithoutMappingsInput
    port: PortCreateNestedOneWithoutMappingInput
  }

  export type MappingUncheckedCreateInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    divisorId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingUpdateInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chasis?: ChasisUpdateOneWithoutMappingsNestedInput
    divisor?: DivisorUpdateOneWithoutMappingsNestedInput
    edfa?: EdfaUpdateOneWithoutMappingsNestedInput
    odf?: OdfUpdateOneWithoutMappingsNestedInput
    odfPort?: OdfPortUpdateOneWithoutMappingsNestedInput
    port?: PortUpdateOneRequiredWithoutMappingNestedInput
  }

  export type MappingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingCreateManyInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    divisorId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingUpdateManyMutationInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PortListRelationFilter = {
    every?: PortWhereInput
    some?: PortWhereInput
    none?: PortWhereInput
  }

  export type PortOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OltCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type OltAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OltMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type OltMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type OltSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MappingNullableScalarRelationFilter = {
    is?: MappingWhereInput | null
    isNot?: MappingWhereInput | null
  }

  export type OltScalarRelationFilter = {
    is?: OltWhereInput
    isNot?: OltWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PortOltIdSlotPortNumberCompoundUniqueInput = {
    oltId: number
    slot: number
    portNumber: number
  }

  export type PortCountOrderByAggregateInput = {
    id?: SortOrder
    oltId?: SortOrder
    slot?: SortOrder
    portNumber?: SortOrder
    status?: SortOrder
    label?: SortOrder
    rx?: SortOrder
    tx?: SortOrder
    vcc?: SortOrder
    brand?: SortOrder
  }

  export type PortAvgOrderByAggregateInput = {
    id?: SortOrder
    oltId?: SortOrder
    slot?: SortOrder
    portNumber?: SortOrder
    rx?: SortOrder
    tx?: SortOrder
    vcc?: SortOrder
  }

  export type PortMaxOrderByAggregateInput = {
    id?: SortOrder
    oltId?: SortOrder
    slot?: SortOrder
    portNumber?: SortOrder
    status?: SortOrder
    label?: SortOrder
    rx?: SortOrder
    tx?: SortOrder
    vcc?: SortOrder
    brand?: SortOrder
  }

  export type PortMinOrderByAggregateInput = {
    id?: SortOrder
    oltId?: SortOrder
    slot?: SortOrder
    portNumber?: SortOrder
    status?: SortOrder
    label?: SortOrder
    rx?: SortOrder
    tx?: SortOrder
    vcc?: SortOrder
    brand?: SortOrder
  }

  export type PortSumOrderByAggregateInput = {
    id?: SortOrder
    oltId?: SortOrder
    slot?: SortOrder
    portNumber?: SortOrder
    rx?: SortOrder
    tx?: SortOrder
    vcc?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MappingListRelationFilter = {
    every?: MappingWhereInput
    some?: MappingWhereInput
    none?: MappingWhereInput
  }

  export type MappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EdfaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EdfaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EdfaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EdfaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EdfaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DivisorListRelationFilter = {
    every?: DivisorWhereInput
    some?: DivisorWhereInput
    none?: DivisorWhereInput
  }

  export type DivisorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChasisCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ChasisAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChasisMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ChasisMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ChasisSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChasisScalarRelationFilter = {
    is?: ChasisWhereInput
    isNot?: ChasisWhereInput
  }

  export type DivisorCountOrderByAggregateInput = {
    id?: SortOrder
    chasisId?: SortOrder
    slot?: SortOrder
    type?: SortOrder
  }

  export type DivisorAvgOrderByAggregateInput = {
    id?: SortOrder
    chasisId?: SortOrder
    slot?: SortOrder
  }

  export type DivisorMaxOrderByAggregateInput = {
    id?: SortOrder
    chasisId?: SortOrder
    slot?: SortOrder
    type?: SortOrder
  }

  export type DivisorMinOrderByAggregateInput = {
    id?: SortOrder
    chasisId?: SortOrder
    slot?: SortOrder
    type?: SortOrder
  }

  export type DivisorSumOrderByAggregateInput = {
    id?: SortOrder
    chasisId?: SortOrder
    slot?: SortOrder
  }

  export type OdfPortListRelationFilter = {
    every?: OdfPortWhereInput
    some?: OdfPortWhereInput
    none?: OdfPortWhereInput
  }

  export type OdfPortOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OdfCountOrderByAggregateInput = {
    id?: SortOrder
    odfNumber?: SortOrder
    name?: SortOrder
    networks?: SortOrder
  }

  export type OdfAvgOrderByAggregateInput = {
    id?: SortOrder
    odfNumber?: SortOrder
  }

  export type OdfMaxOrderByAggregateInput = {
    id?: SortOrder
    odfNumber?: SortOrder
    name?: SortOrder
    networks?: SortOrder
  }

  export type OdfMinOrderByAggregateInput = {
    id?: SortOrder
    odfNumber?: SortOrder
    name?: SortOrder
    networks?: SortOrder
  }

  export type OdfSumOrderByAggregateInput = {
    id?: SortOrder
    odfNumber?: SortOrder
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

  export type OdfScalarRelationFilter = {
    is?: OdfWhereInput
    isNot?: OdfWhereInput
  }

  export type OdfPortCountOrderByAggregateInput = {
    id?: SortOrder
    odfId?: SortOrder
    number?: SortOrder
    buffer?: SortOrder
    color?: SortOrder
  }

  export type OdfPortAvgOrderByAggregateInput = {
    id?: SortOrder
    odfId?: SortOrder
    number?: SortOrder
    buffer?: SortOrder
  }

  export type OdfPortMaxOrderByAggregateInput = {
    id?: SortOrder
    odfId?: SortOrder
    number?: SortOrder
    buffer?: SortOrder
    color?: SortOrder
  }

  export type OdfPortMinOrderByAggregateInput = {
    id?: SortOrder
    odfId?: SortOrder
    number?: SortOrder
    buffer?: SortOrder
    color?: SortOrder
  }

  export type OdfPortSumOrderByAggregateInput = {
    id?: SortOrder
    odfId?: SortOrder
    number?: SortOrder
    buffer?: SortOrder
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

  export type ChasisNullableScalarRelationFilter = {
    is?: ChasisWhereInput | null
    isNot?: ChasisWhereInput | null
  }

  export type DivisorNullableScalarRelationFilter = {
    is?: DivisorWhereInput | null
    isNot?: DivisorWhereInput | null
  }

  export type EdfaNullableScalarRelationFilter = {
    is?: EdfaWhereInput | null
    isNot?: EdfaWhereInput | null
  }

  export type OdfNullableScalarRelationFilter = {
    is?: OdfWhereInput | null
    isNot?: OdfWhereInput | null
  }

  export type OdfPortNullableScalarRelationFilter = {
    is?: OdfPortWhereInput | null
    isNot?: OdfPortWhereInput | null
  }

  export type PortScalarRelationFilter = {
    is?: PortWhereInput
    isNot?: PortWhereInput
  }

  export type MappingCountOrderByAggregateInput = {
    id?: SortOrder
    portId?: SortOrder
    edfaId?: SortOrder
    chasisId?: SortOrder
    divisorId?: SortOrder
    odfId?: SortOrder
    odfPortId?: SortOrder
    edfaPort?: SortOrder
    createdAt?: SortOrder
  }

  export type MappingAvgOrderByAggregateInput = {
    id?: SortOrder
    portId?: SortOrder
    edfaId?: SortOrder
    chasisId?: SortOrder
    divisorId?: SortOrder
    odfId?: SortOrder
    odfPortId?: SortOrder
    edfaPort?: SortOrder
  }

  export type MappingMaxOrderByAggregateInput = {
    id?: SortOrder
    portId?: SortOrder
    edfaId?: SortOrder
    chasisId?: SortOrder
    divisorId?: SortOrder
    odfId?: SortOrder
    odfPortId?: SortOrder
    edfaPort?: SortOrder
    createdAt?: SortOrder
  }

  export type MappingMinOrderByAggregateInput = {
    id?: SortOrder
    portId?: SortOrder
    edfaId?: SortOrder
    chasisId?: SortOrder
    divisorId?: SortOrder
    odfId?: SortOrder
    odfPortId?: SortOrder
    edfaPort?: SortOrder
    createdAt?: SortOrder
  }

  export type MappingSumOrderByAggregateInput = {
    id?: SortOrder
    portId?: SortOrder
    edfaId?: SortOrder
    chasisId?: SortOrder
    divisorId?: SortOrder
    odfId?: SortOrder
    odfPortId?: SortOrder
    edfaPort?: SortOrder
  }

  export type PortCreateNestedManyWithoutOltInput = {
    create?: XOR<PortCreateWithoutOltInput, PortUncheckedCreateWithoutOltInput> | PortCreateWithoutOltInput[] | PortUncheckedCreateWithoutOltInput[]
    connectOrCreate?: PortCreateOrConnectWithoutOltInput | PortCreateOrConnectWithoutOltInput[]
    createMany?: PortCreateManyOltInputEnvelope
    connect?: PortWhereUniqueInput | PortWhereUniqueInput[]
  }

  export type PortUncheckedCreateNestedManyWithoutOltInput = {
    create?: XOR<PortCreateWithoutOltInput, PortUncheckedCreateWithoutOltInput> | PortCreateWithoutOltInput[] | PortUncheckedCreateWithoutOltInput[]
    connectOrCreate?: PortCreateOrConnectWithoutOltInput | PortCreateOrConnectWithoutOltInput[]
    createMany?: PortCreateManyOltInputEnvelope
    connect?: PortWhereUniqueInput | PortWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PortUpdateManyWithoutOltNestedInput = {
    create?: XOR<PortCreateWithoutOltInput, PortUncheckedCreateWithoutOltInput> | PortCreateWithoutOltInput[] | PortUncheckedCreateWithoutOltInput[]
    connectOrCreate?: PortCreateOrConnectWithoutOltInput | PortCreateOrConnectWithoutOltInput[]
    upsert?: PortUpsertWithWhereUniqueWithoutOltInput | PortUpsertWithWhereUniqueWithoutOltInput[]
    createMany?: PortCreateManyOltInputEnvelope
    set?: PortWhereUniqueInput | PortWhereUniqueInput[]
    disconnect?: PortWhereUniqueInput | PortWhereUniqueInput[]
    delete?: PortWhereUniqueInput | PortWhereUniqueInput[]
    connect?: PortWhereUniqueInput | PortWhereUniqueInput[]
    update?: PortUpdateWithWhereUniqueWithoutOltInput | PortUpdateWithWhereUniqueWithoutOltInput[]
    updateMany?: PortUpdateManyWithWhereWithoutOltInput | PortUpdateManyWithWhereWithoutOltInput[]
    deleteMany?: PortScalarWhereInput | PortScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PortUncheckedUpdateManyWithoutOltNestedInput = {
    create?: XOR<PortCreateWithoutOltInput, PortUncheckedCreateWithoutOltInput> | PortCreateWithoutOltInput[] | PortUncheckedCreateWithoutOltInput[]
    connectOrCreate?: PortCreateOrConnectWithoutOltInput | PortCreateOrConnectWithoutOltInput[]
    upsert?: PortUpsertWithWhereUniqueWithoutOltInput | PortUpsertWithWhereUniqueWithoutOltInput[]
    createMany?: PortCreateManyOltInputEnvelope
    set?: PortWhereUniqueInput | PortWhereUniqueInput[]
    disconnect?: PortWhereUniqueInput | PortWhereUniqueInput[]
    delete?: PortWhereUniqueInput | PortWhereUniqueInput[]
    connect?: PortWhereUniqueInput | PortWhereUniqueInput[]
    update?: PortUpdateWithWhereUniqueWithoutOltInput | PortUpdateWithWhereUniqueWithoutOltInput[]
    updateMany?: PortUpdateManyWithWhereWithoutOltInput | PortUpdateManyWithWhereWithoutOltInput[]
    deleteMany?: PortScalarWhereInput | PortScalarWhereInput[]
  }

  export type MappingCreateNestedOneWithoutPortInput = {
    create?: XOR<MappingCreateWithoutPortInput, MappingUncheckedCreateWithoutPortInput>
    connectOrCreate?: MappingCreateOrConnectWithoutPortInput
    connect?: MappingWhereUniqueInput
  }

  export type OltCreateNestedOneWithoutPortsInput = {
    create?: XOR<OltCreateWithoutPortsInput, OltUncheckedCreateWithoutPortsInput>
    connectOrCreate?: OltCreateOrConnectWithoutPortsInput
    connect?: OltWhereUniqueInput
  }

  export type MappingUncheckedCreateNestedOneWithoutPortInput = {
    create?: XOR<MappingCreateWithoutPortInput, MappingUncheckedCreateWithoutPortInput>
    connectOrCreate?: MappingCreateOrConnectWithoutPortInput
    connect?: MappingWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MappingUpdateOneWithoutPortNestedInput = {
    create?: XOR<MappingCreateWithoutPortInput, MappingUncheckedCreateWithoutPortInput>
    connectOrCreate?: MappingCreateOrConnectWithoutPortInput
    upsert?: MappingUpsertWithoutPortInput
    disconnect?: MappingWhereInput | boolean
    delete?: MappingWhereInput | boolean
    connect?: MappingWhereUniqueInput
    update?: XOR<XOR<MappingUpdateToOneWithWhereWithoutPortInput, MappingUpdateWithoutPortInput>, MappingUncheckedUpdateWithoutPortInput>
  }

  export type OltUpdateOneRequiredWithoutPortsNestedInput = {
    create?: XOR<OltCreateWithoutPortsInput, OltUncheckedCreateWithoutPortsInput>
    connectOrCreate?: OltCreateOrConnectWithoutPortsInput
    upsert?: OltUpsertWithoutPortsInput
    connect?: OltWhereUniqueInput
    update?: XOR<XOR<OltUpdateToOneWithWhereWithoutPortsInput, OltUpdateWithoutPortsInput>, OltUncheckedUpdateWithoutPortsInput>
  }

  export type MappingUncheckedUpdateOneWithoutPortNestedInput = {
    create?: XOR<MappingCreateWithoutPortInput, MappingUncheckedCreateWithoutPortInput>
    connectOrCreate?: MappingCreateOrConnectWithoutPortInput
    upsert?: MappingUpsertWithoutPortInput
    disconnect?: MappingWhereInput | boolean
    delete?: MappingWhereInput | boolean
    connect?: MappingWhereUniqueInput
    update?: XOR<XOR<MappingUpdateToOneWithWhereWithoutPortInput, MappingUpdateWithoutPortInput>, MappingUncheckedUpdateWithoutPortInput>
  }

  export type MappingCreateNestedManyWithoutEdfaInput = {
    create?: XOR<MappingCreateWithoutEdfaInput, MappingUncheckedCreateWithoutEdfaInput> | MappingCreateWithoutEdfaInput[] | MappingUncheckedCreateWithoutEdfaInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutEdfaInput | MappingCreateOrConnectWithoutEdfaInput[]
    createMany?: MappingCreateManyEdfaInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type MappingUncheckedCreateNestedManyWithoutEdfaInput = {
    create?: XOR<MappingCreateWithoutEdfaInput, MappingUncheckedCreateWithoutEdfaInput> | MappingCreateWithoutEdfaInput[] | MappingUncheckedCreateWithoutEdfaInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutEdfaInput | MappingCreateOrConnectWithoutEdfaInput[]
    createMany?: MappingCreateManyEdfaInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type MappingUpdateManyWithoutEdfaNestedInput = {
    create?: XOR<MappingCreateWithoutEdfaInput, MappingUncheckedCreateWithoutEdfaInput> | MappingCreateWithoutEdfaInput[] | MappingUncheckedCreateWithoutEdfaInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutEdfaInput | MappingCreateOrConnectWithoutEdfaInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutEdfaInput | MappingUpsertWithWhereUniqueWithoutEdfaInput[]
    createMany?: MappingCreateManyEdfaInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutEdfaInput | MappingUpdateWithWhereUniqueWithoutEdfaInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutEdfaInput | MappingUpdateManyWithWhereWithoutEdfaInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type MappingUncheckedUpdateManyWithoutEdfaNestedInput = {
    create?: XOR<MappingCreateWithoutEdfaInput, MappingUncheckedCreateWithoutEdfaInput> | MappingCreateWithoutEdfaInput[] | MappingUncheckedCreateWithoutEdfaInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutEdfaInput | MappingCreateOrConnectWithoutEdfaInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutEdfaInput | MappingUpsertWithWhereUniqueWithoutEdfaInput[]
    createMany?: MappingCreateManyEdfaInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutEdfaInput | MappingUpdateWithWhereUniqueWithoutEdfaInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutEdfaInput | MappingUpdateManyWithWhereWithoutEdfaInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type DivisorCreateNestedManyWithoutChasisInput = {
    create?: XOR<DivisorCreateWithoutChasisInput, DivisorUncheckedCreateWithoutChasisInput> | DivisorCreateWithoutChasisInput[] | DivisorUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: DivisorCreateOrConnectWithoutChasisInput | DivisorCreateOrConnectWithoutChasisInput[]
    createMany?: DivisorCreateManyChasisInputEnvelope
    connect?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
  }

  export type MappingCreateNestedManyWithoutChasisInput = {
    create?: XOR<MappingCreateWithoutChasisInput, MappingUncheckedCreateWithoutChasisInput> | MappingCreateWithoutChasisInput[] | MappingUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutChasisInput | MappingCreateOrConnectWithoutChasisInput[]
    createMany?: MappingCreateManyChasisInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type DivisorUncheckedCreateNestedManyWithoutChasisInput = {
    create?: XOR<DivisorCreateWithoutChasisInput, DivisorUncheckedCreateWithoutChasisInput> | DivisorCreateWithoutChasisInput[] | DivisorUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: DivisorCreateOrConnectWithoutChasisInput | DivisorCreateOrConnectWithoutChasisInput[]
    createMany?: DivisorCreateManyChasisInputEnvelope
    connect?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
  }

  export type MappingUncheckedCreateNestedManyWithoutChasisInput = {
    create?: XOR<MappingCreateWithoutChasisInput, MappingUncheckedCreateWithoutChasisInput> | MappingCreateWithoutChasisInput[] | MappingUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutChasisInput | MappingCreateOrConnectWithoutChasisInput[]
    createMany?: MappingCreateManyChasisInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type DivisorUpdateManyWithoutChasisNestedInput = {
    create?: XOR<DivisorCreateWithoutChasisInput, DivisorUncheckedCreateWithoutChasisInput> | DivisorCreateWithoutChasisInput[] | DivisorUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: DivisorCreateOrConnectWithoutChasisInput | DivisorCreateOrConnectWithoutChasisInput[]
    upsert?: DivisorUpsertWithWhereUniqueWithoutChasisInput | DivisorUpsertWithWhereUniqueWithoutChasisInput[]
    createMany?: DivisorCreateManyChasisInputEnvelope
    set?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    disconnect?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    delete?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    connect?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    update?: DivisorUpdateWithWhereUniqueWithoutChasisInput | DivisorUpdateWithWhereUniqueWithoutChasisInput[]
    updateMany?: DivisorUpdateManyWithWhereWithoutChasisInput | DivisorUpdateManyWithWhereWithoutChasisInput[]
    deleteMany?: DivisorScalarWhereInput | DivisorScalarWhereInput[]
  }

  export type MappingUpdateManyWithoutChasisNestedInput = {
    create?: XOR<MappingCreateWithoutChasisInput, MappingUncheckedCreateWithoutChasisInput> | MappingCreateWithoutChasisInput[] | MappingUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutChasisInput | MappingCreateOrConnectWithoutChasisInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutChasisInput | MappingUpsertWithWhereUniqueWithoutChasisInput[]
    createMany?: MappingCreateManyChasisInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutChasisInput | MappingUpdateWithWhereUniqueWithoutChasisInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutChasisInput | MappingUpdateManyWithWhereWithoutChasisInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type DivisorUncheckedUpdateManyWithoutChasisNestedInput = {
    create?: XOR<DivisorCreateWithoutChasisInput, DivisorUncheckedCreateWithoutChasisInput> | DivisorCreateWithoutChasisInput[] | DivisorUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: DivisorCreateOrConnectWithoutChasisInput | DivisorCreateOrConnectWithoutChasisInput[]
    upsert?: DivisorUpsertWithWhereUniqueWithoutChasisInput | DivisorUpsertWithWhereUniqueWithoutChasisInput[]
    createMany?: DivisorCreateManyChasisInputEnvelope
    set?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    disconnect?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    delete?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    connect?: DivisorWhereUniqueInput | DivisorWhereUniqueInput[]
    update?: DivisorUpdateWithWhereUniqueWithoutChasisInput | DivisorUpdateWithWhereUniqueWithoutChasisInput[]
    updateMany?: DivisorUpdateManyWithWhereWithoutChasisInput | DivisorUpdateManyWithWhereWithoutChasisInput[]
    deleteMany?: DivisorScalarWhereInput | DivisorScalarWhereInput[]
  }

  export type MappingUncheckedUpdateManyWithoutChasisNestedInput = {
    create?: XOR<MappingCreateWithoutChasisInput, MappingUncheckedCreateWithoutChasisInput> | MappingCreateWithoutChasisInput[] | MappingUncheckedCreateWithoutChasisInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutChasisInput | MappingCreateOrConnectWithoutChasisInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutChasisInput | MappingUpsertWithWhereUniqueWithoutChasisInput[]
    createMany?: MappingCreateManyChasisInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutChasisInput | MappingUpdateWithWhereUniqueWithoutChasisInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutChasisInput | MappingUpdateManyWithWhereWithoutChasisInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type ChasisCreateNestedOneWithoutDivisorsInput = {
    create?: XOR<ChasisCreateWithoutDivisorsInput, ChasisUncheckedCreateWithoutDivisorsInput>
    connectOrCreate?: ChasisCreateOrConnectWithoutDivisorsInput
    connect?: ChasisWhereUniqueInput
  }

  export type MappingCreateNestedManyWithoutDivisorInput = {
    create?: XOR<MappingCreateWithoutDivisorInput, MappingUncheckedCreateWithoutDivisorInput> | MappingCreateWithoutDivisorInput[] | MappingUncheckedCreateWithoutDivisorInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutDivisorInput | MappingCreateOrConnectWithoutDivisorInput[]
    createMany?: MappingCreateManyDivisorInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type MappingUncheckedCreateNestedManyWithoutDivisorInput = {
    create?: XOR<MappingCreateWithoutDivisorInput, MappingUncheckedCreateWithoutDivisorInput> | MappingCreateWithoutDivisorInput[] | MappingUncheckedCreateWithoutDivisorInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutDivisorInput | MappingCreateOrConnectWithoutDivisorInput[]
    createMany?: MappingCreateManyDivisorInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type ChasisUpdateOneRequiredWithoutDivisorsNestedInput = {
    create?: XOR<ChasisCreateWithoutDivisorsInput, ChasisUncheckedCreateWithoutDivisorsInput>
    connectOrCreate?: ChasisCreateOrConnectWithoutDivisorsInput
    upsert?: ChasisUpsertWithoutDivisorsInput
    connect?: ChasisWhereUniqueInput
    update?: XOR<XOR<ChasisUpdateToOneWithWhereWithoutDivisorsInput, ChasisUpdateWithoutDivisorsInput>, ChasisUncheckedUpdateWithoutDivisorsInput>
  }

  export type MappingUpdateManyWithoutDivisorNestedInput = {
    create?: XOR<MappingCreateWithoutDivisorInput, MappingUncheckedCreateWithoutDivisorInput> | MappingCreateWithoutDivisorInput[] | MappingUncheckedCreateWithoutDivisorInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutDivisorInput | MappingCreateOrConnectWithoutDivisorInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutDivisorInput | MappingUpsertWithWhereUniqueWithoutDivisorInput[]
    createMany?: MappingCreateManyDivisorInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutDivisorInput | MappingUpdateWithWhereUniqueWithoutDivisorInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutDivisorInput | MappingUpdateManyWithWhereWithoutDivisorInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type MappingUncheckedUpdateManyWithoutDivisorNestedInput = {
    create?: XOR<MappingCreateWithoutDivisorInput, MappingUncheckedCreateWithoutDivisorInput> | MappingCreateWithoutDivisorInput[] | MappingUncheckedCreateWithoutDivisorInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutDivisorInput | MappingCreateOrConnectWithoutDivisorInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutDivisorInput | MappingUpsertWithWhereUniqueWithoutDivisorInput[]
    createMany?: MappingCreateManyDivisorInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutDivisorInput | MappingUpdateWithWhereUniqueWithoutDivisorInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutDivisorInput | MappingUpdateManyWithWhereWithoutDivisorInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type MappingCreateNestedManyWithoutOdfInput = {
    create?: XOR<MappingCreateWithoutOdfInput, MappingUncheckedCreateWithoutOdfInput> | MappingCreateWithoutOdfInput[] | MappingUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfInput | MappingCreateOrConnectWithoutOdfInput[]
    createMany?: MappingCreateManyOdfInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type OdfPortCreateNestedManyWithoutOdfInput = {
    create?: XOR<OdfPortCreateWithoutOdfInput, OdfPortUncheckedCreateWithoutOdfInput> | OdfPortCreateWithoutOdfInput[] | OdfPortUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: OdfPortCreateOrConnectWithoutOdfInput | OdfPortCreateOrConnectWithoutOdfInput[]
    createMany?: OdfPortCreateManyOdfInputEnvelope
    connect?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
  }

  export type MappingUncheckedCreateNestedManyWithoutOdfInput = {
    create?: XOR<MappingCreateWithoutOdfInput, MappingUncheckedCreateWithoutOdfInput> | MappingCreateWithoutOdfInput[] | MappingUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfInput | MappingCreateOrConnectWithoutOdfInput[]
    createMany?: MappingCreateManyOdfInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type OdfPortUncheckedCreateNestedManyWithoutOdfInput = {
    create?: XOR<OdfPortCreateWithoutOdfInput, OdfPortUncheckedCreateWithoutOdfInput> | OdfPortCreateWithoutOdfInput[] | OdfPortUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: OdfPortCreateOrConnectWithoutOdfInput | OdfPortCreateOrConnectWithoutOdfInput[]
    createMany?: OdfPortCreateManyOdfInputEnvelope
    connect?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
  }

  export type MappingUpdateManyWithoutOdfNestedInput = {
    create?: XOR<MappingCreateWithoutOdfInput, MappingUncheckedCreateWithoutOdfInput> | MappingCreateWithoutOdfInput[] | MappingUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfInput | MappingCreateOrConnectWithoutOdfInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutOdfInput | MappingUpsertWithWhereUniqueWithoutOdfInput[]
    createMany?: MappingCreateManyOdfInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutOdfInput | MappingUpdateWithWhereUniqueWithoutOdfInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutOdfInput | MappingUpdateManyWithWhereWithoutOdfInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type OdfPortUpdateManyWithoutOdfNestedInput = {
    create?: XOR<OdfPortCreateWithoutOdfInput, OdfPortUncheckedCreateWithoutOdfInput> | OdfPortCreateWithoutOdfInput[] | OdfPortUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: OdfPortCreateOrConnectWithoutOdfInput | OdfPortCreateOrConnectWithoutOdfInput[]
    upsert?: OdfPortUpsertWithWhereUniqueWithoutOdfInput | OdfPortUpsertWithWhereUniqueWithoutOdfInput[]
    createMany?: OdfPortCreateManyOdfInputEnvelope
    set?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    disconnect?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    delete?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    connect?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    update?: OdfPortUpdateWithWhereUniqueWithoutOdfInput | OdfPortUpdateWithWhereUniqueWithoutOdfInput[]
    updateMany?: OdfPortUpdateManyWithWhereWithoutOdfInput | OdfPortUpdateManyWithWhereWithoutOdfInput[]
    deleteMany?: OdfPortScalarWhereInput | OdfPortScalarWhereInput[]
  }

  export type MappingUncheckedUpdateManyWithoutOdfNestedInput = {
    create?: XOR<MappingCreateWithoutOdfInput, MappingUncheckedCreateWithoutOdfInput> | MappingCreateWithoutOdfInput[] | MappingUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfInput | MappingCreateOrConnectWithoutOdfInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutOdfInput | MappingUpsertWithWhereUniqueWithoutOdfInput[]
    createMany?: MappingCreateManyOdfInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutOdfInput | MappingUpdateWithWhereUniqueWithoutOdfInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutOdfInput | MappingUpdateManyWithWhereWithoutOdfInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type OdfPortUncheckedUpdateManyWithoutOdfNestedInput = {
    create?: XOR<OdfPortCreateWithoutOdfInput, OdfPortUncheckedCreateWithoutOdfInput> | OdfPortCreateWithoutOdfInput[] | OdfPortUncheckedCreateWithoutOdfInput[]
    connectOrCreate?: OdfPortCreateOrConnectWithoutOdfInput | OdfPortCreateOrConnectWithoutOdfInput[]
    upsert?: OdfPortUpsertWithWhereUniqueWithoutOdfInput | OdfPortUpsertWithWhereUniqueWithoutOdfInput[]
    createMany?: OdfPortCreateManyOdfInputEnvelope
    set?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    disconnect?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    delete?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    connect?: OdfPortWhereUniqueInput | OdfPortWhereUniqueInput[]
    update?: OdfPortUpdateWithWhereUniqueWithoutOdfInput | OdfPortUpdateWithWhereUniqueWithoutOdfInput[]
    updateMany?: OdfPortUpdateManyWithWhereWithoutOdfInput | OdfPortUpdateManyWithWhereWithoutOdfInput[]
    deleteMany?: OdfPortScalarWhereInput | OdfPortScalarWhereInput[]
  }

  export type MappingCreateNestedManyWithoutOdfPortInput = {
    create?: XOR<MappingCreateWithoutOdfPortInput, MappingUncheckedCreateWithoutOdfPortInput> | MappingCreateWithoutOdfPortInput[] | MappingUncheckedCreateWithoutOdfPortInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfPortInput | MappingCreateOrConnectWithoutOdfPortInput[]
    createMany?: MappingCreateManyOdfPortInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type OdfCreateNestedOneWithoutPortsInput = {
    create?: XOR<OdfCreateWithoutPortsInput, OdfUncheckedCreateWithoutPortsInput>
    connectOrCreate?: OdfCreateOrConnectWithoutPortsInput
    connect?: OdfWhereUniqueInput
  }

  export type MappingUncheckedCreateNestedManyWithoutOdfPortInput = {
    create?: XOR<MappingCreateWithoutOdfPortInput, MappingUncheckedCreateWithoutOdfPortInput> | MappingCreateWithoutOdfPortInput[] | MappingUncheckedCreateWithoutOdfPortInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfPortInput | MappingCreateOrConnectWithoutOdfPortInput[]
    createMany?: MappingCreateManyOdfPortInputEnvelope
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MappingUpdateManyWithoutOdfPortNestedInput = {
    create?: XOR<MappingCreateWithoutOdfPortInput, MappingUncheckedCreateWithoutOdfPortInput> | MappingCreateWithoutOdfPortInput[] | MappingUncheckedCreateWithoutOdfPortInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfPortInput | MappingCreateOrConnectWithoutOdfPortInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutOdfPortInput | MappingUpsertWithWhereUniqueWithoutOdfPortInput[]
    createMany?: MappingCreateManyOdfPortInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutOdfPortInput | MappingUpdateWithWhereUniqueWithoutOdfPortInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutOdfPortInput | MappingUpdateManyWithWhereWithoutOdfPortInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type OdfUpdateOneRequiredWithoutPortsNestedInput = {
    create?: XOR<OdfCreateWithoutPortsInput, OdfUncheckedCreateWithoutPortsInput>
    connectOrCreate?: OdfCreateOrConnectWithoutPortsInput
    upsert?: OdfUpsertWithoutPortsInput
    connect?: OdfWhereUniqueInput
    update?: XOR<XOR<OdfUpdateToOneWithWhereWithoutPortsInput, OdfUpdateWithoutPortsInput>, OdfUncheckedUpdateWithoutPortsInput>
  }

  export type MappingUncheckedUpdateManyWithoutOdfPortNestedInput = {
    create?: XOR<MappingCreateWithoutOdfPortInput, MappingUncheckedCreateWithoutOdfPortInput> | MappingCreateWithoutOdfPortInput[] | MappingUncheckedCreateWithoutOdfPortInput[]
    connectOrCreate?: MappingCreateOrConnectWithoutOdfPortInput | MappingCreateOrConnectWithoutOdfPortInput[]
    upsert?: MappingUpsertWithWhereUniqueWithoutOdfPortInput | MappingUpsertWithWhereUniqueWithoutOdfPortInput[]
    createMany?: MappingCreateManyOdfPortInputEnvelope
    set?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    disconnect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    delete?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    connect?: MappingWhereUniqueInput | MappingWhereUniqueInput[]
    update?: MappingUpdateWithWhereUniqueWithoutOdfPortInput | MappingUpdateWithWhereUniqueWithoutOdfPortInput[]
    updateMany?: MappingUpdateManyWithWhereWithoutOdfPortInput | MappingUpdateManyWithWhereWithoutOdfPortInput[]
    deleteMany?: MappingScalarWhereInput | MappingScalarWhereInput[]
  }

  export type ChasisCreateNestedOneWithoutMappingsInput = {
    create?: XOR<ChasisCreateWithoutMappingsInput, ChasisUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: ChasisCreateOrConnectWithoutMappingsInput
    connect?: ChasisWhereUniqueInput
  }

  export type DivisorCreateNestedOneWithoutMappingsInput = {
    create?: XOR<DivisorCreateWithoutMappingsInput, DivisorUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: DivisorCreateOrConnectWithoutMappingsInput
    connect?: DivisorWhereUniqueInput
  }

  export type EdfaCreateNestedOneWithoutMappingsInput = {
    create?: XOR<EdfaCreateWithoutMappingsInput, EdfaUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: EdfaCreateOrConnectWithoutMappingsInput
    connect?: EdfaWhereUniqueInput
  }

  export type OdfCreateNestedOneWithoutMappingsInput = {
    create?: XOR<OdfCreateWithoutMappingsInput, OdfUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: OdfCreateOrConnectWithoutMappingsInput
    connect?: OdfWhereUniqueInput
  }

  export type OdfPortCreateNestedOneWithoutMappingsInput = {
    create?: XOR<OdfPortCreateWithoutMappingsInput, OdfPortUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: OdfPortCreateOrConnectWithoutMappingsInput
    connect?: OdfPortWhereUniqueInput
  }

  export type PortCreateNestedOneWithoutMappingInput = {
    create?: XOR<PortCreateWithoutMappingInput, PortUncheckedCreateWithoutMappingInput>
    connectOrCreate?: PortCreateOrConnectWithoutMappingInput
    connect?: PortWhereUniqueInput
  }

  export type ChasisUpdateOneWithoutMappingsNestedInput = {
    create?: XOR<ChasisCreateWithoutMappingsInput, ChasisUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: ChasisCreateOrConnectWithoutMappingsInput
    upsert?: ChasisUpsertWithoutMappingsInput
    disconnect?: ChasisWhereInput | boolean
    delete?: ChasisWhereInput | boolean
    connect?: ChasisWhereUniqueInput
    update?: XOR<XOR<ChasisUpdateToOneWithWhereWithoutMappingsInput, ChasisUpdateWithoutMappingsInput>, ChasisUncheckedUpdateWithoutMappingsInput>
  }

  export type DivisorUpdateOneWithoutMappingsNestedInput = {
    create?: XOR<DivisorCreateWithoutMappingsInput, DivisorUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: DivisorCreateOrConnectWithoutMappingsInput
    upsert?: DivisorUpsertWithoutMappingsInput
    disconnect?: DivisorWhereInput | boolean
    delete?: DivisorWhereInput | boolean
    connect?: DivisorWhereUniqueInput
    update?: XOR<XOR<DivisorUpdateToOneWithWhereWithoutMappingsInput, DivisorUpdateWithoutMappingsInput>, DivisorUncheckedUpdateWithoutMappingsInput>
  }

  export type EdfaUpdateOneWithoutMappingsNestedInput = {
    create?: XOR<EdfaCreateWithoutMappingsInput, EdfaUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: EdfaCreateOrConnectWithoutMappingsInput
    upsert?: EdfaUpsertWithoutMappingsInput
    disconnect?: EdfaWhereInput | boolean
    delete?: EdfaWhereInput | boolean
    connect?: EdfaWhereUniqueInput
    update?: XOR<XOR<EdfaUpdateToOneWithWhereWithoutMappingsInput, EdfaUpdateWithoutMappingsInput>, EdfaUncheckedUpdateWithoutMappingsInput>
  }

  export type OdfUpdateOneWithoutMappingsNestedInput = {
    create?: XOR<OdfCreateWithoutMappingsInput, OdfUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: OdfCreateOrConnectWithoutMappingsInput
    upsert?: OdfUpsertWithoutMappingsInput
    disconnect?: OdfWhereInput | boolean
    delete?: OdfWhereInput | boolean
    connect?: OdfWhereUniqueInput
    update?: XOR<XOR<OdfUpdateToOneWithWhereWithoutMappingsInput, OdfUpdateWithoutMappingsInput>, OdfUncheckedUpdateWithoutMappingsInput>
  }

  export type OdfPortUpdateOneWithoutMappingsNestedInput = {
    create?: XOR<OdfPortCreateWithoutMappingsInput, OdfPortUncheckedCreateWithoutMappingsInput>
    connectOrCreate?: OdfPortCreateOrConnectWithoutMappingsInput
    upsert?: OdfPortUpsertWithoutMappingsInput
    disconnect?: OdfPortWhereInput | boolean
    delete?: OdfPortWhereInput | boolean
    connect?: OdfPortWhereUniqueInput
    update?: XOR<XOR<OdfPortUpdateToOneWithWhereWithoutMappingsInput, OdfPortUpdateWithoutMappingsInput>, OdfPortUncheckedUpdateWithoutMappingsInput>
  }

  export type PortUpdateOneRequiredWithoutMappingNestedInput = {
    create?: XOR<PortCreateWithoutMappingInput, PortUncheckedCreateWithoutMappingInput>
    connectOrCreate?: PortCreateOrConnectWithoutMappingInput
    upsert?: PortUpsertWithoutMappingInput
    connect?: PortWhereUniqueInput
    update?: XOR<XOR<PortUpdateToOneWithWhereWithoutMappingInput, PortUpdateWithoutMappingInput>, PortUncheckedUpdateWithoutMappingInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type PortCreateWithoutOltInput = {
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
    mapping?: MappingCreateNestedOneWithoutPortInput
  }

  export type PortUncheckedCreateWithoutOltInput = {
    id?: number
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
    mapping?: MappingUncheckedCreateNestedOneWithoutPortInput
  }

  export type PortCreateOrConnectWithoutOltInput = {
    where: PortWhereUniqueInput
    create: XOR<PortCreateWithoutOltInput, PortUncheckedCreateWithoutOltInput>
  }

  export type PortCreateManyOltInputEnvelope = {
    data: PortCreateManyOltInput | PortCreateManyOltInput[]
    skipDuplicates?: boolean
  }

  export type PortUpsertWithWhereUniqueWithoutOltInput = {
    where: PortWhereUniqueInput
    update: XOR<PortUpdateWithoutOltInput, PortUncheckedUpdateWithoutOltInput>
    create: XOR<PortCreateWithoutOltInput, PortUncheckedCreateWithoutOltInput>
  }

  export type PortUpdateWithWhereUniqueWithoutOltInput = {
    where: PortWhereUniqueInput
    data: XOR<PortUpdateWithoutOltInput, PortUncheckedUpdateWithoutOltInput>
  }

  export type PortUpdateManyWithWhereWithoutOltInput = {
    where: PortScalarWhereInput
    data: XOR<PortUpdateManyMutationInput, PortUncheckedUpdateManyWithoutOltInput>
  }

  export type PortScalarWhereInput = {
    AND?: PortScalarWhereInput | PortScalarWhereInput[]
    OR?: PortScalarWhereInput[]
    NOT?: PortScalarWhereInput | PortScalarWhereInput[]
    id?: IntFilter<"Port"> | number
    oltId?: IntFilter<"Port"> | number
    slot?: IntFilter<"Port"> | number
    portNumber?: IntFilter<"Port"> | number
    status?: StringFilter<"Port"> | string
    label?: StringNullableFilter<"Port"> | string | null
    rx?: FloatNullableFilter<"Port"> | number | null
    tx?: FloatNullableFilter<"Port"> | number | null
    vcc?: FloatNullableFilter<"Port"> | number | null
    brand?: StringNullableFilter<"Port"> | string | null
  }

  export type MappingCreateWithoutPortInput = {
    edfaPort?: number | null
    createdAt?: Date | string
    chasis?: ChasisCreateNestedOneWithoutMappingsInput
    divisor?: DivisorCreateNestedOneWithoutMappingsInput
    edfa?: EdfaCreateNestedOneWithoutMappingsInput
    odf?: OdfCreateNestedOneWithoutMappingsInput
    odfPort?: OdfPortCreateNestedOneWithoutMappingsInput
  }

  export type MappingUncheckedCreateWithoutPortInput = {
    id?: number
    edfaId?: number | null
    chasisId?: number | null
    divisorId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingCreateOrConnectWithoutPortInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutPortInput, MappingUncheckedCreateWithoutPortInput>
  }

  export type OltCreateWithoutPortsInput = {
    name: string
    ip: string
    createdAt?: Date | string
  }

  export type OltUncheckedCreateWithoutPortsInput = {
    id?: number
    name: string
    ip: string
    createdAt?: Date | string
  }

  export type OltCreateOrConnectWithoutPortsInput = {
    where: OltWhereUniqueInput
    create: XOR<OltCreateWithoutPortsInput, OltUncheckedCreateWithoutPortsInput>
  }

  export type MappingUpsertWithoutPortInput = {
    update: XOR<MappingUpdateWithoutPortInput, MappingUncheckedUpdateWithoutPortInput>
    create: XOR<MappingCreateWithoutPortInput, MappingUncheckedCreateWithoutPortInput>
    where?: MappingWhereInput
  }

  export type MappingUpdateToOneWithWhereWithoutPortInput = {
    where?: MappingWhereInput
    data: XOR<MappingUpdateWithoutPortInput, MappingUncheckedUpdateWithoutPortInput>
  }

  export type MappingUpdateWithoutPortInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chasis?: ChasisUpdateOneWithoutMappingsNestedInput
    divisor?: DivisorUpdateOneWithoutMappingsNestedInput
    edfa?: EdfaUpdateOneWithoutMappingsNestedInput
    odf?: OdfUpdateOneWithoutMappingsNestedInput
    odfPort?: OdfPortUpdateOneWithoutMappingsNestedInput
  }

  export type MappingUncheckedUpdateWithoutPortInput = {
    id?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OltUpsertWithoutPortsInput = {
    update: XOR<OltUpdateWithoutPortsInput, OltUncheckedUpdateWithoutPortsInput>
    create: XOR<OltCreateWithoutPortsInput, OltUncheckedCreateWithoutPortsInput>
    where?: OltWhereInput
  }

  export type OltUpdateToOneWithWhereWithoutPortsInput = {
    where?: OltWhereInput
    data: XOR<OltUpdateWithoutPortsInput, OltUncheckedUpdateWithoutPortsInput>
  }

  export type OltUpdateWithoutPortsInput = {
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OltUncheckedUpdateWithoutPortsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingCreateWithoutEdfaInput = {
    edfaPort?: number | null
    createdAt?: Date | string
    chasis?: ChasisCreateNestedOneWithoutMappingsInput
    divisor?: DivisorCreateNestedOneWithoutMappingsInput
    odf?: OdfCreateNestedOneWithoutMappingsInput
    odfPort?: OdfPortCreateNestedOneWithoutMappingsInput
    port: PortCreateNestedOneWithoutMappingInput
  }

  export type MappingUncheckedCreateWithoutEdfaInput = {
    id?: number
    portId: number
    chasisId?: number | null
    divisorId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingCreateOrConnectWithoutEdfaInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutEdfaInput, MappingUncheckedCreateWithoutEdfaInput>
  }

  export type MappingCreateManyEdfaInputEnvelope = {
    data: MappingCreateManyEdfaInput | MappingCreateManyEdfaInput[]
    skipDuplicates?: boolean
  }

  export type MappingUpsertWithWhereUniqueWithoutEdfaInput = {
    where: MappingWhereUniqueInput
    update: XOR<MappingUpdateWithoutEdfaInput, MappingUncheckedUpdateWithoutEdfaInput>
    create: XOR<MappingCreateWithoutEdfaInput, MappingUncheckedCreateWithoutEdfaInput>
  }

  export type MappingUpdateWithWhereUniqueWithoutEdfaInput = {
    where: MappingWhereUniqueInput
    data: XOR<MappingUpdateWithoutEdfaInput, MappingUncheckedUpdateWithoutEdfaInput>
  }

  export type MappingUpdateManyWithWhereWithoutEdfaInput = {
    where: MappingScalarWhereInput
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyWithoutEdfaInput>
  }

  export type MappingScalarWhereInput = {
    AND?: MappingScalarWhereInput | MappingScalarWhereInput[]
    OR?: MappingScalarWhereInput[]
    NOT?: MappingScalarWhereInput | MappingScalarWhereInput[]
    id?: IntFilter<"Mapping"> | number
    portId?: IntFilter<"Mapping"> | number
    edfaId?: IntNullableFilter<"Mapping"> | number | null
    chasisId?: IntNullableFilter<"Mapping"> | number | null
    divisorId?: IntNullableFilter<"Mapping"> | number | null
    odfId?: IntNullableFilter<"Mapping"> | number | null
    odfPortId?: IntNullableFilter<"Mapping"> | number | null
    edfaPort?: IntNullableFilter<"Mapping"> | number | null
    createdAt?: DateTimeFilter<"Mapping"> | Date | string
  }

  export type DivisorCreateWithoutChasisInput = {
    slot: number
    type: string
    mappings?: MappingCreateNestedManyWithoutDivisorInput
  }

  export type DivisorUncheckedCreateWithoutChasisInput = {
    id?: number
    slot: number
    type: string
    mappings?: MappingUncheckedCreateNestedManyWithoutDivisorInput
  }

  export type DivisorCreateOrConnectWithoutChasisInput = {
    where: DivisorWhereUniqueInput
    create: XOR<DivisorCreateWithoutChasisInput, DivisorUncheckedCreateWithoutChasisInput>
  }

  export type DivisorCreateManyChasisInputEnvelope = {
    data: DivisorCreateManyChasisInput | DivisorCreateManyChasisInput[]
    skipDuplicates?: boolean
  }

  export type MappingCreateWithoutChasisInput = {
    edfaPort?: number | null
    createdAt?: Date | string
    divisor?: DivisorCreateNestedOneWithoutMappingsInput
    edfa?: EdfaCreateNestedOneWithoutMappingsInput
    odf?: OdfCreateNestedOneWithoutMappingsInput
    odfPort?: OdfPortCreateNestedOneWithoutMappingsInput
    port: PortCreateNestedOneWithoutMappingInput
  }

  export type MappingUncheckedCreateWithoutChasisInput = {
    id?: number
    portId: number
    edfaId?: number | null
    divisorId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingCreateOrConnectWithoutChasisInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutChasisInput, MappingUncheckedCreateWithoutChasisInput>
  }

  export type MappingCreateManyChasisInputEnvelope = {
    data: MappingCreateManyChasisInput | MappingCreateManyChasisInput[]
    skipDuplicates?: boolean
  }

  export type DivisorUpsertWithWhereUniqueWithoutChasisInput = {
    where: DivisorWhereUniqueInput
    update: XOR<DivisorUpdateWithoutChasisInput, DivisorUncheckedUpdateWithoutChasisInput>
    create: XOR<DivisorCreateWithoutChasisInput, DivisorUncheckedCreateWithoutChasisInput>
  }

  export type DivisorUpdateWithWhereUniqueWithoutChasisInput = {
    where: DivisorWhereUniqueInput
    data: XOR<DivisorUpdateWithoutChasisInput, DivisorUncheckedUpdateWithoutChasisInput>
  }

  export type DivisorUpdateManyWithWhereWithoutChasisInput = {
    where: DivisorScalarWhereInput
    data: XOR<DivisorUpdateManyMutationInput, DivisorUncheckedUpdateManyWithoutChasisInput>
  }

  export type DivisorScalarWhereInput = {
    AND?: DivisorScalarWhereInput | DivisorScalarWhereInput[]
    OR?: DivisorScalarWhereInput[]
    NOT?: DivisorScalarWhereInput | DivisorScalarWhereInput[]
    id?: IntFilter<"Divisor"> | number
    chasisId?: IntFilter<"Divisor"> | number
    slot?: IntFilter<"Divisor"> | number
    type?: StringFilter<"Divisor"> | string
  }

  export type MappingUpsertWithWhereUniqueWithoutChasisInput = {
    where: MappingWhereUniqueInput
    update: XOR<MappingUpdateWithoutChasisInput, MappingUncheckedUpdateWithoutChasisInput>
    create: XOR<MappingCreateWithoutChasisInput, MappingUncheckedCreateWithoutChasisInput>
  }

  export type MappingUpdateWithWhereUniqueWithoutChasisInput = {
    where: MappingWhereUniqueInput
    data: XOR<MappingUpdateWithoutChasisInput, MappingUncheckedUpdateWithoutChasisInput>
  }

  export type MappingUpdateManyWithWhereWithoutChasisInput = {
    where: MappingScalarWhereInput
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyWithoutChasisInput>
  }

  export type ChasisCreateWithoutDivisorsInput = {
    name: string
    mappings?: MappingCreateNestedManyWithoutChasisInput
  }

  export type ChasisUncheckedCreateWithoutDivisorsInput = {
    id?: number
    name: string
    mappings?: MappingUncheckedCreateNestedManyWithoutChasisInput
  }

  export type ChasisCreateOrConnectWithoutDivisorsInput = {
    where: ChasisWhereUniqueInput
    create: XOR<ChasisCreateWithoutDivisorsInput, ChasisUncheckedCreateWithoutDivisorsInput>
  }

  export type MappingCreateWithoutDivisorInput = {
    edfaPort?: number | null
    createdAt?: Date | string
    chasis?: ChasisCreateNestedOneWithoutMappingsInput
    edfa?: EdfaCreateNestedOneWithoutMappingsInput
    odf?: OdfCreateNestedOneWithoutMappingsInput
    odfPort?: OdfPortCreateNestedOneWithoutMappingsInput
    port: PortCreateNestedOneWithoutMappingInput
  }

  export type MappingUncheckedCreateWithoutDivisorInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingCreateOrConnectWithoutDivisorInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutDivisorInput, MappingUncheckedCreateWithoutDivisorInput>
  }

  export type MappingCreateManyDivisorInputEnvelope = {
    data: MappingCreateManyDivisorInput | MappingCreateManyDivisorInput[]
    skipDuplicates?: boolean
  }

  export type ChasisUpsertWithoutDivisorsInput = {
    update: XOR<ChasisUpdateWithoutDivisorsInput, ChasisUncheckedUpdateWithoutDivisorsInput>
    create: XOR<ChasisCreateWithoutDivisorsInput, ChasisUncheckedCreateWithoutDivisorsInput>
    where?: ChasisWhereInput
  }

  export type ChasisUpdateToOneWithWhereWithoutDivisorsInput = {
    where?: ChasisWhereInput
    data: XOR<ChasisUpdateWithoutDivisorsInput, ChasisUncheckedUpdateWithoutDivisorsInput>
  }

  export type ChasisUpdateWithoutDivisorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUpdateManyWithoutChasisNestedInput
  }

  export type ChasisUncheckedUpdateWithoutDivisorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUncheckedUpdateManyWithoutChasisNestedInput
  }

  export type MappingUpsertWithWhereUniqueWithoutDivisorInput = {
    where: MappingWhereUniqueInput
    update: XOR<MappingUpdateWithoutDivisorInput, MappingUncheckedUpdateWithoutDivisorInput>
    create: XOR<MappingCreateWithoutDivisorInput, MappingUncheckedCreateWithoutDivisorInput>
  }

  export type MappingUpdateWithWhereUniqueWithoutDivisorInput = {
    where: MappingWhereUniqueInput
    data: XOR<MappingUpdateWithoutDivisorInput, MappingUncheckedUpdateWithoutDivisorInput>
  }

  export type MappingUpdateManyWithWhereWithoutDivisorInput = {
    where: MappingScalarWhereInput
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyWithoutDivisorInput>
  }

  export type MappingCreateWithoutOdfInput = {
    edfaPort?: number | null
    createdAt?: Date | string
    chasis?: ChasisCreateNestedOneWithoutMappingsInput
    divisor?: DivisorCreateNestedOneWithoutMappingsInput
    edfa?: EdfaCreateNestedOneWithoutMappingsInput
    odfPort?: OdfPortCreateNestedOneWithoutMappingsInput
    port: PortCreateNestedOneWithoutMappingInput
  }

  export type MappingUncheckedCreateWithoutOdfInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    divisorId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingCreateOrConnectWithoutOdfInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutOdfInput, MappingUncheckedCreateWithoutOdfInput>
  }

  export type MappingCreateManyOdfInputEnvelope = {
    data: MappingCreateManyOdfInput | MappingCreateManyOdfInput[]
    skipDuplicates?: boolean
  }

  export type OdfPortCreateWithoutOdfInput = {
    number: number
    buffer?: number | null
    color?: string | null
    mappings?: MappingCreateNestedManyWithoutOdfPortInput
  }

  export type OdfPortUncheckedCreateWithoutOdfInput = {
    id?: number
    number: number
    buffer?: number | null
    color?: string | null
    mappings?: MappingUncheckedCreateNestedManyWithoutOdfPortInput
  }

  export type OdfPortCreateOrConnectWithoutOdfInput = {
    where: OdfPortWhereUniqueInput
    create: XOR<OdfPortCreateWithoutOdfInput, OdfPortUncheckedCreateWithoutOdfInput>
  }

  export type OdfPortCreateManyOdfInputEnvelope = {
    data: OdfPortCreateManyOdfInput | OdfPortCreateManyOdfInput[]
    skipDuplicates?: boolean
  }

  export type MappingUpsertWithWhereUniqueWithoutOdfInput = {
    where: MappingWhereUniqueInput
    update: XOR<MappingUpdateWithoutOdfInput, MappingUncheckedUpdateWithoutOdfInput>
    create: XOR<MappingCreateWithoutOdfInput, MappingUncheckedCreateWithoutOdfInput>
  }

  export type MappingUpdateWithWhereUniqueWithoutOdfInput = {
    where: MappingWhereUniqueInput
    data: XOR<MappingUpdateWithoutOdfInput, MappingUncheckedUpdateWithoutOdfInput>
  }

  export type MappingUpdateManyWithWhereWithoutOdfInput = {
    where: MappingScalarWhereInput
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyWithoutOdfInput>
  }

  export type OdfPortUpsertWithWhereUniqueWithoutOdfInput = {
    where: OdfPortWhereUniqueInput
    update: XOR<OdfPortUpdateWithoutOdfInput, OdfPortUncheckedUpdateWithoutOdfInput>
    create: XOR<OdfPortCreateWithoutOdfInput, OdfPortUncheckedCreateWithoutOdfInput>
  }

  export type OdfPortUpdateWithWhereUniqueWithoutOdfInput = {
    where: OdfPortWhereUniqueInput
    data: XOR<OdfPortUpdateWithoutOdfInput, OdfPortUncheckedUpdateWithoutOdfInput>
  }

  export type OdfPortUpdateManyWithWhereWithoutOdfInput = {
    where: OdfPortScalarWhereInput
    data: XOR<OdfPortUpdateManyMutationInput, OdfPortUncheckedUpdateManyWithoutOdfInput>
  }

  export type OdfPortScalarWhereInput = {
    AND?: OdfPortScalarWhereInput | OdfPortScalarWhereInput[]
    OR?: OdfPortScalarWhereInput[]
    NOT?: OdfPortScalarWhereInput | OdfPortScalarWhereInput[]
    id?: IntFilter<"OdfPort"> | number
    odfId?: IntFilter<"OdfPort"> | number
    number?: IntFilter<"OdfPort"> | number
    buffer?: IntNullableFilter<"OdfPort"> | number | null
    color?: StringNullableFilter<"OdfPort"> | string | null
  }

  export type MappingCreateWithoutOdfPortInput = {
    edfaPort?: number | null
    createdAt?: Date | string
    chasis?: ChasisCreateNestedOneWithoutMappingsInput
    divisor?: DivisorCreateNestedOneWithoutMappingsInput
    edfa?: EdfaCreateNestedOneWithoutMappingsInput
    odf?: OdfCreateNestedOneWithoutMappingsInput
    port: PortCreateNestedOneWithoutMappingInput
  }

  export type MappingUncheckedCreateWithoutOdfPortInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    divisorId?: number | null
    odfId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingCreateOrConnectWithoutOdfPortInput = {
    where: MappingWhereUniqueInput
    create: XOR<MappingCreateWithoutOdfPortInput, MappingUncheckedCreateWithoutOdfPortInput>
  }

  export type MappingCreateManyOdfPortInputEnvelope = {
    data: MappingCreateManyOdfPortInput | MappingCreateManyOdfPortInput[]
    skipDuplicates?: boolean
  }

  export type OdfCreateWithoutPortsInput = {
    odfNumber: number
    name: string
    networks?: string | null
    mappings?: MappingCreateNestedManyWithoutOdfInput
  }

  export type OdfUncheckedCreateWithoutPortsInput = {
    id?: number
    odfNumber: number
    name: string
    networks?: string | null
    mappings?: MappingUncheckedCreateNestedManyWithoutOdfInput
  }

  export type OdfCreateOrConnectWithoutPortsInput = {
    where: OdfWhereUniqueInput
    create: XOR<OdfCreateWithoutPortsInput, OdfUncheckedCreateWithoutPortsInput>
  }

  export type MappingUpsertWithWhereUniqueWithoutOdfPortInput = {
    where: MappingWhereUniqueInput
    update: XOR<MappingUpdateWithoutOdfPortInput, MappingUncheckedUpdateWithoutOdfPortInput>
    create: XOR<MappingCreateWithoutOdfPortInput, MappingUncheckedCreateWithoutOdfPortInput>
  }

  export type MappingUpdateWithWhereUniqueWithoutOdfPortInput = {
    where: MappingWhereUniqueInput
    data: XOR<MappingUpdateWithoutOdfPortInput, MappingUncheckedUpdateWithoutOdfPortInput>
  }

  export type MappingUpdateManyWithWhereWithoutOdfPortInput = {
    where: MappingScalarWhereInput
    data: XOR<MappingUpdateManyMutationInput, MappingUncheckedUpdateManyWithoutOdfPortInput>
  }

  export type OdfUpsertWithoutPortsInput = {
    update: XOR<OdfUpdateWithoutPortsInput, OdfUncheckedUpdateWithoutPortsInput>
    create: XOR<OdfCreateWithoutPortsInput, OdfUncheckedCreateWithoutPortsInput>
    where?: OdfWhereInput
  }

  export type OdfUpdateToOneWithWhereWithoutPortsInput = {
    where?: OdfWhereInput
    data: XOR<OdfUpdateWithoutPortsInput, OdfUncheckedUpdateWithoutPortsInput>
  }

  export type OdfUpdateWithoutPortsInput = {
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUpdateManyWithoutOdfNestedInput
  }

  export type OdfUncheckedUpdateWithoutPortsInput = {
    id?: IntFieldUpdateOperationsInput | number
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUncheckedUpdateManyWithoutOdfNestedInput
  }

  export type ChasisCreateWithoutMappingsInput = {
    name: string
    divisors?: DivisorCreateNestedManyWithoutChasisInput
  }

  export type ChasisUncheckedCreateWithoutMappingsInput = {
    id?: number
    name: string
    divisors?: DivisorUncheckedCreateNestedManyWithoutChasisInput
  }

  export type ChasisCreateOrConnectWithoutMappingsInput = {
    where: ChasisWhereUniqueInput
    create: XOR<ChasisCreateWithoutMappingsInput, ChasisUncheckedCreateWithoutMappingsInput>
  }

  export type DivisorCreateWithoutMappingsInput = {
    slot: number
    type: string
    chasis: ChasisCreateNestedOneWithoutDivisorsInput
  }

  export type DivisorUncheckedCreateWithoutMappingsInput = {
    id?: number
    chasisId: number
    slot: number
    type: string
  }

  export type DivisorCreateOrConnectWithoutMappingsInput = {
    where: DivisorWhereUniqueInput
    create: XOR<DivisorCreateWithoutMappingsInput, DivisorUncheckedCreateWithoutMappingsInput>
  }

  export type EdfaCreateWithoutMappingsInput = {
    name: string
  }

  export type EdfaUncheckedCreateWithoutMappingsInput = {
    id?: number
    name: string
  }

  export type EdfaCreateOrConnectWithoutMappingsInput = {
    where: EdfaWhereUniqueInput
    create: XOR<EdfaCreateWithoutMappingsInput, EdfaUncheckedCreateWithoutMappingsInput>
  }

  export type OdfCreateWithoutMappingsInput = {
    odfNumber: number
    name: string
    networks?: string | null
    ports?: OdfPortCreateNestedManyWithoutOdfInput
  }

  export type OdfUncheckedCreateWithoutMappingsInput = {
    id?: number
    odfNumber: number
    name: string
    networks?: string | null
    ports?: OdfPortUncheckedCreateNestedManyWithoutOdfInput
  }

  export type OdfCreateOrConnectWithoutMappingsInput = {
    where: OdfWhereUniqueInput
    create: XOR<OdfCreateWithoutMappingsInput, OdfUncheckedCreateWithoutMappingsInput>
  }

  export type OdfPortCreateWithoutMappingsInput = {
    number: number
    buffer?: number | null
    color?: string | null
    odf: OdfCreateNestedOneWithoutPortsInput
  }

  export type OdfPortUncheckedCreateWithoutMappingsInput = {
    id?: number
    odfId: number
    number: number
    buffer?: number | null
    color?: string | null
  }

  export type OdfPortCreateOrConnectWithoutMappingsInput = {
    where: OdfPortWhereUniqueInput
    create: XOR<OdfPortCreateWithoutMappingsInput, OdfPortUncheckedCreateWithoutMappingsInput>
  }

  export type PortCreateWithoutMappingInput = {
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
    olt: OltCreateNestedOneWithoutPortsInput
  }

  export type PortUncheckedCreateWithoutMappingInput = {
    id?: number
    oltId: number
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
  }

  export type PortCreateOrConnectWithoutMappingInput = {
    where: PortWhereUniqueInput
    create: XOR<PortCreateWithoutMappingInput, PortUncheckedCreateWithoutMappingInput>
  }

  export type ChasisUpsertWithoutMappingsInput = {
    update: XOR<ChasisUpdateWithoutMappingsInput, ChasisUncheckedUpdateWithoutMappingsInput>
    create: XOR<ChasisCreateWithoutMappingsInput, ChasisUncheckedCreateWithoutMappingsInput>
    where?: ChasisWhereInput
  }

  export type ChasisUpdateToOneWithWhereWithoutMappingsInput = {
    where?: ChasisWhereInput
    data: XOR<ChasisUpdateWithoutMappingsInput, ChasisUncheckedUpdateWithoutMappingsInput>
  }

  export type ChasisUpdateWithoutMappingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    divisors?: DivisorUpdateManyWithoutChasisNestedInput
  }

  export type ChasisUncheckedUpdateWithoutMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    divisors?: DivisorUncheckedUpdateManyWithoutChasisNestedInput
  }

  export type DivisorUpsertWithoutMappingsInput = {
    update: XOR<DivisorUpdateWithoutMappingsInput, DivisorUncheckedUpdateWithoutMappingsInput>
    create: XOR<DivisorCreateWithoutMappingsInput, DivisorUncheckedCreateWithoutMappingsInput>
    where?: DivisorWhereInput
  }

  export type DivisorUpdateToOneWithWhereWithoutMappingsInput = {
    where?: DivisorWhereInput
    data: XOR<DivisorUpdateWithoutMappingsInput, DivisorUncheckedUpdateWithoutMappingsInput>
  }

  export type DivisorUpdateWithoutMappingsInput = {
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    chasis?: ChasisUpdateOneRequiredWithoutDivisorsNestedInput
  }

  export type DivisorUncheckedUpdateWithoutMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    chasisId?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type EdfaUpsertWithoutMappingsInput = {
    update: XOR<EdfaUpdateWithoutMappingsInput, EdfaUncheckedUpdateWithoutMappingsInput>
    create: XOR<EdfaCreateWithoutMappingsInput, EdfaUncheckedCreateWithoutMappingsInput>
    where?: EdfaWhereInput
  }

  export type EdfaUpdateToOneWithWhereWithoutMappingsInput = {
    where?: EdfaWhereInput
    data: XOR<EdfaUpdateWithoutMappingsInput, EdfaUncheckedUpdateWithoutMappingsInput>
  }

  export type EdfaUpdateWithoutMappingsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EdfaUncheckedUpdateWithoutMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OdfUpsertWithoutMappingsInput = {
    update: XOR<OdfUpdateWithoutMappingsInput, OdfUncheckedUpdateWithoutMappingsInput>
    create: XOR<OdfCreateWithoutMappingsInput, OdfUncheckedCreateWithoutMappingsInput>
    where?: OdfWhereInput
  }

  export type OdfUpdateToOneWithWhereWithoutMappingsInput = {
    where?: OdfWhereInput
    data: XOR<OdfUpdateWithoutMappingsInput, OdfUncheckedUpdateWithoutMappingsInput>
  }

  export type OdfUpdateWithoutMappingsInput = {
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
    ports?: OdfPortUpdateManyWithoutOdfNestedInput
  }

  export type OdfUncheckedUpdateWithoutMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    odfNumber?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    networks?: NullableStringFieldUpdateOperationsInput | string | null
    ports?: OdfPortUncheckedUpdateManyWithoutOdfNestedInput
  }

  export type OdfPortUpsertWithoutMappingsInput = {
    update: XOR<OdfPortUpdateWithoutMappingsInput, OdfPortUncheckedUpdateWithoutMappingsInput>
    create: XOR<OdfPortCreateWithoutMappingsInput, OdfPortUncheckedCreateWithoutMappingsInput>
    where?: OdfPortWhereInput
  }

  export type OdfPortUpdateToOneWithWhereWithoutMappingsInput = {
    where?: OdfPortWhereInput
    data: XOR<OdfPortUpdateWithoutMappingsInput, OdfPortUncheckedUpdateWithoutMappingsInput>
  }

  export type OdfPortUpdateWithoutMappingsInput = {
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    odf?: OdfUpdateOneRequiredWithoutPortsNestedInput
  }

  export type OdfPortUncheckedUpdateWithoutMappingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    odfId?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortUpsertWithoutMappingInput = {
    update: XOR<PortUpdateWithoutMappingInput, PortUncheckedUpdateWithoutMappingInput>
    create: XOR<PortCreateWithoutMappingInput, PortUncheckedCreateWithoutMappingInput>
    where?: PortWhereInput
  }

  export type PortUpdateToOneWithWhereWithoutMappingInput = {
    where?: PortWhereInput
    data: XOR<PortUpdateWithoutMappingInput, PortUncheckedUpdateWithoutMappingInput>
  }

  export type PortUpdateWithoutMappingInput = {
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    olt?: OltUpdateOneRequiredWithoutPortsNestedInput
  }

  export type PortUncheckedUpdateWithoutMappingInput = {
    id?: IntFieldUpdateOperationsInput | number
    oltId?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortCreateManyOltInput = {
    id?: number
    slot: number
    portNumber: number
    status: string
    label?: string | null
    rx?: number | null
    tx?: number | null
    vcc?: number | null
    brand?: string | null
  }

  export type PortUpdateWithoutOltInput = {
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mapping?: MappingUpdateOneWithoutPortNestedInput
  }

  export type PortUncheckedUpdateWithoutOltInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    mapping?: MappingUncheckedUpdateOneWithoutPortNestedInput
  }

  export type PortUncheckedUpdateManyWithoutOltInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    portNumber?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    rx?: NullableFloatFieldUpdateOperationsInput | number | null
    tx?: NullableFloatFieldUpdateOperationsInput | number | null
    vcc?: NullableFloatFieldUpdateOperationsInput | number | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MappingCreateManyEdfaInput = {
    id?: number
    portId: number
    chasisId?: number | null
    divisorId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingUpdateWithoutEdfaInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chasis?: ChasisUpdateOneWithoutMappingsNestedInput
    divisor?: DivisorUpdateOneWithoutMappingsNestedInput
    odf?: OdfUpdateOneWithoutMappingsNestedInput
    odfPort?: OdfPortUpdateOneWithoutMappingsNestedInput
    port?: PortUpdateOneRequiredWithoutMappingNestedInput
  }

  export type MappingUncheckedUpdateWithoutEdfaInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingUncheckedUpdateManyWithoutEdfaInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DivisorCreateManyChasisInput = {
    id?: number
    slot: number
    type: string
  }

  export type MappingCreateManyChasisInput = {
    id?: number
    portId: number
    edfaId?: number | null
    divisorId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type DivisorUpdateWithoutChasisInput = {
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUpdateManyWithoutDivisorNestedInput
  }

  export type DivisorUncheckedUpdateWithoutChasisInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    mappings?: MappingUncheckedUpdateManyWithoutDivisorNestedInput
  }

  export type DivisorUncheckedUpdateManyWithoutChasisInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MappingUpdateWithoutChasisInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    divisor?: DivisorUpdateOneWithoutMappingsNestedInput
    edfa?: EdfaUpdateOneWithoutMappingsNestedInput
    odf?: OdfUpdateOneWithoutMappingsNestedInput
    odfPort?: OdfPortUpdateOneWithoutMappingsNestedInput
    port?: PortUpdateOneRequiredWithoutMappingNestedInput
  }

  export type MappingUncheckedUpdateWithoutChasisInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingUncheckedUpdateManyWithoutChasisInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingCreateManyDivisorInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    odfId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingUpdateWithoutDivisorInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chasis?: ChasisUpdateOneWithoutMappingsNestedInput
    edfa?: EdfaUpdateOneWithoutMappingsNestedInput
    odf?: OdfUpdateOneWithoutMappingsNestedInput
    odfPort?: OdfPortUpdateOneWithoutMappingsNestedInput
    port?: PortUpdateOneRequiredWithoutMappingNestedInput
  }

  export type MappingUncheckedUpdateWithoutDivisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingUncheckedUpdateManyWithoutDivisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingCreateManyOdfInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    divisorId?: number | null
    odfPortId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type OdfPortCreateManyOdfInput = {
    id?: number
    number: number
    buffer?: number | null
    color?: string | null
  }

  export type MappingUpdateWithoutOdfInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chasis?: ChasisUpdateOneWithoutMappingsNestedInput
    divisor?: DivisorUpdateOneWithoutMappingsNestedInput
    edfa?: EdfaUpdateOneWithoutMappingsNestedInput
    odfPort?: OdfPortUpdateOneWithoutMappingsNestedInput
    port?: PortUpdateOneRequiredWithoutMappingNestedInput
  }

  export type MappingUncheckedUpdateWithoutOdfInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingUncheckedUpdateManyWithoutOdfInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfPortId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OdfPortUpdateWithoutOdfInput = {
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUpdateManyWithoutOdfPortNestedInput
  }

  export type OdfPortUncheckedUpdateWithoutOdfInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    mappings?: MappingUncheckedUpdateManyWithoutOdfPortNestedInput
  }

  export type OdfPortUncheckedUpdateManyWithoutOdfInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    buffer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MappingCreateManyOdfPortInput = {
    id?: number
    portId: number
    edfaId?: number | null
    chasisId?: number | null
    divisorId?: number | null
    odfId?: number | null
    edfaPort?: number | null
    createdAt?: Date | string
  }

  export type MappingUpdateWithoutOdfPortInput = {
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chasis?: ChasisUpdateOneWithoutMappingsNestedInput
    divisor?: DivisorUpdateOneWithoutMappingsNestedInput
    edfa?: EdfaUpdateOneWithoutMappingsNestedInput
    odf?: OdfUpdateOneWithoutMappingsNestedInput
    port?: PortUpdateOneRequiredWithoutMappingNestedInput
  }

  export type MappingUncheckedUpdateWithoutOdfPortInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MappingUncheckedUpdateManyWithoutOdfPortInput = {
    id?: IntFieldUpdateOperationsInput | number
    portId?: IntFieldUpdateOperationsInput | number
    edfaId?: NullableIntFieldUpdateOperationsInput | number | null
    chasisId?: NullableIntFieldUpdateOperationsInput | number | null
    divisorId?: NullableIntFieldUpdateOperationsInput | number | null
    odfId?: NullableIntFieldUpdateOperationsInput | number | null
    edfaPort?: NullableIntFieldUpdateOperationsInput | number | null
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