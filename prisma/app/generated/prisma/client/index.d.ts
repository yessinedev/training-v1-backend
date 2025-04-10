
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Formateur
 * 
 */
export type Formateur = $Result.DefaultSelection<Prisma.$FormateurPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>
/**
 * Model Domaine
 * 
 */
export type Domaine = $Result.DefaultSelection<Prisma.$DomainePayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model ActionFormation
 * 
 */
export type ActionFormation = $Result.DefaultSelection<Prisma.$ActionFormationPayload>
/**
 * Model Seance
 * 
 */
export type Seance = $Result.DefaultSelection<Prisma.$SeancePayload>
/**
 * Model ActionFormationFormateur
 * 
 */
export type ActionFormationFormateur = $Result.DefaultSelection<Prisma.$ActionFormationFormateurPayload>
/**
 * Model ActionFormationParticipant
 * 
 */
export type ActionFormationParticipant = $Result.DefaultSelection<Prisma.$ActionFormationParticipantPayload>
/**
 * Model Attestation
 * 
 */
export type Attestation = $Result.DefaultSelection<Prisma.$AttestationPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Presence
 * 
 */
export type Presence = $Result.DefaultSelection<Prisma.$PresencePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PresenceStatus: {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

export type PresenceStatus = (typeof PresenceStatus)[keyof typeof PresenceStatus]


export const FileType: {
  CV: 'CV',
  BADGE: 'BADGE',
  FEUILLE_EMARGEMENT: 'FEUILLE_EMARGEMENT'
};

export type FileType = (typeof FileType)[keyof typeof FileType]


export const SeanceStatut: {
  EN_ATTENTE: 'EN_ATTENTE',
  EN_COURS: 'EN_COURS',
  TERMINEE: 'TERMINEE',
  ANNULEE: 'ANNULEE'
};

export type SeanceStatut = (typeof SeanceStatut)[keyof typeof SeanceStatut]


export const RoleName: {
  ADMIN: 'ADMIN',
  Gestionnaire: 'Gestionnaire',
  FORMATEUR: 'FORMATEUR',
  PARTICIPANT: 'PARTICIPANT'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]

}

export type PresenceStatus = $Enums.PresenceStatus

export const PresenceStatus: typeof $Enums.PresenceStatus

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

export type SeanceStatut = $Enums.SeanceStatut

export const SeanceStatut: typeof $Enums.SeanceStatut

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formateur`: Exposes CRUD operations for the **Formateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formateurs
    * const formateurs = await prisma.formateur.findMany()
    * ```
    */
  get formateur(): Prisma.FormateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domaine`: Exposes CRUD operations for the **Domaine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domaines
    * const domaines = await prisma.domaine.findMany()
    * ```
    */
  get domaine(): Prisma.DomaineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionFormation`: Exposes CRUD operations for the **ActionFormation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionFormations
    * const actionFormations = await prisma.actionFormation.findMany()
    * ```
    */
  get actionFormation(): Prisma.ActionFormationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seance`: Exposes CRUD operations for the **Seance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seances
    * const seances = await prisma.seance.findMany()
    * ```
    */
  get seance(): Prisma.SeanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionFormationFormateur`: Exposes CRUD operations for the **ActionFormationFormateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionFormationFormateurs
    * const actionFormationFormateurs = await prisma.actionFormationFormateur.findMany()
    * ```
    */
  get actionFormationFormateur(): Prisma.ActionFormationFormateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionFormationParticipant`: Exposes CRUD operations for the **ActionFormationParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionFormationParticipants
    * const actionFormationParticipants = await prisma.actionFormationParticipant.findMany()
    * ```
    */
  get actionFormationParticipant(): Prisma.ActionFormationParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attestation`: Exposes CRUD operations for the **Attestation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attestations
    * const attestations = await prisma.attestation.findMany()
    * ```
    */
  get attestation(): Prisma.AttestationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presence`: Exposes CRUD operations for the **Presence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presences
    * const presences = await prisma.presence.findMany()
    * ```
    */
  get presence(): Prisma.PresenceDelegate<ExtArgs, ClientOptions>;
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
    Role: 'Role',
    User: 'User',
    Formateur: 'Formateur',
    Participant: 'Participant',
    Domaine: 'Domaine',
    Theme: 'Theme',
    ActionFormation: 'ActionFormation',
    Seance: 'Seance',
    ActionFormationFormateur: 'ActionFormationFormateur',
    ActionFormationParticipant: 'ActionFormationParticipant',
    Attestation: 'Attestation',
    File: 'File',
    Presence: 'Presence'
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
      modelProps: "role" | "user" | "formateur" | "participant" | "domaine" | "theme" | "actionFormation" | "seance" | "actionFormationFormateur" | "actionFormationParticipant" | "attestation" | "file" | "presence"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Formateur: {
        payload: Prisma.$FormateurPayload<ExtArgs>
        fields: Prisma.FormateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>
          }
          findFirst: {
            args: Prisma.FormateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>
          }
          findMany: {
            args: Prisma.FormateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>[]
          }
          create: {
            args: Prisma.FormateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>
          }
          createMany: {
            args: Prisma.FormateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>[]
          }
          delete: {
            args: Prisma.FormateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>
          }
          update: {
            args: Prisma.FormateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>
          }
          deleteMany: {
            args: Prisma.FormateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>[]
          }
          upsert: {
            args: Prisma.FormateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormateurPayload>
          }
          aggregate: {
            args: Prisma.FormateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormateur>
          }
          groupBy: {
            args: Prisma.FormateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormateurCountArgs<ExtArgs>
            result: $Utils.Optional<FormateurCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
      Domaine: {
        payload: Prisma.$DomainePayload<ExtArgs>
        fields: Prisma.DomaineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomaineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomaineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>
          }
          findFirst: {
            args: Prisma.DomaineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomaineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>
          }
          findMany: {
            args: Prisma.DomaineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>[]
          }
          create: {
            args: Prisma.DomaineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>
          }
          createMany: {
            args: Prisma.DomaineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomaineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>[]
          }
          delete: {
            args: Prisma.DomaineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>
          }
          update: {
            args: Prisma.DomaineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>
          }
          deleteMany: {
            args: Prisma.DomaineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomaineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomaineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>[]
          }
          upsert: {
            args: Prisma.DomaineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainePayload>
          }
          aggregate: {
            args: Prisma.DomaineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomaine>
          }
          groupBy: {
            args: Prisma.DomaineGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomaineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomaineCountArgs<ExtArgs>
            result: $Utils.Optional<DomaineCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      ActionFormation: {
        payload: Prisma.$ActionFormationPayload<ExtArgs>
        fields: Prisma.ActionFormationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFormationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFormationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>
          }
          findFirst: {
            args: Prisma.ActionFormationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFormationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>
          }
          findMany: {
            args: Prisma.ActionFormationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>[]
          }
          create: {
            args: Prisma.ActionFormationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>
          }
          createMany: {
            args: Prisma.ActionFormationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionFormationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>[]
          }
          delete: {
            args: Prisma.ActionFormationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>
          }
          update: {
            args: Prisma.ActionFormationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>
          }
          deleteMany: {
            args: Prisma.ActionFormationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionFormationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionFormationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>[]
          }
          upsert: {
            args: Prisma.ActionFormationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationPayload>
          }
          aggregate: {
            args: Prisma.ActionFormationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionFormation>
          }
          groupBy: {
            args: Prisma.ActionFormationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionFormationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionFormationCountArgs<ExtArgs>
            result: $Utils.Optional<ActionFormationCountAggregateOutputType> | number
          }
        }
      }
      Seance: {
        payload: Prisma.$SeancePayload<ExtArgs>
        fields: Prisma.SeanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>
          }
          findFirst: {
            args: Prisma.SeanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>
          }
          findMany: {
            args: Prisma.SeanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>[]
          }
          create: {
            args: Prisma.SeanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>
          }
          createMany: {
            args: Prisma.SeanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>[]
          }
          delete: {
            args: Prisma.SeanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>
          }
          update: {
            args: Prisma.SeanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>
          }
          deleteMany: {
            args: Prisma.SeanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>[]
          }
          upsert: {
            args: Prisma.SeanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeancePayload>
          }
          aggregate: {
            args: Prisma.SeanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeance>
          }
          groupBy: {
            args: Prisma.SeanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeanceCountArgs<ExtArgs>
            result: $Utils.Optional<SeanceCountAggregateOutputType> | number
          }
        }
      }
      ActionFormationFormateur: {
        payload: Prisma.$ActionFormationFormateurPayload<ExtArgs>
        fields: Prisma.ActionFormationFormateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFormationFormateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFormationFormateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>
          }
          findFirst: {
            args: Prisma.ActionFormationFormateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFormationFormateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>
          }
          findMany: {
            args: Prisma.ActionFormationFormateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>[]
          }
          create: {
            args: Prisma.ActionFormationFormateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>
          }
          createMany: {
            args: Prisma.ActionFormationFormateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionFormationFormateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>[]
          }
          delete: {
            args: Prisma.ActionFormationFormateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>
          }
          update: {
            args: Prisma.ActionFormationFormateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>
          }
          deleteMany: {
            args: Prisma.ActionFormationFormateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionFormationFormateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionFormationFormateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>[]
          }
          upsert: {
            args: Prisma.ActionFormationFormateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationFormateurPayload>
          }
          aggregate: {
            args: Prisma.ActionFormationFormateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionFormationFormateur>
          }
          groupBy: {
            args: Prisma.ActionFormationFormateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionFormationFormateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionFormationFormateurCountArgs<ExtArgs>
            result: $Utils.Optional<ActionFormationFormateurCountAggregateOutputType> | number
          }
        }
      }
      ActionFormationParticipant: {
        payload: Prisma.$ActionFormationParticipantPayload<ExtArgs>
        fields: Prisma.ActionFormationParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFormationParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFormationParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>
          }
          findFirst: {
            args: Prisma.ActionFormationParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFormationParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>
          }
          findMany: {
            args: Prisma.ActionFormationParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>[]
          }
          create: {
            args: Prisma.ActionFormationParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>
          }
          createMany: {
            args: Prisma.ActionFormationParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionFormationParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>[]
          }
          delete: {
            args: Prisma.ActionFormationParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>
          }
          update: {
            args: Prisma.ActionFormationParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ActionFormationParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionFormationParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionFormationParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ActionFormationParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionFormationParticipantPayload>
          }
          aggregate: {
            args: Prisma.ActionFormationParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionFormationParticipant>
          }
          groupBy: {
            args: Prisma.ActionFormationParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionFormationParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionFormationParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ActionFormationParticipantCountAggregateOutputType> | number
          }
        }
      }
      Attestation: {
        payload: Prisma.$AttestationPayload<ExtArgs>
        fields: Prisma.AttestationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttestationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttestationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>
          }
          findFirst: {
            args: Prisma.AttestationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttestationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>
          }
          findMany: {
            args: Prisma.AttestationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>[]
          }
          create: {
            args: Prisma.AttestationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>
          }
          createMany: {
            args: Prisma.AttestationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttestationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>[]
          }
          delete: {
            args: Prisma.AttestationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>
          }
          update: {
            args: Prisma.AttestationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>
          }
          deleteMany: {
            args: Prisma.AttestationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttestationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttestationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>[]
          }
          upsert: {
            args: Prisma.AttestationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttestationPayload>
          }
          aggregate: {
            args: Prisma.AttestationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttestation>
          }
          groupBy: {
            args: Prisma.AttestationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttestationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttestationCountArgs<ExtArgs>
            result: $Utils.Optional<AttestationCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Presence: {
        payload: Prisma.$PresencePayload<ExtArgs>
        fields: Prisma.PresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          findFirst: {
            args: Prisma.PresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          findMany: {
            args: Prisma.PresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          create: {
            args: Prisma.PresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          createMany: {
            args: Prisma.PresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          delete: {
            args: Prisma.PresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          update: {
            args: Prisma.PresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          deleteMany: {
            args: Prisma.PresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>[]
          }
          upsert: {
            args: Prisma.PresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresencePayload>
          }
          aggregate: {
            args: Prisma.PresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresence>
          }
          groupBy: {
            args: Prisma.PresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresenceCountArgs<ExtArgs>
            result: $Utils.Optional<PresenceCountAggregateOutputType> | number
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
    role?: RoleOmit
    user?: UserOmit
    formateur?: FormateurOmit
    participant?: ParticipantOmit
    domaine?: DomaineOmit
    theme?: ThemeOmit
    actionFormation?: ActionFormationOmit
    seance?: SeanceOmit
    actionFormationFormateur?: ActionFormationFormateurOmit
    actionFormationParticipant?: ActionFormationParticipantOmit
    attestation?: AttestationOmit
    file?: FileOmit
    presence?: PresenceOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type FormateurCountOutputType
   */

  export type FormateurCountOutputType = {
    actions: number
    seances: number
    files: number
    presences: number
  }

  export type FormateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | FormateurCountOutputTypeCountActionsArgs
    seances?: boolean | FormateurCountOutputTypeCountSeancesArgs
    files?: boolean | FormateurCountOutputTypeCountFilesArgs
    presences?: boolean | FormateurCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormateurCountOutputType
     */
    select?: FormateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationFormateurWhereInput
  }

  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeCountSeancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeanceWhereInput
  }

  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }

  /**
   * FormateurCountOutputType without action
   */
  export type FormateurCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    actions: number
    attestations: number
    presences: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | ParticipantCountOutputTypeCountActionsArgs
    attestations?: boolean | ParticipantCountOutputTypeCountAttestationsArgs
    presences?: boolean | ParticipantCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationParticipantWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountAttestationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttestationWhereInput
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
  }


  /**
   * Count Type DomaineCountOutputType
   */

  export type DomaineCountOutputType = {
    themes: number
  }

  export type DomaineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    themes?: boolean | DomaineCountOutputTypeCountThemesArgs
  }

  // Custom InputTypes
  /**
   * DomaineCountOutputType without action
   */
  export type DomaineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomaineCountOutputType
     */
    select?: DomaineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomaineCountOutputType without action
   */
  export type DomaineCountOutputTypeCountThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    actions: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | ThemeCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationWhereInput
  }


  /**
   * Count Type ActionFormationCountOutputType
   */

  export type ActionFormationCountOutputType = {
    formateurs: number
    participants: number
    attestations: number
    seances: number
    files: number
  }

  export type ActionFormationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateurs?: boolean | ActionFormationCountOutputTypeCountFormateursArgs
    participants?: boolean | ActionFormationCountOutputTypeCountParticipantsArgs
    attestations?: boolean | ActionFormationCountOutputTypeCountAttestationsArgs
    seances?: boolean | ActionFormationCountOutputTypeCountSeancesArgs
    files?: boolean | ActionFormationCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * ActionFormationCountOutputType without action
   */
  export type ActionFormationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationCountOutputType
     */
    select?: ActionFormationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActionFormationCountOutputType without action
   */
  export type ActionFormationCountOutputTypeCountFormateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationFormateurWhereInput
  }

  /**
   * ActionFormationCountOutputType without action
   */
  export type ActionFormationCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationParticipantWhereInput
  }

  /**
   * ActionFormationCountOutputType without action
   */
  export type ActionFormationCountOutputTypeCountAttestationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttestationWhereInput
  }

  /**
   * ActionFormationCountOutputType without action
   */
  export type ActionFormationCountOutputTypeCountSeancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeanceWhereInput
  }

  /**
   * ActionFormationCountOutputType without action
   */
  export type ActionFormationCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type SeanceCountOutputType
   */

  export type SeanceCountOutputType = {
    presences: number
  }

  export type SeanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presences?: boolean | SeanceCountOutputTypeCountPresencesArgs
  }

  // Custom InputTypes
  /**
   * SeanceCountOutputType without action
   */
  export type SeanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeanceCountOutputType
     */
    select?: SeanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeanceCountOutputType without action
   */
  export type SeanceCountOutputTypeCountPresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type RoleSumAggregateOutputType = {
    role_id: number | null
  }

  export type RoleMinAggregateOutputType = {
    role_id: number | null
    role_name: $Enums.RoleName | null
  }

  export type RoleMaxAggregateOutputType = {
    role_id: number | null
    role_name: $Enums.RoleName | null
  }

  export type RoleCountAggregateOutputType = {
    role_id: number
    role_name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    role_id?: true
  }

  export type RoleSumAggregateInputType = {
    role_id?: true
  }

  export type RoleMinAggregateInputType = {
    role_id?: true
    role_name?: true
  }

  export type RoleMaxAggregateInputType = {
    role_id?: true
    role_name?: true
  }

  export type RoleCountAggregateInputType = {
    role_id?: true
    role_name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    role_id: number
    role_name: $Enums.RoleName
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    role_id?: boolean
    role_name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "role_name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      role_name: $Enums.RoleName
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const roleWithRole_idOnly = await prisma.role.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.updateManyAndReturn({
     *   select: { role_id: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly role_id: FieldRef<"Role", 'Int'>
    readonly role_name: FieldRef<"Role", 'RoleName'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    email: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    email: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    nom: number
    prenom: number
    telephone: number
    role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    nom?: true
    prenom?: true
    telephone?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    nom?: true
    prenom?: true
    telephone?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    nom?: true
    prenom?: true
    telephone?: true
    role_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role_id: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    formateur?: boolean | User$formateurArgs<ExtArgs>
    participant?: boolean | User$participantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role_id?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "nom" | "prenom" | "telephone" | "role_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    formateur?: boolean | User$formateurArgs<ExtArgs>
    participant?: boolean | User$participantArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      formateur: Prisma.$FormateurPayload<ExtArgs> | null
      participant: Prisma.$ParticipantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      email: string
      nom: string
      prenom: string
      telephone: string
      role_id: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formateur<T extends User$formateurArgs<ExtArgs> = {}>(args?: Subset<T, User$formateurArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participant<T extends User$participantArgs<ExtArgs> = {}>(args?: Subset<T, User$participantArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.formateur
   */
  export type User$formateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    where?: FormateurWhereInput
  }

  /**
   * User.participant
   */
  export type User$participantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Formateur
   */

  export type AggregateFormateur = {
    _count: FormateurCountAggregateOutputType | null
    _min: FormateurMinAggregateOutputType | null
    _max: FormateurMaxAggregateOutputType | null
  }

  export type FormateurMinAggregateOutputType = {
    user_id: string | null
  }

  export type FormateurMaxAggregateOutputType = {
    user_id: string | null
  }

  export type FormateurCountAggregateOutputType = {
    user_id: number
    _all: number
  }


  export type FormateurMinAggregateInputType = {
    user_id?: true
  }

  export type FormateurMaxAggregateInputType = {
    user_id?: true
  }

  export type FormateurCountAggregateInputType = {
    user_id?: true
    _all?: true
  }

  export type FormateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formateur to aggregate.
     */
    where?: FormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formateurs to fetch.
     */
    orderBy?: FormateurOrderByWithRelationInput | FormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formateurs
    **/
    _count?: true | FormateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormateurMaxAggregateInputType
  }

  export type GetFormateurAggregateType<T extends FormateurAggregateArgs> = {
        [P in keyof T & keyof AggregateFormateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormateur[P]>
      : GetScalarType<T[P], AggregateFormateur[P]>
  }




  export type FormateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormateurWhereInput
    orderBy?: FormateurOrderByWithAggregationInput | FormateurOrderByWithAggregationInput[]
    by: FormateurScalarFieldEnum[] | FormateurScalarFieldEnum
    having?: FormateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormateurCountAggregateInputType | true
    _min?: FormateurMinAggregateInputType
    _max?: FormateurMaxAggregateInputType
  }

  export type FormateurGroupByOutputType = {
    user_id: string
    _count: FormateurCountAggregateOutputType | null
    _min: FormateurMinAggregateOutputType | null
    _max: FormateurMaxAggregateOutputType | null
  }

  type GetFormateurGroupByPayload<T extends FormateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormateurGroupByOutputType[P]>
            : GetScalarType<T[P], FormateurGroupByOutputType[P]>
        }
      >
    >


  export type FormateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    actions?: boolean | Formateur$actionsArgs<ExtArgs>
    seances?: boolean | Formateur$seancesArgs<ExtArgs>
    files?: boolean | Formateur$filesArgs<ExtArgs>
    presences?: boolean | Formateur$presencesArgs<ExtArgs>
    _count?: boolean | FormateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formateur"]>

  export type FormateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formateur"]>

  export type FormateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formateur"]>

  export type FormateurSelectScalar = {
    user_id?: boolean
  }

  export type FormateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id", ExtArgs["result"]["formateur"]>
  export type FormateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    actions?: boolean | Formateur$actionsArgs<ExtArgs>
    seances?: boolean | Formateur$seancesArgs<ExtArgs>
    files?: boolean | Formateur$filesArgs<ExtArgs>
    presences?: boolean | Formateur$presencesArgs<ExtArgs>
    _count?: boolean | FormateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FormateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FormateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Formateur"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      actions: Prisma.$ActionFormationFormateurPayload<ExtArgs>[]
      seances: Prisma.$SeancePayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      presences: Prisma.$PresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
    }, ExtArgs["result"]["formateur"]>
    composites: {}
  }

  type FormateurGetPayload<S extends boolean | null | undefined | FormateurDefaultArgs> = $Result.GetResult<Prisma.$FormateurPayload, S>

  type FormateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormateurCountAggregateInputType | true
    }

  export interface FormateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Formateur'], meta: { name: 'Formateur' } }
    /**
     * Find zero or one Formateur that matches the filter.
     * @param {FormateurFindUniqueArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormateurFindUniqueArgs>(args: SelectSubset<T, FormateurFindUniqueArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormateurFindUniqueOrThrowArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormateurFindUniqueOrThrowArgs>(args: SelectSubset<T, FormateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurFindFirstArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormateurFindFirstArgs>(args?: SelectSubset<T, FormateurFindFirstArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurFindFirstOrThrowArgs} args - Arguments to find a Formateur
     * @example
     * // Get one Formateur
     * const formateur = await prisma.formateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormateurFindFirstOrThrowArgs>(args?: SelectSubset<T, FormateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formateurs
     * const formateurs = await prisma.formateur.findMany()
     * 
     * // Get first 10 Formateurs
     * const formateurs = await prisma.formateur.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const formateurWithUser_idOnly = await prisma.formateur.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends FormateurFindManyArgs>(args?: SelectSubset<T, FormateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formateur.
     * @param {FormateurCreateArgs} args - Arguments to create a Formateur.
     * @example
     * // Create one Formateur
     * const Formateur = await prisma.formateur.create({
     *   data: {
     *     // ... data to create a Formateur
     *   }
     * })
     * 
     */
    create<T extends FormateurCreateArgs>(args: SelectSubset<T, FormateurCreateArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formateurs.
     * @param {FormateurCreateManyArgs} args - Arguments to create many Formateurs.
     * @example
     * // Create many Formateurs
     * const formateur = await prisma.formateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormateurCreateManyArgs>(args?: SelectSubset<T, FormateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formateurs and returns the data saved in the database.
     * @param {FormateurCreateManyAndReturnArgs} args - Arguments to create many Formateurs.
     * @example
     * // Create many Formateurs
     * const formateur = await prisma.formateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formateurs and only return the `user_id`
     * const formateurWithUser_idOnly = await prisma.formateur.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormateurCreateManyAndReturnArgs>(args?: SelectSubset<T, FormateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formateur.
     * @param {FormateurDeleteArgs} args - Arguments to delete one Formateur.
     * @example
     * // Delete one Formateur
     * const Formateur = await prisma.formateur.delete({
     *   where: {
     *     // ... filter to delete one Formateur
     *   }
     * })
     * 
     */
    delete<T extends FormateurDeleteArgs>(args: SelectSubset<T, FormateurDeleteArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formateur.
     * @param {FormateurUpdateArgs} args - Arguments to update one Formateur.
     * @example
     * // Update one Formateur
     * const formateur = await prisma.formateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormateurUpdateArgs>(args: SelectSubset<T, FormateurUpdateArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formateurs.
     * @param {FormateurDeleteManyArgs} args - Arguments to filter Formateurs to delete.
     * @example
     * // Delete a few Formateurs
     * const { count } = await prisma.formateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormateurDeleteManyArgs>(args?: SelectSubset<T, FormateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formateurs
     * const formateur = await prisma.formateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormateurUpdateManyArgs>(args: SelectSubset<T, FormateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formateurs and returns the data updated in the database.
     * @param {FormateurUpdateManyAndReturnArgs} args - Arguments to update many Formateurs.
     * @example
     * // Update many Formateurs
     * const formateur = await prisma.formateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formateurs and only return the `user_id`
     * const formateurWithUser_idOnly = await prisma.formateur.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends FormateurUpdateManyAndReturnArgs>(args: SelectSubset<T, FormateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formateur.
     * @param {FormateurUpsertArgs} args - Arguments to update or create a Formateur.
     * @example
     * // Update or create a Formateur
     * const formateur = await prisma.formateur.upsert({
     *   create: {
     *     // ... data to create a Formateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formateur we want to update
     *   }
     * })
     */
    upsert<T extends FormateurUpsertArgs>(args: SelectSubset<T, FormateurUpsertArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurCountArgs} args - Arguments to filter Formateurs to count.
     * @example
     * // Count the number of Formateurs
     * const count = await prisma.formateur.count({
     *   where: {
     *     // ... the filter for the Formateurs we want to count
     *   }
     * })
    **/
    count<T extends FormateurCountArgs>(
      args?: Subset<T, FormateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormateurAggregateArgs>(args: Subset<T, FormateurAggregateArgs>): Prisma.PrismaPromise<GetFormateurAggregateType<T>>

    /**
     * Group by Formateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormateurGroupByArgs} args - Group by arguments.
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
      T extends FormateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormateurGroupByArgs['orderBy'] }
        : { orderBy?: FormateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Formateur model
   */
  readonly fields: FormateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Formateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actions<T extends Formateur$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Formateur$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seances<T extends Formateur$seancesArgs<ExtArgs> = {}>(args?: Subset<T, Formateur$seancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Formateur$filesArgs<ExtArgs> = {}>(args?: Subset<T, Formateur$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presences<T extends Formateur$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Formateur$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Formateur model
   */
  interface FormateurFieldRefs {
    readonly user_id: FieldRef<"Formateur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Formateur findUnique
   */
  export type FormateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * Filter, which Formateur to fetch.
     */
    where: FormateurWhereUniqueInput
  }

  /**
   * Formateur findUniqueOrThrow
   */
  export type FormateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * Filter, which Formateur to fetch.
     */
    where: FormateurWhereUniqueInput
  }

  /**
   * Formateur findFirst
   */
  export type FormateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * Filter, which Formateur to fetch.
     */
    where?: FormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formateurs to fetch.
     */
    orderBy?: FormateurOrderByWithRelationInput | FormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formateurs.
     */
    cursor?: FormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formateurs.
     */
    distinct?: FormateurScalarFieldEnum | FormateurScalarFieldEnum[]
  }

  /**
   * Formateur findFirstOrThrow
   */
  export type FormateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * Filter, which Formateur to fetch.
     */
    where?: FormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formateurs to fetch.
     */
    orderBy?: FormateurOrderByWithRelationInput | FormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formateurs.
     */
    cursor?: FormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formateurs.
     */
    distinct?: FormateurScalarFieldEnum | FormateurScalarFieldEnum[]
  }

  /**
   * Formateur findMany
   */
  export type FormateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * Filter, which Formateurs to fetch.
     */
    where?: FormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formateurs to fetch.
     */
    orderBy?: FormateurOrderByWithRelationInput | FormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formateurs.
     */
    cursor?: FormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formateurs.
     */
    skip?: number
    distinct?: FormateurScalarFieldEnum | FormateurScalarFieldEnum[]
  }

  /**
   * Formateur create
   */
  export type FormateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Formateur.
     */
    data: XOR<FormateurCreateInput, FormateurUncheckedCreateInput>
  }

  /**
   * Formateur createMany
   */
  export type FormateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formateurs.
     */
    data: FormateurCreateManyInput | FormateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formateur createManyAndReturn
   */
  export type FormateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * The data used to create many Formateurs.
     */
    data: FormateurCreateManyInput | FormateurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Formateur update
   */
  export type FormateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Formateur.
     */
    data: XOR<FormateurUpdateInput, FormateurUncheckedUpdateInput>
    /**
     * Choose, which Formateur to update.
     */
    where: FormateurWhereUniqueInput
  }

  /**
   * Formateur updateMany
   */
  export type FormateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formateurs.
     */
    data: XOR<FormateurUpdateManyMutationInput, FormateurUncheckedUpdateManyInput>
    /**
     * Filter which Formateurs to update
     */
    where?: FormateurWhereInput
    /**
     * Limit how many Formateurs to update.
     */
    limit?: number
  }

  /**
   * Formateur updateManyAndReturn
   */
  export type FormateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * The data used to update Formateurs.
     */
    data: XOR<FormateurUpdateManyMutationInput, FormateurUncheckedUpdateManyInput>
    /**
     * Filter which Formateurs to update
     */
    where?: FormateurWhereInput
    /**
     * Limit how many Formateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Formateur upsert
   */
  export type FormateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Formateur to update in case it exists.
     */
    where: FormateurWhereUniqueInput
    /**
     * In case the Formateur found by the `where` argument doesn't exist, create a new Formateur with this data.
     */
    create: XOR<FormateurCreateInput, FormateurUncheckedCreateInput>
    /**
     * In case the Formateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormateurUpdateInput, FormateurUncheckedUpdateInput>
  }

  /**
   * Formateur delete
   */
  export type FormateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    /**
     * Filter which Formateur to delete.
     */
    where: FormateurWhereUniqueInput
  }

  /**
   * Formateur deleteMany
   */
  export type FormateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formateurs to delete
     */
    where?: FormateurWhereInput
    /**
     * Limit how many Formateurs to delete.
     */
    limit?: number
  }

  /**
   * Formateur.actions
   */
  export type Formateur$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    where?: ActionFormationFormateurWhereInput
    orderBy?: ActionFormationFormateurOrderByWithRelationInput | ActionFormationFormateurOrderByWithRelationInput[]
    cursor?: ActionFormationFormateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionFormationFormateurScalarFieldEnum | ActionFormationFormateurScalarFieldEnum[]
  }

  /**
   * Formateur.seances
   */
  export type Formateur$seancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    where?: SeanceWhereInput
    orderBy?: SeanceOrderByWithRelationInput | SeanceOrderByWithRelationInput[]
    cursor?: SeanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeanceScalarFieldEnum | SeanceScalarFieldEnum[]
  }

  /**
   * Formateur.files
   */
  export type Formateur$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Formateur.presences
   */
  export type Formateur$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    cursor?: PresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Formateur without action
   */
  export type FormateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    user_id: string | null
    entreprise: string | null
    poste: string | null
  }

  export type ParticipantMaxAggregateOutputType = {
    user_id: string | null
    entreprise: string | null
    poste: string | null
  }

  export type ParticipantCountAggregateOutputType = {
    user_id: number
    entreprise: number
    poste: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    user_id?: true
    entreprise?: true
    poste?: true
  }

  export type ParticipantMaxAggregateInputType = {
    user_id?: true
    entreprise?: true
    poste?: true
  }

  export type ParticipantCountAggregateInputType = {
    user_id?: true
    entreprise?: true
    poste?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    user_id: string
    entreprise: string
    poste: string
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    entreprise?: boolean
    poste?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    actions?: boolean | Participant$actionsArgs<ExtArgs>
    attestations?: boolean | Participant$attestationsArgs<ExtArgs>
    presences?: boolean | Participant$presencesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    entreprise?: boolean
    poste?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    entreprise?: boolean
    poste?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    user_id?: boolean
    entreprise?: boolean
    poste?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "entreprise" | "poste", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    actions?: boolean | Participant$actionsArgs<ExtArgs>
    attestations?: boolean | Participant$attestationsArgs<ExtArgs>
    presences?: boolean | Participant$presencesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      actions: Prisma.$ActionFormationParticipantPayload<ExtArgs>[]
      attestations: Prisma.$AttestationPayload<ExtArgs>[]
      presences: Prisma.$PresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      entreprise: string
      poste: string
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const participantWithUser_idOnly = await prisma.participant.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `user_id`
     * const participantWithUser_idOnly = await prisma.participant.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `user_id`
     * const participantWithUser_idOnly = await prisma.participant.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actions<T extends Participant$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attestations<T extends Participant$attestationsArgs<ExtArgs> = {}>(args?: Subset<T, Participant$attestationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presences<T extends Participant$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Participant$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly user_id: FieldRef<"Participant", 'String'>
    readonly entreprise: FieldRef<"Participant", 'String'>
    readonly poste: FieldRef<"Participant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.actions
   */
  export type Participant$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    where?: ActionFormationParticipantWhereInput
    orderBy?: ActionFormationParticipantOrderByWithRelationInput | ActionFormationParticipantOrderByWithRelationInput[]
    cursor?: ActionFormationParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionFormationParticipantScalarFieldEnum | ActionFormationParticipantScalarFieldEnum[]
  }

  /**
   * Participant.attestations
   */
  export type Participant$attestationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    where?: AttestationWhereInput
    orderBy?: AttestationOrderByWithRelationInput | AttestationOrderByWithRelationInput[]
    cursor?: AttestationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttestationScalarFieldEnum | AttestationScalarFieldEnum[]
  }

  /**
   * Participant.presences
   */
  export type Participant$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    cursor?: PresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Domaine
   */

  export type AggregateDomaine = {
    _count: DomaineCountAggregateOutputType | null
    _avg: DomaineAvgAggregateOutputType | null
    _sum: DomaineSumAggregateOutputType | null
    _min: DomaineMinAggregateOutputType | null
    _max: DomaineMaxAggregateOutputType | null
  }

  export type DomaineAvgAggregateOutputType = {
    domaine_id: number | null
  }

  export type DomaineSumAggregateOutputType = {
    domaine_id: number | null
  }

  export type DomaineMinAggregateOutputType = {
    domaine_id: number | null
    libelle_domaine: string | null
  }

  export type DomaineMaxAggregateOutputType = {
    domaine_id: number | null
    libelle_domaine: string | null
  }

  export type DomaineCountAggregateOutputType = {
    domaine_id: number
    libelle_domaine: number
    _all: number
  }


  export type DomaineAvgAggregateInputType = {
    domaine_id?: true
  }

  export type DomaineSumAggregateInputType = {
    domaine_id?: true
  }

  export type DomaineMinAggregateInputType = {
    domaine_id?: true
    libelle_domaine?: true
  }

  export type DomaineMaxAggregateInputType = {
    domaine_id?: true
    libelle_domaine?: true
  }

  export type DomaineCountAggregateInputType = {
    domaine_id?: true
    libelle_domaine?: true
    _all?: true
  }

  export type DomaineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domaine to aggregate.
     */
    where?: DomaineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domaines to fetch.
     */
    orderBy?: DomaineOrderByWithRelationInput | DomaineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomaineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domaines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domaines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domaines
    **/
    _count?: true | DomaineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DomaineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DomaineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomaineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomaineMaxAggregateInputType
  }

  export type GetDomaineAggregateType<T extends DomaineAggregateArgs> = {
        [P in keyof T & keyof AggregateDomaine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomaine[P]>
      : GetScalarType<T[P], AggregateDomaine[P]>
  }




  export type DomaineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomaineWhereInput
    orderBy?: DomaineOrderByWithAggregationInput | DomaineOrderByWithAggregationInput[]
    by: DomaineScalarFieldEnum[] | DomaineScalarFieldEnum
    having?: DomaineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomaineCountAggregateInputType | true
    _avg?: DomaineAvgAggregateInputType
    _sum?: DomaineSumAggregateInputType
    _min?: DomaineMinAggregateInputType
    _max?: DomaineMaxAggregateInputType
  }

  export type DomaineGroupByOutputType = {
    domaine_id: number
    libelle_domaine: string
    _count: DomaineCountAggregateOutputType | null
    _avg: DomaineAvgAggregateOutputType | null
    _sum: DomaineSumAggregateOutputType | null
    _min: DomaineMinAggregateOutputType | null
    _max: DomaineMaxAggregateOutputType | null
  }

  type GetDomaineGroupByPayload<T extends DomaineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomaineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomaineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomaineGroupByOutputType[P]>
            : GetScalarType<T[P], DomaineGroupByOutputType[P]>
        }
      >
    >


  export type DomaineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domaine_id?: boolean
    libelle_domaine?: boolean
    themes?: boolean | Domaine$themesArgs<ExtArgs>
    _count?: boolean | DomaineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domaine"]>

  export type DomaineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domaine_id?: boolean
    libelle_domaine?: boolean
  }, ExtArgs["result"]["domaine"]>

  export type DomaineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domaine_id?: boolean
    libelle_domaine?: boolean
  }, ExtArgs["result"]["domaine"]>

  export type DomaineSelectScalar = {
    domaine_id?: boolean
    libelle_domaine?: boolean
  }

  export type DomaineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"domaine_id" | "libelle_domaine", ExtArgs["result"]["domaine"]>
  export type DomaineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    themes?: boolean | Domaine$themesArgs<ExtArgs>
    _count?: boolean | DomaineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomaineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DomaineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DomainePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domaine"
    objects: {
      themes: Prisma.$ThemePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      domaine_id: number
      libelle_domaine: string
    }, ExtArgs["result"]["domaine"]>
    composites: {}
  }

  type DomaineGetPayload<S extends boolean | null | undefined | DomaineDefaultArgs> = $Result.GetResult<Prisma.$DomainePayload, S>

  type DomaineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomaineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomaineCountAggregateInputType | true
    }

  export interface DomaineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domaine'], meta: { name: 'Domaine' } }
    /**
     * Find zero or one Domaine that matches the filter.
     * @param {DomaineFindUniqueArgs} args - Arguments to find a Domaine
     * @example
     * // Get one Domaine
     * const domaine = await prisma.domaine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomaineFindUniqueArgs>(args: SelectSubset<T, DomaineFindUniqueArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Domaine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomaineFindUniqueOrThrowArgs} args - Arguments to find a Domaine
     * @example
     * // Get one Domaine
     * const domaine = await prisma.domaine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomaineFindUniqueOrThrowArgs>(args: SelectSubset<T, DomaineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domaine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomaineFindFirstArgs} args - Arguments to find a Domaine
     * @example
     * // Get one Domaine
     * const domaine = await prisma.domaine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomaineFindFirstArgs>(args?: SelectSubset<T, DomaineFindFirstArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domaine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomaineFindFirstOrThrowArgs} args - Arguments to find a Domaine
     * @example
     * // Get one Domaine
     * const domaine = await prisma.domaine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomaineFindFirstOrThrowArgs>(args?: SelectSubset<T, DomaineFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Domaines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomaineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domaines
     * const domaines = await prisma.domaine.findMany()
     * 
     * // Get first 10 Domaines
     * const domaines = await prisma.domaine.findMany({ take: 10 })
     * 
     * // Only select the `domaine_id`
     * const domaineWithDomaine_idOnly = await prisma.domaine.findMany({ select: { domaine_id: true } })
     * 
     */
    findMany<T extends DomaineFindManyArgs>(args?: SelectSubset<T, DomaineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Domaine.
     * @param {DomaineCreateArgs} args - Arguments to create a Domaine.
     * @example
     * // Create one Domaine
     * const Domaine = await prisma.domaine.create({
     *   data: {
     *     // ... data to create a Domaine
     *   }
     * })
     * 
     */
    create<T extends DomaineCreateArgs>(args: SelectSubset<T, DomaineCreateArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Domaines.
     * @param {DomaineCreateManyArgs} args - Arguments to create many Domaines.
     * @example
     * // Create many Domaines
     * const domaine = await prisma.domaine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomaineCreateManyArgs>(args?: SelectSubset<T, DomaineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Domaines and returns the data saved in the database.
     * @param {DomaineCreateManyAndReturnArgs} args - Arguments to create many Domaines.
     * @example
     * // Create many Domaines
     * const domaine = await prisma.domaine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Domaines and only return the `domaine_id`
     * const domaineWithDomaine_idOnly = await prisma.domaine.createManyAndReturn({
     *   select: { domaine_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomaineCreateManyAndReturnArgs>(args?: SelectSubset<T, DomaineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Domaine.
     * @param {DomaineDeleteArgs} args - Arguments to delete one Domaine.
     * @example
     * // Delete one Domaine
     * const Domaine = await prisma.domaine.delete({
     *   where: {
     *     // ... filter to delete one Domaine
     *   }
     * })
     * 
     */
    delete<T extends DomaineDeleteArgs>(args: SelectSubset<T, DomaineDeleteArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Domaine.
     * @param {DomaineUpdateArgs} args - Arguments to update one Domaine.
     * @example
     * // Update one Domaine
     * const domaine = await prisma.domaine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomaineUpdateArgs>(args: SelectSubset<T, DomaineUpdateArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Domaines.
     * @param {DomaineDeleteManyArgs} args - Arguments to filter Domaines to delete.
     * @example
     * // Delete a few Domaines
     * const { count } = await prisma.domaine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomaineDeleteManyArgs>(args?: SelectSubset<T, DomaineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domaines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomaineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domaines
     * const domaine = await prisma.domaine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomaineUpdateManyArgs>(args: SelectSubset<T, DomaineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domaines and returns the data updated in the database.
     * @param {DomaineUpdateManyAndReturnArgs} args - Arguments to update many Domaines.
     * @example
     * // Update many Domaines
     * const domaine = await prisma.domaine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Domaines and only return the `domaine_id`
     * const domaineWithDomaine_idOnly = await prisma.domaine.updateManyAndReturn({
     *   select: { domaine_id: true },
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
    updateManyAndReturn<T extends DomaineUpdateManyAndReturnArgs>(args: SelectSubset<T, DomaineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Domaine.
     * @param {DomaineUpsertArgs} args - Arguments to update or create a Domaine.
     * @example
     * // Update or create a Domaine
     * const domaine = await prisma.domaine.upsert({
     *   create: {
     *     // ... data to create a Domaine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domaine we want to update
     *   }
     * })
     */
    upsert<T extends DomaineUpsertArgs>(args: SelectSubset<T, DomaineUpsertArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Domaines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomaineCountArgs} args - Arguments to filter Domaines to count.
     * @example
     * // Count the number of Domaines
     * const count = await prisma.domaine.count({
     *   where: {
     *     // ... the filter for the Domaines we want to count
     *   }
     * })
    **/
    count<T extends DomaineCountArgs>(
      args?: Subset<T, DomaineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomaineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domaine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomaineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DomaineAggregateArgs>(args: Subset<T, DomaineAggregateArgs>): Prisma.PrismaPromise<GetDomaineAggregateType<T>>

    /**
     * Group by Domaine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomaineGroupByArgs} args - Group by arguments.
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
      T extends DomaineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomaineGroupByArgs['orderBy'] }
        : { orderBy?: DomaineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DomaineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomaineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domaine model
   */
  readonly fields: DomaineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domaine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomaineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    themes<T extends Domaine$themesArgs<ExtArgs> = {}>(args?: Subset<T, Domaine$themesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Domaine model
   */
  interface DomaineFieldRefs {
    readonly domaine_id: FieldRef<"Domaine", 'Int'>
    readonly libelle_domaine: FieldRef<"Domaine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Domaine findUnique
   */
  export type DomaineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * Filter, which Domaine to fetch.
     */
    where: DomaineWhereUniqueInput
  }

  /**
   * Domaine findUniqueOrThrow
   */
  export type DomaineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * Filter, which Domaine to fetch.
     */
    where: DomaineWhereUniqueInput
  }

  /**
   * Domaine findFirst
   */
  export type DomaineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * Filter, which Domaine to fetch.
     */
    where?: DomaineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domaines to fetch.
     */
    orderBy?: DomaineOrderByWithRelationInput | DomaineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domaines.
     */
    cursor?: DomaineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domaines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domaines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domaines.
     */
    distinct?: DomaineScalarFieldEnum | DomaineScalarFieldEnum[]
  }

  /**
   * Domaine findFirstOrThrow
   */
  export type DomaineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * Filter, which Domaine to fetch.
     */
    where?: DomaineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domaines to fetch.
     */
    orderBy?: DomaineOrderByWithRelationInput | DomaineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domaines.
     */
    cursor?: DomaineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domaines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domaines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domaines.
     */
    distinct?: DomaineScalarFieldEnum | DomaineScalarFieldEnum[]
  }

  /**
   * Domaine findMany
   */
  export type DomaineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * Filter, which Domaines to fetch.
     */
    where?: DomaineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domaines to fetch.
     */
    orderBy?: DomaineOrderByWithRelationInput | DomaineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domaines.
     */
    cursor?: DomaineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domaines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domaines.
     */
    skip?: number
    distinct?: DomaineScalarFieldEnum | DomaineScalarFieldEnum[]
  }

  /**
   * Domaine create
   */
  export type DomaineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * The data needed to create a Domaine.
     */
    data: XOR<DomaineCreateInput, DomaineUncheckedCreateInput>
  }

  /**
   * Domaine createMany
   */
  export type DomaineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domaines.
     */
    data: DomaineCreateManyInput | DomaineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domaine createManyAndReturn
   */
  export type DomaineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * The data used to create many Domaines.
     */
    data: DomaineCreateManyInput | DomaineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domaine update
   */
  export type DomaineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * The data needed to update a Domaine.
     */
    data: XOR<DomaineUpdateInput, DomaineUncheckedUpdateInput>
    /**
     * Choose, which Domaine to update.
     */
    where: DomaineWhereUniqueInput
  }

  /**
   * Domaine updateMany
   */
  export type DomaineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domaines.
     */
    data: XOR<DomaineUpdateManyMutationInput, DomaineUncheckedUpdateManyInput>
    /**
     * Filter which Domaines to update
     */
    where?: DomaineWhereInput
    /**
     * Limit how many Domaines to update.
     */
    limit?: number
  }

  /**
   * Domaine updateManyAndReturn
   */
  export type DomaineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * The data used to update Domaines.
     */
    data: XOR<DomaineUpdateManyMutationInput, DomaineUncheckedUpdateManyInput>
    /**
     * Filter which Domaines to update
     */
    where?: DomaineWhereInput
    /**
     * Limit how many Domaines to update.
     */
    limit?: number
  }

  /**
   * Domaine upsert
   */
  export type DomaineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * The filter to search for the Domaine to update in case it exists.
     */
    where: DomaineWhereUniqueInput
    /**
     * In case the Domaine found by the `where` argument doesn't exist, create a new Domaine with this data.
     */
    create: XOR<DomaineCreateInput, DomaineUncheckedCreateInput>
    /**
     * In case the Domaine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomaineUpdateInput, DomaineUncheckedUpdateInput>
  }

  /**
   * Domaine delete
   */
  export type DomaineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
    /**
     * Filter which Domaine to delete.
     */
    where: DomaineWhereUniqueInput
  }

  /**
   * Domaine deleteMany
   */
  export type DomaineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domaines to delete
     */
    where?: DomaineWhereInput
    /**
     * Limit how many Domaines to delete.
     */
    limit?: number
  }

  /**
   * Domaine.themes
   */
  export type Domaine$themesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    cursor?: ThemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Domaine without action
   */
  export type DomaineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domaine
     */
    select?: DomaineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domaine
     */
    omit?: DomaineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomaineInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    theme_id: number | null
    domaine_id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    theme_id: number | null
    domaine_id: number | null
  }

  export type ThemeMinAggregateOutputType = {
    theme_id: number | null
    libelle_theme: string | null
    domaine_id: number | null
  }

  export type ThemeMaxAggregateOutputType = {
    theme_id: number | null
    libelle_theme: string | null
    domaine_id: number | null
  }

  export type ThemeCountAggregateOutputType = {
    theme_id: number
    libelle_theme: number
    domaine_id: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    theme_id?: true
    domaine_id?: true
  }

  export type ThemeSumAggregateInputType = {
    theme_id?: true
    domaine_id?: true
  }

  export type ThemeMinAggregateInputType = {
    theme_id?: true
    libelle_theme?: true
    domaine_id?: true
  }

  export type ThemeMaxAggregateInputType = {
    theme_id?: true
    libelle_theme?: true
    domaine_id?: true
  }

  export type ThemeCountAggregateInputType = {
    theme_id?: true
    libelle_theme?: true
    domaine_id?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    theme_id: number
    libelle_theme: string
    domaine_id: number
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    theme_id?: boolean
    libelle_theme?: boolean
    domaine_id?: boolean
    domaine?: boolean | DomaineDefaultArgs<ExtArgs>
    actions?: boolean | Theme$actionsArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    theme_id?: boolean
    libelle_theme?: boolean
    domaine_id?: boolean
    domaine?: boolean | DomaineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    theme_id?: boolean
    libelle_theme?: boolean
    domaine_id?: boolean
    domaine?: boolean | DomaineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type ThemeSelectScalar = {
    theme_id?: boolean
    libelle_theme?: boolean
    domaine_id?: boolean
  }

  export type ThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"theme_id" | "libelle_theme" | "domaine_id", ExtArgs["result"]["theme"]>
  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domaine?: boolean | DomaineDefaultArgs<ExtArgs>
    actions?: boolean | Theme$actionsArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domaine?: boolean | DomaineDefaultArgs<ExtArgs>
  }
  export type ThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domaine?: boolean | DomaineDefaultArgs<ExtArgs>
  }

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      domaine: Prisma.$DomainePayload<ExtArgs>
      actions: Prisma.$ActionFormationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      theme_id: number
      libelle_theme: string
      domaine_id: number
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `theme_id`
     * const themeWithTheme_idOnly = await prisma.theme.findMany({ select: { theme_id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {ThemeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `theme_id`
     * const themeWithTheme_idOnly = await prisma.theme.createManyAndReturn({
     *   select: { theme_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, ThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {ThemeUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `theme_id`
     * const themeWithTheme_idOnly = await prisma.theme.updateManyAndReturn({
     *   select: { theme_id: true },
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
    updateManyAndReturn<T extends ThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, ThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
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
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domaine<T extends DomaineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomaineDefaultArgs<ExtArgs>>): Prisma__DomaineClient<$Result.GetResult<Prisma.$DomainePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actions<T extends Theme$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Theme$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Theme model
   */
  interface ThemeFieldRefs {
    readonly theme_id: FieldRef<"Theme", 'Int'>
    readonly libelle_theme: FieldRef<"Theme", 'String'>
    readonly domaine_id: FieldRef<"Theme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Theme createManyAndReturn
   */
  export type ThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme updateManyAndReturn
   */
  export type ThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to delete.
     */
    limit?: number
  }

  /**
   * Theme.actions
   */
  export type Theme$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    where?: ActionFormationWhereInput
    orderBy?: ActionFormationOrderByWithRelationInput | ActionFormationOrderByWithRelationInput[]
    cursor?: ActionFormationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionFormationScalarFieldEnum | ActionFormationScalarFieldEnum[]
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model ActionFormation
   */

  export type AggregateActionFormation = {
    _count: ActionFormationCountAggregateOutputType | null
    _avg: ActionFormationAvgAggregateOutputType | null
    _sum: ActionFormationSumAggregateOutputType | null
    _min: ActionFormationMinAggregateOutputType | null
    _max: ActionFormationMaxAggregateOutputType | null
  }

  export type ActionFormationAvgAggregateOutputType = {
    action_id: number | null
    duree_jours: number | null
    duree_heures: number | null
    nb_seances: number | null
    nb_participants_prevu: number | null
    theme_id: number | null
  }

  export type ActionFormationSumAggregateOutputType = {
    action_id: number | null
    duree_jours: number | null
    duree_heures: number | null
    nb_seances: number | null
    nb_participants_prevu: number | null
    theme_id: number | null
  }

  export type ActionFormationMinAggregateOutputType = {
    action_id: number | null
    type_action: string | null
    date_debut: Date | null
    date_fin: Date | null
    duree_jours: number | null
    duree_heures: number | null
    nb_seances: number | null
    lieu: string | null
    nb_participants_prevu: number | null
    theme_id: number | null
  }

  export type ActionFormationMaxAggregateOutputType = {
    action_id: number | null
    type_action: string | null
    date_debut: Date | null
    date_fin: Date | null
    duree_jours: number | null
    duree_heures: number | null
    nb_seances: number | null
    lieu: string | null
    nb_participants_prevu: number | null
    theme_id: number | null
  }

  export type ActionFormationCountAggregateOutputType = {
    action_id: number
    type_action: number
    date_debut: number
    date_fin: number
    duree_jours: number
    duree_heures: number
    nb_seances: number
    lieu: number
    nb_participants_prevu: number
    theme_id: number
    _all: number
  }


  export type ActionFormationAvgAggregateInputType = {
    action_id?: true
    duree_jours?: true
    duree_heures?: true
    nb_seances?: true
    nb_participants_prevu?: true
    theme_id?: true
  }

  export type ActionFormationSumAggregateInputType = {
    action_id?: true
    duree_jours?: true
    duree_heures?: true
    nb_seances?: true
    nb_participants_prevu?: true
    theme_id?: true
  }

  export type ActionFormationMinAggregateInputType = {
    action_id?: true
    type_action?: true
    date_debut?: true
    date_fin?: true
    duree_jours?: true
    duree_heures?: true
    nb_seances?: true
    lieu?: true
    nb_participants_prevu?: true
    theme_id?: true
  }

  export type ActionFormationMaxAggregateInputType = {
    action_id?: true
    type_action?: true
    date_debut?: true
    date_fin?: true
    duree_jours?: true
    duree_heures?: true
    nb_seances?: true
    lieu?: true
    nb_participants_prevu?: true
    theme_id?: true
  }

  export type ActionFormationCountAggregateInputType = {
    action_id?: true
    type_action?: true
    date_debut?: true
    date_fin?: true
    duree_jours?: true
    duree_heures?: true
    nb_seances?: true
    lieu?: true
    nb_participants_prevu?: true
    theme_id?: true
    _all?: true
  }

  export type ActionFormationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionFormation to aggregate.
     */
    where?: ActionFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormations to fetch.
     */
    orderBy?: ActionFormationOrderByWithRelationInput | ActionFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionFormations
    **/
    _count?: true | ActionFormationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionFormationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionFormationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionFormationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionFormationMaxAggregateInputType
  }

  export type GetActionFormationAggregateType<T extends ActionFormationAggregateArgs> = {
        [P in keyof T & keyof AggregateActionFormation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionFormation[P]>
      : GetScalarType<T[P], AggregateActionFormation[P]>
  }




  export type ActionFormationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationWhereInput
    orderBy?: ActionFormationOrderByWithAggregationInput | ActionFormationOrderByWithAggregationInput[]
    by: ActionFormationScalarFieldEnum[] | ActionFormationScalarFieldEnum
    having?: ActionFormationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionFormationCountAggregateInputType | true
    _avg?: ActionFormationAvgAggregateInputType
    _sum?: ActionFormationSumAggregateInputType
    _min?: ActionFormationMinAggregateInputType
    _max?: ActionFormationMaxAggregateInputType
  }

  export type ActionFormationGroupByOutputType = {
    action_id: number
    type_action: string
    date_debut: Date
    date_fin: Date
    duree_jours: number | null
    duree_heures: number | null
    nb_seances: number | null
    lieu: string
    nb_participants_prevu: number | null
    theme_id: number
    _count: ActionFormationCountAggregateOutputType | null
    _avg: ActionFormationAvgAggregateOutputType | null
    _sum: ActionFormationSumAggregateOutputType | null
    _min: ActionFormationMinAggregateOutputType | null
    _max: ActionFormationMaxAggregateOutputType | null
  }

  type GetActionFormationGroupByPayload<T extends ActionFormationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionFormationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionFormationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionFormationGroupByOutputType[P]>
            : GetScalarType<T[P], ActionFormationGroupByOutputType[P]>
        }
      >
    >


  export type ActionFormationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    type_action?: boolean
    date_debut?: boolean
    date_fin?: boolean
    duree_jours?: boolean
    duree_heures?: boolean
    nb_seances?: boolean
    lieu?: boolean
    nb_participants_prevu?: boolean
    theme_id?: boolean
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    formateurs?: boolean | ActionFormation$formateursArgs<ExtArgs>
    participants?: boolean | ActionFormation$participantsArgs<ExtArgs>
    attestations?: boolean | ActionFormation$attestationsArgs<ExtArgs>
    seances?: boolean | ActionFormation$seancesArgs<ExtArgs>
    files?: boolean | ActionFormation$filesArgs<ExtArgs>
    _count?: boolean | ActionFormationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormation"]>

  export type ActionFormationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    type_action?: boolean
    date_debut?: boolean
    date_fin?: boolean
    duree_jours?: boolean
    duree_heures?: boolean
    nb_seances?: boolean
    lieu?: boolean
    nb_participants_prevu?: boolean
    theme_id?: boolean
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormation"]>

  export type ActionFormationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    type_action?: boolean
    date_debut?: boolean
    date_fin?: boolean
    duree_jours?: boolean
    duree_heures?: boolean
    nb_seances?: boolean
    lieu?: boolean
    nb_participants_prevu?: boolean
    theme_id?: boolean
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormation"]>

  export type ActionFormationSelectScalar = {
    action_id?: boolean
    type_action?: boolean
    date_debut?: boolean
    date_fin?: boolean
    duree_jours?: boolean
    duree_heures?: boolean
    nb_seances?: boolean
    lieu?: boolean
    nb_participants_prevu?: boolean
    theme_id?: boolean
  }

  export type ActionFormationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"action_id" | "type_action" | "date_debut" | "date_fin" | "duree_jours" | "duree_heures" | "nb_seances" | "lieu" | "nb_participants_prevu" | "theme_id", ExtArgs["result"]["actionFormation"]>
  export type ActionFormationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
    formateurs?: boolean | ActionFormation$formateursArgs<ExtArgs>
    participants?: boolean | ActionFormation$participantsArgs<ExtArgs>
    attestations?: boolean | ActionFormation$attestationsArgs<ExtArgs>
    seances?: boolean | ActionFormation$seancesArgs<ExtArgs>
    files?: boolean | ActionFormation$filesArgs<ExtArgs>
    _count?: boolean | ActionFormationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActionFormationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }
  export type ActionFormationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | ThemeDefaultArgs<ExtArgs>
  }

  export type $ActionFormationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionFormation"
    objects: {
      theme: Prisma.$ThemePayload<ExtArgs>
      formateurs: Prisma.$ActionFormationFormateurPayload<ExtArgs>[]
      participants: Prisma.$ActionFormationParticipantPayload<ExtArgs>[]
      attestations: Prisma.$AttestationPayload<ExtArgs>[]
      seances: Prisma.$SeancePayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      action_id: number
      type_action: string
      date_debut: Date
      date_fin: Date
      duree_jours: number | null
      duree_heures: number | null
      nb_seances: number | null
      lieu: string
      nb_participants_prevu: number | null
      theme_id: number
    }, ExtArgs["result"]["actionFormation"]>
    composites: {}
  }

  type ActionFormationGetPayload<S extends boolean | null | undefined | ActionFormationDefaultArgs> = $Result.GetResult<Prisma.$ActionFormationPayload, S>

  type ActionFormationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFormationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionFormationCountAggregateInputType | true
    }

  export interface ActionFormationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionFormation'], meta: { name: 'ActionFormation' } }
    /**
     * Find zero or one ActionFormation that matches the filter.
     * @param {ActionFormationFindUniqueArgs} args - Arguments to find a ActionFormation
     * @example
     * // Get one ActionFormation
     * const actionFormation = await prisma.actionFormation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFormationFindUniqueArgs>(args: SelectSubset<T, ActionFormationFindUniqueArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionFormation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFormationFindUniqueOrThrowArgs} args - Arguments to find a ActionFormation
     * @example
     * // Get one ActionFormation
     * const actionFormation = await prisma.actionFormation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFormationFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFormationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionFormation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFindFirstArgs} args - Arguments to find a ActionFormation
     * @example
     * // Get one ActionFormation
     * const actionFormation = await prisma.actionFormation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFormationFindFirstArgs>(args?: SelectSubset<T, ActionFormationFindFirstArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionFormation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFindFirstOrThrowArgs} args - Arguments to find a ActionFormation
     * @example
     * // Get one ActionFormation
     * const actionFormation = await prisma.actionFormation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFormationFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFormationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionFormations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionFormations
     * const actionFormations = await prisma.actionFormation.findMany()
     * 
     * // Get first 10 ActionFormations
     * const actionFormations = await prisma.actionFormation.findMany({ take: 10 })
     * 
     * // Only select the `action_id`
     * const actionFormationWithAction_idOnly = await prisma.actionFormation.findMany({ select: { action_id: true } })
     * 
     */
    findMany<T extends ActionFormationFindManyArgs>(args?: SelectSubset<T, ActionFormationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionFormation.
     * @param {ActionFormationCreateArgs} args - Arguments to create a ActionFormation.
     * @example
     * // Create one ActionFormation
     * const ActionFormation = await prisma.actionFormation.create({
     *   data: {
     *     // ... data to create a ActionFormation
     *   }
     * })
     * 
     */
    create<T extends ActionFormationCreateArgs>(args: SelectSubset<T, ActionFormationCreateArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionFormations.
     * @param {ActionFormationCreateManyArgs} args - Arguments to create many ActionFormations.
     * @example
     * // Create many ActionFormations
     * const actionFormation = await prisma.actionFormation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionFormationCreateManyArgs>(args?: SelectSubset<T, ActionFormationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionFormations and returns the data saved in the database.
     * @param {ActionFormationCreateManyAndReturnArgs} args - Arguments to create many ActionFormations.
     * @example
     * // Create many ActionFormations
     * const actionFormation = await prisma.actionFormation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionFormations and only return the `action_id`
     * const actionFormationWithAction_idOnly = await prisma.actionFormation.createManyAndReturn({
     *   select: { action_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionFormationCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionFormationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionFormation.
     * @param {ActionFormationDeleteArgs} args - Arguments to delete one ActionFormation.
     * @example
     * // Delete one ActionFormation
     * const ActionFormation = await prisma.actionFormation.delete({
     *   where: {
     *     // ... filter to delete one ActionFormation
     *   }
     * })
     * 
     */
    delete<T extends ActionFormationDeleteArgs>(args: SelectSubset<T, ActionFormationDeleteArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionFormation.
     * @param {ActionFormationUpdateArgs} args - Arguments to update one ActionFormation.
     * @example
     * // Update one ActionFormation
     * const actionFormation = await prisma.actionFormation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionFormationUpdateArgs>(args: SelectSubset<T, ActionFormationUpdateArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionFormations.
     * @param {ActionFormationDeleteManyArgs} args - Arguments to filter ActionFormations to delete.
     * @example
     * // Delete a few ActionFormations
     * const { count } = await prisma.actionFormation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionFormationDeleteManyArgs>(args?: SelectSubset<T, ActionFormationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionFormations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionFormations
     * const actionFormation = await prisma.actionFormation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionFormationUpdateManyArgs>(args: SelectSubset<T, ActionFormationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionFormations and returns the data updated in the database.
     * @param {ActionFormationUpdateManyAndReturnArgs} args - Arguments to update many ActionFormations.
     * @example
     * // Update many ActionFormations
     * const actionFormation = await prisma.actionFormation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionFormations and only return the `action_id`
     * const actionFormationWithAction_idOnly = await prisma.actionFormation.updateManyAndReturn({
     *   select: { action_id: true },
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
    updateManyAndReturn<T extends ActionFormationUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionFormationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionFormation.
     * @param {ActionFormationUpsertArgs} args - Arguments to update or create a ActionFormation.
     * @example
     * // Update or create a ActionFormation
     * const actionFormation = await prisma.actionFormation.upsert({
     *   create: {
     *     // ... data to create a ActionFormation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionFormation we want to update
     *   }
     * })
     */
    upsert<T extends ActionFormationUpsertArgs>(args: SelectSubset<T, ActionFormationUpsertArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionFormations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationCountArgs} args - Arguments to filter ActionFormations to count.
     * @example
     * // Count the number of ActionFormations
     * const count = await prisma.actionFormation.count({
     *   where: {
     *     // ... the filter for the ActionFormations we want to count
     *   }
     * })
    **/
    count<T extends ActionFormationCountArgs>(
      args?: Subset<T, ActionFormationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionFormationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionFormation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionFormationAggregateArgs>(args: Subset<T, ActionFormationAggregateArgs>): Prisma.PrismaPromise<GetActionFormationAggregateType<T>>

    /**
     * Group by ActionFormation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationGroupByArgs} args - Group by arguments.
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
      T extends ActionFormationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionFormationGroupByArgs['orderBy'] }
        : { orderBy?: ActionFormationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionFormationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionFormationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionFormation model
   */
  readonly fields: ActionFormationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionFormation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionFormationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    theme<T extends ThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThemeDefaultArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formateurs<T extends ActionFormation$formateursArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormation$formateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends ActionFormation$participantsArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormation$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attestations<T extends ActionFormation$attestationsArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormation$attestationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seances<T extends ActionFormation$seancesArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormation$seancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends ActionFormation$filesArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormation$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ActionFormation model
   */
  interface ActionFormationFieldRefs {
    readonly action_id: FieldRef<"ActionFormation", 'Int'>
    readonly type_action: FieldRef<"ActionFormation", 'String'>
    readonly date_debut: FieldRef<"ActionFormation", 'DateTime'>
    readonly date_fin: FieldRef<"ActionFormation", 'DateTime'>
    readonly duree_jours: FieldRef<"ActionFormation", 'Int'>
    readonly duree_heures: FieldRef<"ActionFormation", 'Int'>
    readonly nb_seances: FieldRef<"ActionFormation", 'Int'>
    readonly lieu: FieldRef<"ActionFormation", 'String'>
    readonly nb_participants_prevu: FieldRef<"ActionFormation", 'Int'>
    readonly theme_id: FieldRef<"ActionFormation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ActionFormation findUnique
   */
  export type ActionFormationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormation to fetch.
     */
    where: ActionFormationWhereUniqueInput
  }

  /**
   * ActionFormation findUniqueOrThrow
   */
  export type ActionFormationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormation to fetch.
     */
    where: ActionFormationWhereUniqueInput
  }

  /**
   * ActionFormation findFirst
   */
  export type ActionFormationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormation to fetch.
     */
    where?: ActionFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormations to fetch.
     */
    orderBy?: ActionFormationOrderByWithRelationInput | ActionFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionFormations.
     */
    cursor?: ActionFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionFormations.
     */
    distinct?: ActionFormationScalarFieldEnum | ActionFormationScalarFieldEnum[]
  }

  /**
   * ActionFormation findFirstOrThrow
   */
  export type ActionFormationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormation to fetch.
     */
    where?: ActionFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormations to fetch.
     */
    orderBy?: ActionFormationOrderByWithRelationInput | ActionFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionFormations.
     */
    cursor?: ActionFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionFormations.
     */
    distinct?: ActionFormationScalarFieldEnum | ActionFormationScalarFieldEnum[]
  }

  /**
   * ActionFormation findMany
   */
  export type ActionFormationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormations to fetch.
     */
    where?: ActionFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormations to fetch.
     */
    orderBy?: ActionFormationOrderByWithRelationInput | ActionFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionFormations.
     */
    cursor?: ActionFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormations.
     */
    skip?: number
    distinct?: ActionFormationScalarFieldEnum | ActionFormationScalarFieldEnum[]
  }

  /**
   * ActionFormation create
   */
  export type ActionFormationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionFormation.
     */
    data: XOR<ActionFormationCreateInput, ActionFormationUncheckedCreateInput>
  }

  /**
   * ActionFormation createMany
   */
  export type ActionFormationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionFormations.
     */
    data: ActionFormationCreateManyInput | ActionFormationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionFormation createManyAndReturn
   */
  export type ActionFormationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * The data used to create many ActionFormations.
     */
    data: ActionFormationCreateManyInput | ActionFormationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionFormation update
   */
  export type ActionFormationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionFormation.
     */
    data: XOR<ActionFormationUpdateInput, ActionFormationUncheckedUpdateInput>
    /**
     * Choose, which ActionFormation to update.
     */
    where: ActionFormationWhereUniqueInput
  }

  /**
   * ActionFormation updateMany
   */
  export type ActionFormationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionFormations.
     */
    data: XOR<ActionFormationUpdateManyMutationInput, ActionFormationUncheckedUpdateManyInput>
    /**
     * Filter which ActionFormations to update
     */
    where?: ActionFormationWhereInput
    /**
     * Limit how many ActionFormations to update.
     */
    limit?: number
  }

  /**
   * ActionFormation updateManyAndReturn
   */
  export type ActionFormationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * The data used to update ActionFormations.
     */
    data: XOR<ActionFormationUpdateManyMutationInput, ActionFormationUncheckedUpdateManyInput>
    /**
     * Filter which ActionFormations to update
     */
    where?: ActionFormationWhereInput
    /**
     * Limit how many ActionFormations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionFormation upsert
   */
  export type ActionFormationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionFormation to update in case it exists.
     */
    where: ActionFormationWhereUniqueInput
    /**
     * In case the ActionFormation found by the `where` argument doesn't exist, create a new ActionFormation with this data.
     */
    create: XOR<ActionFormationCreateInput, ActionFormationUncheckedCreateInput>
    /**
     * In case the ActionFormation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionFormationUpdateInput, ActionFormationUncheckedUpdateInput>
  }

  /**
   * ActionFormation delete
   */
  export type ActionFormationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    /**
     * Filter which ActionFormation to delete.
     */
    where: ActionFormationWhereUniqueInput
  }

  /**
   * ActionFormation deleteMany
   */
  export type ActionFormationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionFormations to delete
     */
    where?: ActionFormationWhereInput
    /**
     * Limit how many ActionFormations to delete.
     */
    limit?: number
  }

  /**
   * ActionFormation.formateurs
   */
  export type ActionFormation$formateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    where?: ActionFormationFormateurWhereInput
    orderBy?: ActionFormationFormateurOrderByWithRelationInput | ActionFormationFormateurOrderByWithRelationInput[]
    cursor?: ActionFormationFormateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionFormationFormateurScalarFieldEnum | ActionFormationFormateurScalarFieldEnum[]
  }

  /**
   * ActionFormation.participants
   */
  export type ActionFormation$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    where?: ActionFormationParticipantWhereInput
    orderBy?: ActionFormationParticipantOrderByWithRelationInput | ActionFormationParticipantOrderByWithRelationInput[]
    cursor?: ActionFormationParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionFormationParticipantScalarFieldEnum | ActionFormationParticipantScalarFieldEnum[]
  }

  /**
   * ActionFormation.attestations
   */
  export type ActionFormation$attestationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    where?: AttestationWhereInput
    orderBy?: AttestationOrderByWithRelationInput | AttestationOrderByWithRelationInput[]
    cursor?: AttestationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttestationScalarFieldEnum | AttestationScalarFieldEnum[]
  }

  /**
   * ActionFormation.seances
   */
  export type ActionFormation$seancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    where?: SeanceWhereInput
    orderBy?: SeanceOrderByWithRelationInput | SeanceOrderByWithRelationInput[]
    cursor?: SeanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeanceScalarFieldEnum | SeanceScalarFieldEnum[]
  }

  /**
   * ActionFormation.files
   */
  export type ActionFormation$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * ActionFormation without action
   */
  export type ActionFormationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
  }


  /**
   * Model Seance
   */

  export type AggregateSeance = {
    _count: SeanceCountAggregateOutputType | null
    _avg: SeanceAvgAggregateOutputType | null
    _sum: SeanceSumAggregateOutputType | null
    _min: SeanceMinAggregateOutputType | null
    _max: SeanceMaxAggregateOutputType | null
  }

  export type SeanceAvgAggregateOutputType = {
    seance_id: number | null
    action_id: number | null
    duree_heures: number | null
  }

  export type SeanceSumAggregateOutputType = {
    seance_id: number | null
    action_id: number | null
    duree_heures: number | null
  }

  export type SeanceMinAggregateOutputType = {
    seance_id: number | null
    action_id: number | null
    date: Date | null
    heure: string | null
    duree_heures: number | null
    statut: $Enums.SeanceStatut | null
    formateur_id: string | null
  }

  export type SeanceMaxAggregateOutputType = {
    seance_id: number | null
    action_id: number | null
    date: Date | null
    heure: string | null
    duree_heures: number | null
    statut: $Enums.SeanceStatut | null
    formateur_id: string | null
  }

  export type SeanceCountAggregateOutputType = {
    seance_id: number
    action_id: number
    date: number
    heure: number
    duree_heures: number
    statut: number
    formateur_id: number
    _all: number
  }


  export type SeanceAvgAggregateInputType = {
    seance_id?: true
    action_id?: true
    duree_heures?: true
  }

  export type SeanceSumAggregateInputType = {
    seance_id?: true
    action_id?: true
    duree_heures?: true
  }

  export type SeanceMinAggregateInputType = {
    seance_id?: true
    action_id?: true
    date?: true
    heure?: true
    duree_heures?: true
    statut?: true
    formateur_id?: true
  }

  export type SeanceMaxAggregateInputType = {
    seance_id?: true
    action_id?: true
    date?: true
    heure?: true
    duree_heures?: true
    statut?: true
    formateur_id?: true
  }

  export type SeanceCountAggregateInputType = {
    seance_id?: true
    action_id?: true
    date?: true
    heure?: true
    duree_heures?: true
    statut?: true
    formateur_id?: true
    _all?: true
  }

  export type SeanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seance to aggregate.
     */
    where?: SeanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seances to fetch.
     */
    orderBy?: SeanceOrderByWithRelationInput | SeanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seances
    **/
    _count?: true | SeanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeanceMaxAggregateInputType
  }

  export type GetSeanceAggregateType<T extends SeanceAggregateArgs> = {
        [P in keyof T & keyof AggregateSeance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeance[P]>
      : GetScalarType<T[P], AggregateSeance[P]>
  }




  export type SeanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeanceWhereInput
    orderBy?: SeanceOrderByWithAggregationInput | SeanceOrderByWithAggregationInput[]
    by: SeanceScalarFieldEnum[] | SeanceScalarFieldEnum
    having?: SeanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeanceCountAggregateInputType | true
    _avg?: SeanceAvgAggregateInputType
    _sum?: SeanceSumAggregateInputType
    _min?: SeanceMinAggregateInputType
    _max?: SeanceMaxAggregateInputType
  }

  export type SeanceGroupByOutputType = {
    seance_id: number
    action_id: number
    date: Date | null
    heure: string | null
    duree_heures: number | null
    statut: $Enums.SeanceStatut
    formateur_id: string
    _count: SeanceCountAggregateOutputType | null
    _avg: SeanceAvgAggregateOutputType | null
    _sum: SeanceSumAggregateOutputType | null
    _min: SeanceMinAggregateOutputType | null
    _max: SeanceMaxAggregateOutputType | null
  }

  type GetSeanceGroupByPayload<T extends SeanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeanceGroupByOutputType[P]>
            : GetScalarType<T[P], SeanceGroupByOutputType[P]>
        }
      >
    >


  export type SeanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seance_id?: boolean
    action_id?: boolean
    date?: boolean
    heure?: boolean
    duree_heures?: boolean
    statut?: boolean
    formateur_id?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
    presences?: boolean | Seance$presencesArgs<ExtArgs>
    _count?: boolean | SeanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seance"]>

  export type SeanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seance_id?: boolean
    action_id?: boolean
    date?: boolean
    heure?: boolean
    duree_heures?: boolean
    statut?: boolean
    formateur_id?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seance"]>

  export type SeanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seance_id?: boolean
    action_id?: boolean
    date?: boolean
    heure?: boolean
    duree_heures?: boolean
    statut?: boolean
    formateur_id?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seance"]>

  export type SeanceSelectScalar = {
    seance_id?: boolean
    action_id?: boolean
    date?: boolean
    heure?: boolean
    duree_heures?: boolean
    statut?: boolean
    formateur_id?: boolean
  }

  export type SeanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seance_id" | "action_id" | "date" | "heure" | "duree_heures" | "statut" | "formateur_id", ExtArgs["result"]["seance"]>
  export type SeanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
    presences?: boolean | Seance$presencesArgs<ExtArgs>
    _count?: boolean | SeanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }
  export type SeanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }

  export type $SeancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seance"
    objects: {
      action: Prisma.$ActionFormationPayload<ExtArgs>
      formateur: Prisma.$FormateurPayload<ExtArgs>
      presences: Prisma.$PresencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      seance_id: number
      action_id: number
      date: Date | null
      heure: string | null
      duree_heures: number | null
      statut: $Enums.SeanceStatut
      formateur_id: string
    }, ExtArgs["result"]["seance"]>
    composites: {}
  }

  type SeanceGetPayload<S extends boolean | null | undefined | SeanceDefaultArgs> = $Result.GetResult<Prisma.$SeancePayload, S>

  type SeanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeanceCountAggregateInputType | true
    }

  export interface SeanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seance'], meta: { name: 'Seance' } }
    /**
     * Find zero or one Seance that matches the filter.
     * @param {SeanceFindUniqueArgs} args - Arguments to find a Seance
     * @example
     * // Get one Seance
     * const seance = await prisma.seance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeanceFindUniqueArgs>(args: SelectSubset<T, SeanceFindUniqueArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeanceFindUniqueOrThrowArgs} args - Arguments to find a Seance
     * @example
     * // Get one Seance
     * const seance = await prisma.seance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeanceFindUniqueOrThrowArgs>(args: SelectSubset<T, SeanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeanceFindFirstArgs} args - Arguments to find a Seance
     * @example
     * // Get one Seance
     * const seance = await prisma.seance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeanceFindFirstArgs>(args?: SelectSubset<T, SeanceFindFirstArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeanceFindFirstOrThrowArgs} args - Arguments to find a Seance
     * @example
     * // Get one Seance
     * const seance = await prisma.seance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeanceFindFirstOrThrowArgs>(args?: SelectSubset<T, SeanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seances
     * const seances = await prisma.seance.findMany()
     * 
     * // Get first 10 Seances
     * const seances = await prisma.seance.findMany({ take: 10 })
     * 
     * // Only select the `seance_id`
     * const seanceWithSeance_idOnly = await prisma.seance.findMany({ select: { seance_id: true } })
     * 
     */
    findMany<T extends SeanceFindManyArgs>(args?: SelectSubset<T, SeanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seance.
     * @param {SeanceCreateArgs} args - Arguments to create a Seance.
     * @example
     * // Create one Seance
     * const Seance = await prisma.seance.create({
     *   data: {
     *     // ... data to create a Seance
     *   }
     * })
     * 
     */
    create<T extends SeanceCreateArgs>(args: SelectSubset<T, SeanceCreateArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seances.
     * @param {SeanceCreateManyArgs} args - Arguments to create many Seances.
     * @example
     * // Create many Seances
     * const seance = await prisma.seance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeanceCreateManyArgs>(args?: SelectSubset<T, SeanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seances and returns the data saved in the database.
     * @param {SeanceCreateManyAndReturnArgs} args - Arguments to create many Seances.
     * @example
     * // Create many Seances
     * const seance = await prisma.seance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seances and only return the `seance_id`
     * const seanceWithSeance_idOnly = await prisma.seance.createManyAndReturn({
     *   select: { seance_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeanceCreateManyAndReturnArgs>(args?: SelectSubset<T, SeanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seance.
     * @param {SeanceDeleteArgs} args - Arguments to delete one Seance.
     * @example
     * // Delete one Seance
     * const Seance = await prisma.seance.delete({
     *   where: {
     *     // ... filter to delete one Seance
     *   }
     * })
     * 
     */
    delete<T extends SeanceDeleteArgs>(args: SelectSubset<T, SeanceDeleteArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seance.
     * @param {SeanceUpdateArgs} args - Arguments to update one Seance.
     * @example
     * // Update one Seance
     * const seance = await prisma.seance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeanceUpdateArgs>(args: SelectSubset<T, SeanceUpdateArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seances.
     * @param {SeanceDeleteManyArgs} args - Arguments to filter Seances to delete.
     * @example
     * // Delete a few Seances
     * const { count } = await prisma.seance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeanceDeleteManyArgs>(args?: SelectSubset<T, SeanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seances
     * const seance = await prisma.seance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeanceUpdateManyArgs>(args: SelectSubset<T, SeanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seances and returns the data updated in the database.
     * @param {SeanceUpdateManyAndReturnArgs} args - Arguments to update many Seances.
     * @example
     * // Update many Seances
     * const seance = await prisma.seance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seances and only return the `seance_id`
     * const seanceWithSeance_idOnly = await prisma.seance.updateManyAndReturn({
     *   select: { seance_id: true },
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
    updateManyAndReturn<T extends SeanceUpdateManyAndReturnArgs>(args: SelectSubset<T, SeanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seance.
     * @param {SeanceUpsertArgs} args - Arguments to update or create a Seance.
     * @example
     * // Update or create a Seance
     * const seance = await prisma.seance.upsert({
     *   create: {
     *     // ... data to create a Seance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seance we want to update
     *   }
     * })
     */
    upsert<T extends SeanceUpsertArgs>(args: SelectSubset<T, SeanceUpsertArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeanceCountArgs} args - Arguments to filter Seances to count.
     * @example
     * // Count the number of Seances
     * const count = await prisma.seance.count({
     *   where: {
     *     // ... the filter for the Seances we want to count
     *   }
     * })
    **/
    count<T extends SeanceCountArgs>(
      args?: Subset<T, SeanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeanceAggregateArgs>(args: Subset<T, SeanceAggregateArgs>): Prisma.PrismaPromise<GetSeanceAggregateType<T>>

    /**
     * Group by Seance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeanceGroupByArgs} args - Group by arguments.
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
      T extends SeanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeanceGroupByArgs['orderBy'] }
        : { orderBy?: SeanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seance model
   */
  readonly fields: SeanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionFormationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormationDefaultArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formateur<T extends FormateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormateurDefaultArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    presences<T extends Seance$presencesArgs<ExtArgs> = {}>(args?: Subset<T, Seance$presencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Seance model
   */
  interface SeanceFieldRefs {
    readonly seance_id: FieldRef<"Seance", 'Int'>
    readonly action_id: FieldRef<"Seance", 'Int'>
    readonly date: FieldRef<"Seance", 'DateTime'>
    readonly heure: FieldRef<"Seance", 'String'>
    readonly duree_heures: FieldRef<"Seance", 'Int'>
    readonly statut: FieldRef<"Seance", 'SeanceStatut'>
    readonly formateur_id: FieldRef<"Seance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seance findUnique
   */
  export type SeanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * Filter, which Seance to fetch.
     */
    where: SeanceWhereUniqueInput
  }

  /**
   * Seance findUniqueOrThrow
   */
  export type SeanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * Filter, which Seance to fetch.
     */
    where: SeanceWhereUniqueInput
  }

  /**
   * Seance findFirst
   */
  export type SeanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * Filter, which Seance to fetch.
     */
    where?: SeanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seances to fetch.
     */
    orderBy?: SeanceOrderByWithRelationInput | SeanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seances.
     */
    cursor?: SeanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seances.
     */
    distinct?: SeanceScalarFieldEnum | SeanceScalarFieldEnum[]
  }

  /**
   * Seance findFirstOrThrow
   */
  export type SeanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * Filter, which Seance to fetch.
     */
    where?: SeanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seances to fetch.
     */
    orderBy?: SeanceOrderByWithRelationInput | SeanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seances.
     */
    cursor?: SeanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seances.
     */
    distinct?: SeanceScalarFieldEnum | SeanceScalarFieldEnum[]
  }

  /**
   * Seance findMany
   */
  export type SeanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * Filter, which Seances to fetch.
     */
    where?: SeanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seances to fetch.
     */
    orderBy?: SeanceOrderByWithRelationInput | SeanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seances.
     */
    cursor?: SeanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seances.
     */
    skip?: number
    distinct?: SeanceScalarFieldEnum | SeanceScalarFieldEnum[]
  }

  /**
   * Seance create
   */
  export type SeanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Seance.
     */
    data: XOR<SeanceCreateInput, SeanceUncheckedCreateInput>
  }

  /**
   * Seance createMany
   */
  export type SeanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seances.
     */
    data: SeanceCreateManyInput | SeanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seance createManyAndReturn
   */
  export type SeanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * The data used to create many Seances.
     */
    data: SeanceCreateManyInput | SeanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seance update
   */
  export type SeanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Seance.
     */
    data: XOR<SeanceUpdateInput, SeanceUncheckedUpdateInput>
    /**
     * Choose, which Seance to update.
     */
    where: SeanceWhereUniqueInput
  }

  /**
   * Seance updateMany
   */
  export type SeanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seances.
     */
    data: XOR<SeanceUpdateManyMutationInput, SeanceUncheckedUpdateManyInput>
    /**
     * Filter which Seances to update
     */
    where?: SeanceWhereInput
    /**
     * Limit how many Seances to update.
     */
    limit?: number
  }

  /**
   * Seance updateManyAndReturn
   */
  export type SeanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * The data used to update Seances.
     */
    data: XOR<SeanceUpdateManyMutationInput, SeanceUncheckedUpdateManyInput>
    /**
     * Filter which Seances to update
     */
    where?: SeanceWhereInput
    /**
     * Limit how many Seances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seance upsert
   */
  export type SeanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Seance to update in case it exists.
     */
    where: SeanceWhereUniqueInput
    /**
     * In case the Seance found by the `where` argument doesn't exist, create a new Seance with this data.
     */
    create: XOR<SeanceCreateInput, SeanceUncheckedCreateInput>
    /**
     * In case the Seance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeanceUpdateInput, SeanceUncheckedUpdateInput>
  }

  /**
   * Seance delete
   */
  export type SeanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
    /**
     * Filter which Seance to delete.
     */
    where: SeanceWhereUniqueInput
  }

  /**
   * Seance deleteMany
   */
  export type SeanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seances to delete
     */
    where?: SeanceWhereInput
    /**
     * Limit how many Seances to delete.
     */
    limit?: number
  }

  /**
   * Seance.presences
   */
  export type Seance$presencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    cursor?: PresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Seance without action
   */
  export type SeanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seance
     */
    select?: SeanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seance
     */
    omit?: SeanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeanceInclude<ExtArgs> | null
  }


  /**
   * Model ActionFormationFormateur
   */

  export type AggregateActionFormationFormateur = {
    _count: ActionFormationFormateurCountAggregateOutputType | null
    _avg: ActionFormationFormateurAvgAggregateOutputType | null
    _sum: ActionFormationFormateurSumAggregateOutputType | null
    _min: ActionFormationFormateurMinAggregateOutputType | null
    _max: ActionFormationFormateurMaxAggregateOutputType | null
  }

  export type ActionFormationFormateurAvgAggregateOutputType = {
    action_id: number | null
  }

  export type ActionFormationFormateurSumAggregateOutputType = {
    action_id: number | null
  }

  export type ActionFormationFormateurMinAggregateOutputType = {
    action_id: number | null
    formateur_id: string | null
  }

  export type ActionFormationFormateurMaxAggregateOutputType = {
    action_id: number | null
    formateur_id: string | null
  }

  export type ActionFormationFormateurCountAggregateOutputType = {
    action_id: number
    formateur_id: number
    _all: number
  }


  export type ActionFormationFormateurAvgAggregateInputType = {
    action_id?: true
  }

  export type ActionFormationFormateurSumAggregateInputType = {
    action_id?: true
  }

  export type ActionFormationFormateurMinAggregateInputType = {
    action_id?: true
    formateur_id?: true
  }

  export type ActionFormationFormateurMaxAggregateInputType = {
    action_id?: true
    formateur_id?: true
  }

  export type ActionFormationFormateurCountAggregateInputType = {
    action_id?: true
    formateur_id?: true
    _all?: true
  }

  export type ActionFormationFormateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionFormationFormateur to aggregate.
     */
    where?: ActionFormationFormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationFormateurs to fetch.
     */
    orderBy?: ActionFormationFormateurOrderByWithRelationInput | ActionFormationFormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionFormationFormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationFormateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationFormateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionFormationFormateurs
    **/
    _count?: true | ActionFormationFormateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionFormationFormateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionFormationFormateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionFormationFormateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionFormationFormateurMaxAggregateInputType
  }

  export type GetActionFormationFormateurAggregateType<T extends ActionFormationFormateurAggregateArgs> = {
        [P in keyof T & keyof AggregateActionFormationFormateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionFormationFormateur[P]>
      : GetScalarType<T[P], AggregateActionFormationFormateur[P]>
  }




  export type ActionFormationFormateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationFormateurWhereInput
    orderBy?: ActionFormationFormateurOrderByWithAggregationInput | ActionFormationFormateurOrderByWithAggregationInput[]
    by: ActionFormationFormateurScalarFieldEnum[] | ActionFormationFormateurScalarFieldEnum
    having?: ActionFormationFormateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionFormationFormateurCountAggregateInputType | true
    _avg?: ActionFormationFormateurAvgAggregateInputType
    _sum?: ActionFormationFormateurSumAggregateInputType
    _min?: ActionFormationFormateurMinAggregateInputType
    _max?: ActionFormationFormateurMaxAggregateInputType
  }

  export type ActionFormationFormateurGroupByOutputType = {
    action_id: number
    formateur_id: string
    _count: ActionFormationFormateurCountAggregateOutputType | null
    _avg: ActionFormationFormateurAvgAggregateOutputType | null
    _sum: ActionFormationFormateurSumAggregateOutputType | null
    _min: ActionFormationFormateurMinAggregateOutputType | null
    _max: ActionFormationFormateurMaxAggregateOutputType | null
  }

  type GetActionFormationFormateurGroupByPayload<T extends ActionFormationFormateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionFormationFormateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionFormationFormateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionFormationFormateurGroupByOutputType[P]>
            : GetScalarType<T[P], ActionFormationFormateurGroupByOutputType[P]>
        }
      >
    >


  export type ActionFormationFormateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    formateur_id?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormationFormateur"]>

  export type ActionFormationFormateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    formateur_id?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormationFormateur"]>

  export type ActionFormationFormateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    formateur_id?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormationFormateur"]>

  export type ActionFormationFormateurSelectScalar = {
    action_id?: boolean
    formateur_id?: boolean
  }

  export type ActionFormationFormateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"action_id" | "formateur_id", ExtArgs["result"]["actionFormationFormateur"]>
  export type ActionFormationFormateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }
  export type ActionFormationFormateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }
  export type ActionFormationFormateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    formateur?: boolean | FormateurDefaultArgs<ExtArgs>
  }

  export type $ActionFormationFormateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionFormationFormateur"
    objects: {
      action: Prisma.$ActionFormationPayload<ExtArgs>
      formateur: Prisma.$FormateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      action_id: number
      formateur_id: string
    }, ExtArgs["result"]["actionFormationFormateur"]>
    composites: {}
  }

  type ActionFormationFormateurGetPayload<S extends boolean | null | undefined | ActionFormationFormateurDefaultArgs> = $Result.GetResult<Prisma.$ActionFormationFormateurPayload, S>

  type ActionFormationFormateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFormationFormateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionFormationFormateurCountAggregateInputType | true
    }

  export interface ActionFormationFormateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionFormationFormateur'], meta: { name: 'ActionFormationFormateur' } }
    /**
     * Find zero or one ActionFormationFormateur that matches the filter.
     * @param {ActionFormationFormateurFindUniqueArgs} args - Arguments to find a ActionFormationFormateur
     * @example
     * // Get one ActionFormationFormateur
     * const actionFormationFormateur = await prisma.actionFormationFormateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFormationFormateurFindUniqueArgs>(args: SelectSubset<T, ActionFormationFormateurFindUniqueArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionFormationFormateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFormationFormateurFindUniqueOrThrowArgs} args - Arguments to find a ActionFormationFormateur
     * @example
     * // Get one ActionFormationFormateur
     * const actionFormationFormateur = await prisma.actionFormationFormateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFormationFormateurFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFormationFormateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionFormationFormateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFormateurFindFirstArgs} args - Arguments to find a ActionFormationFormateur
     * @example
     * // Get one ActionFormationFormateur
     * const actionFormationFormateur = await prisma.actionFormationFormateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFormationFormateurFindFirstArgs>(args?: SelectSubset<T, ActionFormationFormateurFindFirstArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionFormationFormateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFormateurFindFirstOrThrowArgs} args - Arguments to find a ActionFormationFormateur
     * @example
     * // Get one ActionFormationFormateur
     * const actionFormationFormateur = await prisma.actionFormationFormateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFormationFormateurFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFormationFormateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionFormationFormateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFormateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionFormationFormateurs
     * const actionFormationFormateurs = await prisma.actionFormationFormateur.findMany()
     * 
     * // Get first 10 ActionFormationFormateurs
     * const actionFormationFormateurs = await prisma.actionFormationFormateur.findMany({ take: 10 })
     * 
     * // Only select the `action_id`
     * const actionFormationFormateurWithAction_idOnly = await prisma.actionFormationFormateur.findMany({ select: { action_id: true } })
     * 
     */
    findMany<T extends ActionFormationFormateurFindManyArgs>(args?: SelectSubset<T, ActionFormationFormateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionFormationFormateur.
     * @param {ActionFormationFormateurCreateArgs} args - Arguments to create a ActionFormationFormateur.
     * @example
     * // Create one ActionFormationFormateur
     * const ActionFormationFormateur = await prisma.actionFormationFormateur.create({
     *   data: {
     *     // ... data to create a ActionFormationFormateur
     *   }
     * })
     * 
     */
    create<T extends ActionFormationFormateurCreateArgs>(args: SelectSubset<T, ActionFormationFormateurCreateArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionFormationFormateurs.
     * @param {ActionFormationFormateurCreateManyArgs} args - Arguments to create many ActionFormationFormateurs.
     * @example
     * // Create many ActionFormationFormateurs
     * const actionFormationFormateur = await prisma.actionFormationFormateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionFormationFormateurCreateManyArgs>(args?: SelectSubset<T, ActionFormationFormateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionFormationFormateurs and returns the data saved in the database.
     * @param {ActionFormationFormateurCreateManyAndReturnArgs} args - Arguments to create many ActionFormationFormateurs.
     * @example
     * // Create many ActionFormationFormateurs
     * const actionFormationFormateur = await prisma.actionFormationFormateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionFormationFormateurs and only return the `action_id`
     * const actionFormationFormateurWithAction_idOnly = await prisma.actionFormationFormateur.createManyAndReturn({
     *   select: { action_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionFormationFormateurCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionFormationFormateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionFormationFormateur.
     * @param {ActionFormationFormateurDeleteArgs} args - Arguments to delete one ActionFormationFormateur.
     * @example
     * // Delete one ActionFormationFormateur
     * const ActionFormationFormateur = await prisma.actionFormationFormateur.delete({
     *   where: {
     *     // ... filter to delete one ActionFormationFormateur
     *   }
     * })
     * 
     */
    delete<T extends ActionFormationFormateurDeleteArgs>(args: SelectSubset<T, ActionFormationFormateurDeleteArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionFormationFormateur.
     * @param {ActionFormationFormateurUpdateArgs} args - Arguments to update one ActionFormationFormateur.
     * @example
     * // Update one ActionFormationFormateur
     * const actionFormationFormateur = await prisma.actionFormationFormateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionFormationFormateurUpdateArgs>(args: SelectSubset<T, ActionFormationFormateurUpdateArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionFormationFormateurs.
     * @param {ActionFormationFormateurDeleteManyArgs} args - Arguments to filter ActionFormationFormateurs to delete.
     * @example
     * // Delete a few ActionFormationFormateurs
     * const { count } = await prisma.actionFormationFormateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionFormationFormateurDeleteManyArgs>(args?: SelectSubset<T, ActionFormationFormateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionFormationFormateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFormateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionFormationFormateurs
     * const actionFormationFormateur = await prisma.actionFormationFormateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionFormationFormateurUpdateManyArgs>(args: SelectSubset<T, ActionFormationFormateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionFormationFormateurs and returns the data updated in the database.
     * @param {ActionFormationFormateurUpdateManyAndReturnArgs} args - Arguments to update many ActionFormationFormateurs.
     * @example
     * // Update many ActionFormationFormateurs
     * const actionFormationFormateur = await prisma.actionFormationFormateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionFormationFormateurs and only return the `action_id`
     * const actionFormationFormateurWithAction_idOnly = await prisma.actionFormationFormateur.updateManyAndReturn({
     *   select: { action_id: true },
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
    updateManyAndReturn<T extends ActionFormationFormateurUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionFormationFormateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionFormationFormateur.
     * @param {ActionFormationFormateurUpsertArgs} args - Arguments to update or create a ActionFormationFormateur.
     * @example
     * // Update or create a ActionFormationFormateur
     * const actionFormationFormateur = await prisma.actionFormationFormateur.upsert({
     *   create: {
     *     // ... data to create a ActionFormationFormateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionFormationFormateur we want to update
     *   }
     * })
     */
    upsert<T extends ActionFormationFormateurUpsertArgs>(args: SelectSubset<T, ActionFormationFormateurUpsertArgs<ExtArgs>>): Prisma__ActionFormationFormateurClient<$Result.GetResult<Prisma.$ActionFormationFormateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionFormationFormateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFormateurCountArgs} args - Arguments to filter ActionFormationFormateurs to count.
     * @example
     * // Count the number of ActionFormationFormateurs
     * const count = await prisma.actionFormationFormateur.count({
     *   where: {
     *     // ... the filter for the ActionFormationFormateurs we want to count
     *   }
     * })
    **/
    count<T extends ActionFormationFormateurCountArgs>(
      args?: Subset<T, ActionFormationFormateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionFormationFormateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionFormationFormateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFormateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionFormationFormateurAggregateArgs>(args: Subset<T, ActionFormationFormateurAggregateArgs>): Prisma.PrismaPromise<GetActionFormationFormateurAggregateType<T>>

    /**
     * Group by ActionFormationFormateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationFormateurGroupByArgs} args - Group by arguments.
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
      T extends ActionFormationFormateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionFormationFormateurGroupByArgs['orderBy'] }
        : { orderBy?: ActionFormationFormateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionFormationFormateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionFormationFormateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionFormationFormateur model
   */
  readonly fields: ActionFormationFormateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionFormationFormateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionFormationFormateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionFormationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormationDefaultArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formateur<T extends FormateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormateurDefaultArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActionFormationFormateur model
   */
  interface ActionFormationFormateurFieldRefs {
    readonly action_id: FieldRef<"ActionFormationFormateur", 'Int'>
    readonly formateur_id: FieldRef<"ActionFormationFormateur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionFormationFormateur findUnique
   */
  export type ActionFormationFormateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationFormateur to fetch.
     */
    where: ActionFormationFormateurWhereUniqueInput
  }

  /**
   * ActionFormationFormateur findUniqueOrThrow
   */
  export type ActionFormationFormateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationFormateur to fetch.
     */
    where: ActionFormationFormateurWhereUniqueInput
  }

  /**
   * ActionFormationFormateur findFirst
   */
  export type ActionFormationFormateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationFormateur to fetch.
     */
    where?: ActionFormationFormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationFormateurs to fetch.
     */
    orderBy?: ActionFormationFormateurOrderByWithRelationInput | ActionFormationFormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionFormationFormateurs.
     */
    cursor?: ActionFormationFormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationFormateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationFormateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionFormationFormateurs.
     */
    distinct?: ActionFormationFormateurScalarFieldEnum | ActionFormationFormateurScalarFieldEnum[]
  }

  /**
   * ActionFormationFormateur findFirstOrThrow
   */
  export type ActionFormationFormateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationFormateur to fetch.
     */
    where?: ActionFormationFormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationFormateurs to fetch.
     */
    orderBy?: ActionFormationFormateurOrderByWithRelationInput | ActionFormationFormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionFormationFormateurs.
     */
    cursor?: ActionFormationFormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationFormateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationFormateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionFormationFormateurs.
     */
    distinct?: ActionFormationFormateurScalarFieldEnum | ActionFormationFormateurScalarFieldEnum[]
  }

  /**
   * ActionFormationFormateur findMany
   */
  export type ActionFormationFormateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationFormateurs to fetch.
     */
    where?: ActionFormationFormateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationFormateurs to fetch.
     */
    orderBy?: ActionFormationFormateurOrderByWithRelationInput | ActionFormationFormateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionFormationFormateurs.
     */
    cursor?: ActionFormationFormateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationFormateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationFormateurs.
     */
    skip?: number
    distinct?: ActionFormationFormateurScalarFieldEnum | ActionFormationFormateurScalarFieldEnum[]
  }

  /**
   * ActionFormationFormateur create
   */
  export type ActionFormationFormateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionFormationFormateur.
     */
    data: XOR<ActionFormationFormateurCreateInput, ActionFormationFormateurUncheckedCreateInput>
  }

  /**
   * ActionFormationFormateur createMany
   */
  export type ActionFormationFormateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionFormationFormateurs.
     */
    data: ActionFormationFormateurCreateManyInput | ActionFormationFormateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionFormationFormateur createManyAndReturn
   */
  export type ActionFormationFormateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * The data used to create many ActionFormationFormateurs.
     */
    data: ActionFormationFormateurCreateManyInput | ActionFormationFormateurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionFormationFormateur update
   */
  export type ActionFormationFormateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionFormationFormateur.
     */
    data: XOR<ActionFormationFormateurUpdateInput, ActionFormationFormateurUncheckedUpdateInput>
    /**
     * Choose, which ActionFormationFormateur to update.
     */
    where: ActionFormationFormateurWhereUniqueInput
  }

  /**
   * ActionFormationFormateur updateMany
   */
  export type ActionFormationFormateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionFormationFormateurs.
     */
    data: XOR<ActionFormationFormateurUpdateManyMutationInput, ActionFormationFormateurUncheckedUpdateManyInput>
    /**
     * Filter which ActionFormationFormateurs to update
     */
    where?: ActionFormationFormateurWhereInput
    /**
     * Limit how many ActionFormationFormateurs to update.
     */
    limit?: number
  }

  /**
   * ActionFormationFormateur updateManyAndReturn
   */
  export type ActionFormationFormateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * The data used to update ActionFormationFormateurs.
     */
    data: XOR<ActionFormationFormateurUpdateManyMutationInput, ActionFormationFormateurUncheckedUpdateManyInput>
    /**
     * Filter which ActionFormationFormateurs to update
     */
    where?: ActionFormationFormateurWhereInput
    /**
     * Limit how many ActionFormationFormateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionFormationFormateur upsert
   */
  export type ActionFormationFormateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionFormationFormateur to update in case it exists.
     */
    where: ActionFormationFormateurWhereUniqueInput
    /**
     * In case the ActionFormationFormateur found by the `where` argument doesn't exist, create a new ActionFormationFormateur with this data.
     */
    create: XOR<ActionFormationFormateurCreateInput, ActionFormationFormateurUncheckedCreateInput>
    /**
     * In case the ActionFormationFormateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionFormationFormateurUpdateInput, ActionFormationFormateurUncheckedUpdateInput>
  }

  /**
   * ActionFormationFormateur delete
   */
  export type ActionFormationFormateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
    /**
     * Filter which ActionFormationFormateur to delete.
     */
    where: ActionFormationFormateurWhereUniqueInput
  }

  /**
   * ActionFormationFormateur deleteMany
   */
  export type ActionFormationFormateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionFormationFormateurs to delete
     */
    where?: ActionFormationFormateurWhereInput
    /**
     * Limit how many ActionFormationFormateurs to delete.
     */
    limit?: number
  }

  /**
   * ActionFormationFormateur without action
   */
  export type ActionFormationFormateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationFormateur
     */
    select?: ActionFormationFormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationFormateur
     */
    omit?: ActionFormationFormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationFormateurInclude<ExtArgs> | null
  }


  /**
   * Model ActionFormationParticipant
   */

  export type AggregateActionFormationParticipant = {
    _count: ActionFormationParticipantCountAggregateOutputType | null
    _avg: ActionFormationParticipantAvgAggregateOutputType | null
    _sum: ActionFormationParticipantSumAggregateOutputType | null
    _min: ActionFormationParticipantMinAggregateOutputType | null
    _max: ActionFormationParticipantMaxAggregateOutputType | null
  }

  export type ActionFormationParticipantAvgAggregateOutputType = {
    action_id: number | null
  }

  export type ActionFormationParticipantSumAggregateOutputType = {
    action_id: number | null
  }

  export type ActionFormationParticipantMinAggregateOutputType = {
    action_id: number | null
    participant_id: string | null
    date_inscription: Date | null
    statut: string | null
  }

  export type ActionFormationParticipantMaxAggregateOutputType = {
    action_id: number | null
    participant_id: string | null
    date_inscription: Date | null
    statut: string | null
  }

  export type ActionFormationParticipantCountAggregateOutputType = {
    action_id: number
    participant_id: number
    date_inscription: number
    statut: number
    _all: number
  }


  export type ActionFormationParticipantAvgAggregateInputType = {
    action_id?: true
  }

  export type ActionFormationParticipantSumAggregateInputType = {
    action_id?: true
  }

  export type ActionFormationParticipantMinAggregateInputType = {
    action_id?: true
    participant_id?: true
    date_inscription?: true
    statut?: true
  }

  export type ActionFormationParticipantMaxAggregateInputType = {
    action_id?: true
    participant_id?: true
    date_inscription?: true
    statut?: true
  }

  export type ActionFormationParticipantCountAggregateInputType = {
    action_id?: true
    participant_id?: true
    date_inscription?: true
    statut?: true
    _all?: true
  }

  export type ActionFormationParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionFormationParticipant to aggregate.
     */
    where?: ActionFormationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationParticipants to fetch.
     */
    orderBy?: ActionFormationParticipantOrderByWithRelationInput | ActionFormationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionFormationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionFormationParticipants
    **/
    _count?: true | ActionFormationParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionFormationParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionFormationParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionFormationParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionFormationParticipantMaxAggregateInputType
  }

  export type GetActionFormationParticipantAggregateType<T extends ActionFormationParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateActionFormationParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionFormationParticipant[P]>
      : GetScalarType<T[P], AggregateActionFormationParticipant[P]>
  }




  export type ActionFormationParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionFormationParticipantWhereInput
    orderBy?: ActionFormationParticipantOrderByWithAggregationInput | ActionFormationParticipantOrderByWithAggregationInput[]
    by: ActionFormationParticipantScalarFieldEnum[] | ActionFormationParticipantScalarFieldEnum
    having?: ActionFormationParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionFormationParticipantCountAggregateInputType | true
    _avg?: ActionFormationParticipantAvgAggregateInputType
    _sum?: ActionFormationParticipantSumAggregateInputType
    _min?: ActionFormationParticipantMinAggregateInputType
    _max?: ActionFormationParticipantMaxAggregateInputType
  }

  export type ActionFormationParticipantGroupByOutputType = {
    action_id: number
    participant_id: string
    date_inscription: Date | null
    statut: string | null
    _count: ActionFormationParticipantCountAggregateOutputType | null
    _avg: ActionFormationParticipantAvgAggregateOutputType | null
    _sum: ActionFormationParticipantSumAggregateOutputType | null
    _min: ActionFormationParticipantMinAggregateOutputType | null
    _max: ActionFormationParticipantMaxAggregateOutputType | null
  }

  type GetActionFormationParticipantGroupByPayload<T extends ActionFormationParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionFormationParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionFormationParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionFormationParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ActionFormationParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ActionFormationParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    participant_id?: boolean
    date_inscription?: boolean
    statut?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormationParticipant"]>

  export type ActionFormationParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    participant_id?: boolean
    date_inscription?: boolean
    statut?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormationParticipant"]>

  export type ActionFormationParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    action_id?: boolean
    participant_id?: boolean
    date_inscription?: boolean
    statut?: boolean
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionFormationParticipant"]>

  export type ActionFormationParticipantSelectScalar = {
    action_id?: boolean
    participant_id?: boolean
    date_inscription?: boolean
    statut?: boolean
  }

  export type ActionFormationParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"action_id" | "participant_id" | "date_inscription" | "statut", ExtArgs["result"]["actionFormationParticipant"]>
  export type ActionFormationParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ActionFormationParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type ActionFormationParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $ActionFormationParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionFormationParticipant"
    objects: {
      action: Prisma.$ActionFormationPayload<ExtArgs>
      participant: Prisma.$ParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      action_id: number
      participant_id: string
      date_inscription: Date | null
      statut: string | null
    }, ExtArgs["result"]["actionFormationParticipant"]>
    composites: {}
  }

  type ActionFormationParticipantGetPayload<S extends boolean | null | undefined | ActionFormationParticipantDefaultArgs> = $Result.GetResult<Prisma.$ActionFormationParticipantPayload, S>

  type ActionFormationParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFormationParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionFormationParticipantCountAggregateInputType | true
    }

  export interface ActionFormationParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionFormationParticipant'], meta: { name: 'ActionFormationParticipant' } }
    /**
     * Find zero or one ActionFormationParticipant that matches the filter.
     * @param {ActionFormationParticipantFindUniqueArgs} args - Arguments to find a ActionFormationParticipant
     * @example
     * // Get one ActionFormationParticipant
     * const actionFormationParticipant = await prisma.actionFormationParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFormationParticipantFindUniqueArgs>(args: SelectSubset<T, ActionFormationParticipantFindUniqueArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActionFormationParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFormationParticipantFindUniqueOrThrowArgs} args - Arguments to find a ActionFormationParticipant
     * @example
     * // Get one ActionFormationParticipant
     * const actionFormationParticipant = await prisma.actionFormationParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFormationParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFormationParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionFormationParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationParticipantFindFirstArgs} args - Arguments to find a ActionFormationParticipant
     * @example
     * // Get one ActionFormationParticipant
     * const actionFormationParticipant = await prisma.actionFormationParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFormationParticipantFindFirstArgs>(args?: SelectSubset<T, ActionFormationParticipantFindFirstArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActionFormationParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationParticipantFindFirstOrThrowArgs} args - Arguments to find a ActionFormationParticipant
     * @example
     * // Get one ActionFormationParticipant
     * const actionFormationParticipant = await prisma.actionFormationParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFormationParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFormationParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActionFormationParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionFormationParticipants
     * const actionFormationParticipants = await prisma.actionFormationParticipant.findMany()
     * 
     * // Get first 10 ActionFormationParticipants
     * const actionFormationParticipants = await prisma.actionFormationParticipant.findMany({ take: 10 })
     * 
     * // Only select the `action_id`
     * const actionFormationParticipantWithAction_idOnly = await prisma.actionFormationParticipant.findMany({ select: { action_id: true } })
     * 
     */
    findMany<T extends ActionFormationParticipantFindManyArgs>(args?: SelectSubset<T, ActionFormationParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActionFormationParticipant.
     * @param {ActionFormationParticipantCreateArgs} args - Arguments to create a ActionFormationParticipant.
     * @example
     * // Create one ActionFormationParticipant
     * const ActionFormationParticipant = await prisma.actionFormationParticipant.create({
     *   data: {
     *     // ... data to create a ActionFormationParticipant
     *   }
     * })
     * 
     */
    create<T extends ActionFormationParticipantCreateArgs>(args: SelectSubset<T, ActionFormationParticipantCreateArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActionFormationParticipants.
     * @param {ActionFormationParticipantCreateManyArgs} args - Arguments to create many ActionFormationParticipants.
     * @example
     * // Create many ActionFormationParticipants
     * const actionFormationParticipant = await prisma.actionFormationParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionFormationParticipantCreateManyArgs>(args?: SelectSubset<T, ActionFormationParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActionFormationParticipants and returns the data saved in the database.
     * @param {ActionFormationParticipantCreateManyAndReturnArgs} args - Arguments to create many ActionFormationParticipants.
     * @example
     * // Create many ActionFormationParticipants
     * const actionFormationParticipant = await prisma.actionFormationParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActionFormationParticipants and only return the `action_id`
     * const actionFormationParticipantWithAction_idOnly = await prisma.actionFormationParticipant.createManyAndReturn({
     *   select: { action_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionFormationParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionFormationParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActionFormationParticipant.
     * @param {ActionFormationParticipantDeleteArgs} args - Arguments to delete one ActionFormationParticipant.
     * @example
     * // Delete one ActionFormationParticipant
     * const ActionFormationParticipant = await prisma.actionFormationParticipant.delete({
     *   where: {
     *     // ... filter to delete one ActionFormationParticipant
     *   }
     * })
     * 
     */
    delete<T extends ActionFormationParticipantDeleteArgs>(args: SelectSubset<T, ActionFormationParticipantDeleteArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActionFormationParticipant.
     * @param {ActionFormationParticipantUpdateArgs} args - Arguments to update one ActionFormationParticipant.
     * @example
     * // Update one ActionFormationParticipant
     * const actionFormationParticipant = await prisma.actionFormationParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionFormationParticipantUpdateArgs>(args: SelectSubset<T, ActionFormationParticipantUpdateArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActionFormationParticipants.
     * @param {ActionFormationParticipantDeleteManyArgs} args - Arguments to filter ActionFormationParticipants to delete.
     * @example
     * // Delete a few ActionFormationParticipants
     * const { count } = await prisma.actionFormationParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionFormationParticipantDeleteManyArgs>(args?: SelectSubset<T, ActionFormationParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionFormationParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionFormationParticipants
     * const actionFormationParticipant = await prisma.actionFormationParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionFormationParticipantUpdateManyArgs>(args: SelectSubset<T, ActionFormationParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionFormationParticipants and returns the data updated in the database.
     * @param {ActionFormationParticipantUpdateManyAndReturnArgs} args - Arguments to update many ActionFormationParticipants.
     * @example
     * // Update many ActionFormationParticipants
     * const actionFormationParticipant = await prisma.actionFormationParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActionFormationParticipants and only return the `action_id`
     * const actionFormationParticipantWithAction_idOnly = await prisma.actionFormationParticipant.updateManyAndReturn({
     *   select: { action_id: true },
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
    updateManyAndReturn<T extends ActionFormationParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionFormationParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActionFormationParticipant.
     * @param {ActionFormationParticipantUpsertArgs} args - Arguments to update or create a ActionFormationParticipant.
     * @example
     * // Update or create a ActionFormationParticipant
     * const actionFormationParticipant = await prisma.actionFormationParticipant.upsert({
     *   create: {
     *     // ... data to create a ActionFormationParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionFormationParticipant we want to update
     *   }
     * })
     */
    upsert<T extends ActionFormationParticipantUpsertArgs>(args: SelectSubset<T, ActionFormationParticipantUpsertArgs<ExtArgs>>): Prisma__ActionFormationParticipantClient<$Result.GetResult<Prisma.$ActionFormationParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActionFormationParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationParticipantCountArgs} args - Arguments to filter ActionFormationParticipants to count.
     * @example
     * // Count the number of ActionFormationParticipants
     * const count = await prisma.actionFormationParticipant.count({
     *   where: {
     *     // ... the filter for the ActionFormationParticipants we want to count
     *   }
     * })
    **/
    count<T extends ActionFormationParticipantCountArgs>(
      args?: Subset<T, ActionFormationParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionFormationParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionFormationParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionFormationParticipantAggregateArgs>(args: Subset<T, ActionFormationParticipantAggregateArgs>): Prisma.PrismaPromise<GetActionFormationParticipantAggregateType<T>>

    /**
     * Group by ActionFormationParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFormationParticipantGroupByArgs} args - Group by arguments.
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
      T extends ActionFormationParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionFormationParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ActionFormationParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionFormationParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionFormationParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionFormationParticipant model
   */
  readonly fields: ActionFormationParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionFormationParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionFormationParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionFormationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormationDefaultArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActionFormationParticipant model
   */
  interface ActionFormationParticipantFieldRefs {
    readonly action_id: FieldRef<"ActionFormationParticipant", 'Int'>
    readonly participant_id: FieldRef<"ActionFormationParticipant", 'String'>
    readonly date_inscription: FieldRef<"ActionFormationParticipant", 'DateTime'>
    readonly statut: FieldRef<"ActionFormationParticipant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActionFormationParticipant findUnique
   */
  export type ActionFormationParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationParticipant to fetch.
     */
    where: ActionFormationParticipantWhereUniqueInput
  }

  /**
   * ActionFormationParticipant findUniqueOrThrow
   */
  export type ActionFormationParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationParticipant to fetch.
     */
    where: ActionFormationParticipantWhereUniqueInput
  }

  /**
   * ActionFormationParticipant findFirst
   */
  export type ActionFormationParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationParticipant to fetch.
     */
    where?: ActionFormationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationParticipants to fetch.
     */
    orderBy?: ActionFormationParticipantOrderByWithRelationInput | ActionFormationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionFormationParticipants.
     */
    cursor?: ActionFormationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionFormationParticipants.
     */
    distinct?: ActionFormationParticipantScalarFieldEnum | ActionFormationParticipantScalarFieldEnum[]
  }

  /**
   * ActionFormationParticipant findFirstOrThrow
   */
  export type ActionFormationParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationParticipant to fetch.
     */
    where?: ActionFormationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationParticipants to fetch.
     */
    orderBy?: ActionFormationParticipantOrderByWithRelationInput | ActionFormationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionFormationParticipants.
     */
    cursor?: ActionFormationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionFormationParticipants.
     */
    distinct?: ActionFormationParticipantScalarFieldEnum | ActionFormationParticipantScalarFieldEnum[]
  }

  /**
   * ActionFormationParticipant findMany
   */
  export type ActionFormationParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which ActionFormationParticipants to fetch.
     */
    where?: ActionFormationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionFormationParticipants to fetch.
     */
    orderBy?: ActionFormationParticipantOrderByWithRelationInput | ActionFormationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionFormationParticipants.
     */
    cursor?: ActionFormationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionFormationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionFormationParticipants.
     */
    skip?: number
    distinct?: ActionFormationParticipantScalarFieldEnum | ActionFormationParticipantScalarFieldEnum[]
  }

  /**
   * ActionFormationParticipant create
   */
  export type ActionFormationParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionFormationParticipant.
     */
    data: XOR<ActionFormationParticipantCreateInput, ActionFormationParticipantUncheckedCreateInput>
  }

  /**
   * ActionFormationParticipant createMany
   */
  export type ActionFormationParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionFormationParticipants.
     */
    data: ActionFormationParticipantCreateManyInput | ActionFormationParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActionFormationParticipant createManyAndReturn
   */
  export type ActionFormationParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many ActionFormationParticipants.
     */
    data: ActionFormationParticipantCreateManyInput | ActionFormationParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionFormationParticipant update
   */
  export type ActionFormationParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionFormationParticipant.
     */
    data: XOR<ActionFormationParticipantUpdateInput, ActionFormationParticipantUncheckedUpdateInput>
    /**
     * Choose, which ActionFormationParticipant to update.
     */
    where: ActionFormationParticipantWhereUniqueInput
  }

  /**
   * ActionFormationParticipant updateMany
   */
  export type ActionFormationParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionFormationParticipants.
     */
    data: XOR<ActionFormationParticipantUpdateManyMutationInput, ActionFormationParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ActionFormationParticipants to update
     */
    where?: ActionFormationParticipantWhereInput
    /**
     * Limit how many ActionFormationParticipants to update.
     */
    limit?: number
  }

  /**
   * ActionFormationParticipant updateManyAndReturn
   */
  export type ActionFormationParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * The data used to update ActionFormationParticipants.
     */
    data: XOR<ActionFormationParticipantUpdateManyMutationInput, ActionFormationParticipantUncheckedUpdateManyInput>
    /**
     * Filter which ActionFormationParticipants to update
     */
    where?: ActionFormationParticipantWhereInput
    /**
     * Limit how many ActionFormationParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActionFormationParticipant upsert
   */
  export type ActionFormationParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionFormationParticipant to update in case it exists.
     */
    where: ActionFormationParticipantWhereUniqueInput
    /**
     * In case the ActionFormationParticipant found by the `where` argument doesn't exist, create a new ActionFormationParticipant with this data.
     */
    create: XOR<ActionFormationParticipantCreateInput, ActionFormationParticipantUncheckedCreateInput>
    /**
     * In case the ActionFormationParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionFormationParticipantUpdateInput, ActionFormationParticipantUncheckedUpdateInput>
  }

  /**
   * ActionFormationParticipant delete
   */
  export type ActionFormationParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
    /**
     * Filter which ActionFormationParticipant to delete.
     */
    where: ActionFormationParticipantWhereUniqueInput
  }

  /**
   * ActionFormationParticipant deleteMany
   */
  export type ActionFormationParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionFormationParticipants to delete
     */
    where?: ActionFormationParticipantWhereInput
    /**
     * Limit how many ActionFormationParticipants to delete.
     */
    limit?: number
  }

  /**
   * ActionFormationParticipant without action
   */
  export type ActionFormationParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormationParticipant
     */
    select?: ActionFormationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormationParticipant
     */
    omit?: ActionFormationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Attestation
   */

  export type AggregateAttestation = {
    _count: AttestationCountAggregateOutputType | null
    _avg: AttestationAvgAggregateOutputType | null
    _sum: AttestationSumAggregateOutputType | null
    _min: AttestationMinAggregateOutputType | null
    _max: AttestationMaxAggregateOutputType | null
  }

  export type AttestationAvgAggregateOutputType = {
    attestation_id: number | null
    action_id: number | null
  }

  export type AttestationSumAggregateOutputType = {
    attestation_id: number | null
    action_id: number | null
  }

  export type AttestationMinAggregateOutputType = {
    attestation_id: number | null
    participant_id: string | null
    action_id: number | null
    date_emission: Date | null
    qr_code_ref: string | null
  }

  export type AttestationMaxAggregateOutputType = {
    attestation_id: number | null
    participant_id: string | null
    action_id: number | null
    date_emission: Date | null
    qr_code_ref: string | null
  }

  export type AttestationCountAggregateOutputType = {
    attestation_id: number
    participant_id: number
    action_id: number
    date_emission: number
    qr_code_ref: number
    _all: number
  }


  export type AttestationAvgAggregateInputType = {
    attestation_id?: true
    action_id?: true
  }

  export type AttestationSumAggregateInputType = {
    attestation_id?: true
    action_id?: true
  }

  export type AttestationMinAggregateInputType = {
    attestation_id?: true
    participant_id?: true
    action_id?: true
    date_emission?: true
    qr_code_ref?: true
  }

  export type AttestationMaxAggregateInputType = {
    attestation_id?: true
    participant_id?: true
    action_id?: true
    date_emission?: true
    qr_code_ref?: true
  }

  export type AttestationCountAggregateInputType = {
    attestation_id?: true
    participant_id?: true
    action_id?: true
    date_emission?: true
    qr_code_ref?: true
    _all?: true
  }

  export type AttestationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attestation to aggregate.
     */
    where?: AttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationOrderByWithRelationInput | AttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attestations
    **/
    _count?: true | AttestationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttestationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttestationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttestationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttestationMaxAggregateInputType
  }

  export type GetAttestationAggregateType<T extends AttestationAggregateArgs> = {
        [P in keyof T & keyof AggregateAttestation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttestation[P]>
      : GetScalarType<T[P], AggregateAttestation[P]>
  }




  export type AttestationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttestationWhereInput
    orderBy?: AttestationOrderByWithAggregationInput | AttestationOrderByWithAggregationInput[]
    by: AttestationScalarFieldEnum[] | AttestationScalarFieldEnum
    having?: AttestationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttestationCountAggregateInputType | true
    _avg?: AttestationAvgAggregateInputType
    _sum?: AttestationSumAggregateInputType
    _min?: AttestationMinAggregateInputType
    _max?: AttestationMaxAggregateInputType
  }

  export type AttestationGroupByOutputType = {
    attestation_id: number
    participant_id: string
    action_id: number
    date_emission: Date | null
    qr_code_ref: string | null
    _count: AttestationCountAggregateOutputType | null
    _avg: AttestationAvgAggregateOutputType | null
    _sum: AttestationSumAggregateOutputType | null
    _min: AttestationMinAggregateOutputType | null
    _max: AttestationMaxAggregateOutputType | null
  }

  type GetAttestationGroupByPayload<T extends AttestationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttestationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttestationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttestationGroupByOutputType[P]>
            : GetScalarType<T[P], AttestationGroupByOutputType[P]>
        }
      >
    >


  export type AttestationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attestation_id?: boolean
    participant_id?: boolean
    action_id?: boolean
    date_emission?: boolean
    qr_code_ref?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attestation"]>

  export type AttestationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attestation_id?: boolean
    participant_id?: boolean
    action_id?: boolean
    date_emission?: boolean
    qr_code_ref?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attestation"]>

  export type AttestationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attestation_id?: boolean
    participant_id?: boolean
    action_id?: boolean
    date_emission?: boolean
    qr_code_ref?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attestation"]>

  export type AttestationSelectScalar = {
    attestation_id?: boolean
    participant_id?: boolean
    action_id?: boolean
    date_emission?: boolean
    qr_code_ref?: boolean
  }

  export type AttestationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attestation_id" | "participant_id" | "action_id" | "date_emission" | "qr_code_ref", ExtArgs["result"]["attestation"]>
  export type AttestationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
  }
  export type AttestationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
  }
  export type AttestationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    action?: boolean | ActionFormationDefaultArgs<ExtArgs>
  }

  export type $AttestationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attestation"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
      action: Prisma.$ActionFormationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attestation_id: number
      participant_id: string
      action_id: number
      date_emission: Date | null
      qr_code_ref: string | null
    }, ExtArgs["result"]["attestation"]>
    composites: {}
  }

  type AttestationGetPayload<S extends boolean | null | undefined | AttestationDefaultArgs> = $Result.GetResult<Prisma.$AttestationPayload, S>

  type AttestationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttestationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttestationCountAggregateInputType | true
    }

  export interface AttestationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attestation'], meta: { name: 'Attestation' } }
    /**
     * Find zero or one Attestation that matches the filter.
     * @param {AttestationFindUniqueArgs} args - Arguments to find a Attestation
     * @example
     * // Get one Attestation
     * const attestation = await prisma.attestation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttestationFindUniqueArgs>(args: SelectSubset<T, AttestationFindUniqueArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attestation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttestationFindUniqueOrThrowArgs} args - Arguments to find a Attestation
     * @example
     * // Get one Attestation
     * const attestation = await prisma.attestation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttestationFindUniqueOrThrowArgs>(args: SelectSubset<T, AttestationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attestation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationFindFirstArgs} args - Arguments to find a Attestation
     * @example
     * // Get one Attestation
     * const attestation = await prisma.attestation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttestationFindFirstArgs>(args?: SelectSubset<T, AttestationFindFirstArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attestation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationFindFirstOrThrowArgs} args - Arguments to find a Attestation
     * @example
     * // Get one Attestation
     * const attestation = await prisma.attestation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttestationFindFirstOrThrowArgs>(args?: SelectSubset<T, AttestationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attestations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attestations
     * const attestations = await prisma.attestation.findMany()
     * 
     * // Get first 10 Attestations
     * const attestations = await prisma.attestation.findMany({ take: 10 })
     * 
     * // Only select the `attestation_id`
     * const attestationWithAttestation_idOnly = await prisma.attestation.findMany({ select: { attestation_id: true } })
     * 
     */
    findMany<T extends AttestationFindManyArgs>(args?: SelectSubset<T, AttestationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attestation.
     * @param {AttestationCreateArgs} args - Arguments to create a Attestation.
     * @example
     * // Create one Attestation
     * const Attestation = await prisma.attestation.create({
     *   data: {
     *     // ... data to create a Attestation
     *   }
     * })
     * 
     */
    create<T extends AttestationCreateArgs>(args: SelectSubset<T, AttestationCreateArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attestations.
     * @param {AttestationCreateManyArgs} args - Arguments to create many Attestations.
     * @example
     * // Create many Attestations
     * const attestation = await prisma.attestation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttestationCreateManyArgs>(args?: SelectSubset<T, AttestationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attestations and returns the data saved in the database.
     * @param {AttestationCreateManyAndReturnArgs} args - Arguments to create many Attestations.
     * @example
     * // Create many Attestations
     * const attestation = await prisma.attestation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attestations and only return the `attestation_id`
     * const attestationWithAttestation_idOnly = await prisma.attestation.createManyAndReturn({
     *   select: { attestation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttestationCreateManyAndReturnArgs>(args?: SelectSubset<T, AttestationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attestation.
     * @param {AttestationDeleteArgs} args - Arguments to delete one Attestation.
     * @example
     * // Delete one Attestation
     * const Attestation = await prisma.attestation.delete({
     *   where: {
     *     // ... filter to delete one Attestation
     *   }
     * })
     * 
     */
    delete<T extends AttestationDeleteArgs>(args: SelectSubset<T, AttestationDeleteArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attestation.
     * @param {AttestationUpdateArgs} args - Arguments to update one Attestation.
     * @example
     * // Update one Attestation
     * const attestation = await prisma.attestation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttestationUpdateArgs>(args: SelectSubset<T, AttestationUpdateArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attestations.
     * @param {AttestationDeleteManyArgs} args - Arguments to filter Attestations to delete.
     * @example
     * // Delete a few Attestations
     * const { count } = await prisma.attestation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttestationDeleteManyArgs>(args?: SelectSubset<T, AttestationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attestations
     * const attestation = await prisma.attestation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttestationUpdateManyArgs>(args: SelectSubset<T, AttestationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attestations and returns the data updated in the database.
     * @param {AttestationUpdateManyAndReturnArgs} args - Arguments to update many Attestations.
     * @example
     * // Update many Attestations
     * const attestation = await prisma.attestation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attestations and only return the `attestation_id`
     * const attestationWithAttestation_idOnly = await prisma.attestation.updateManyAndReturn({
     *   select: { attestation_id: true },
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
    updateManyAndReturn<T extends AttestationUpdateManyAndReturnArgs>(args: SelectSubset<T, AttestationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attestation.
     * @param {AttestationUpsertArgs} args - Arguments to update or create a Attestation.
     * @example
     * // Update or create a Attestation
     * const attestation = await prisma.attestation.upsert({
     *   create: {
     *     // ... data to create a Attestation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attestation we want to update
     *   }
     * })
     */
    upsert<T extends AttestationUpsertArgs>(args: SelectSubset<T, AttestationUpsertArgs<ExtArgs>>): Prisma__AttestationClient<$Result.GetResult<Prisma.$AttestationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attestations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationCountArgs} args - Arguments to filter Attestations to count.
     * @example
     * // Count the number of Attestations
     * const count = await prisma.attestation.count({
     *   where: {
     *     // ... the filter for the Attestations we want to count
     *   }
     * })
    **/
    count<T extends AttestationCountArgs>(
      args?: Subset<T, AttestationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttestationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attestation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttestationAggregateArgs>(args: Subset<T, AttestationAggregateArgs>): Prisma.PrismaPromise<GetAttestationAggregateType<T>>

    /**
     * Group by Attestation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttestationGroupByArgs} args - Group by arguments.
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
      T extends AttestationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttestationGroupByArgs['orderBy'] }
        : { orderBy?: AttestationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttestationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttestationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attestation model
   */
  readonly fields: AttestationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attestation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttestationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    action<T extends ActionFormationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionFormationDefaultArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attestation model
   */
  interface AttestationFieldRefs {
    readonly attestation_id: FieldRef<"Attestation", 'Int'>
    readonly participant_id: FieldRef<"Attestation", 'String'>
    readonly action_id: FieldRef<"Attestation", 'Int'>
    readonly date_emission: FieldRef<"Attestation", 'DateTime'>
    readonly qr_code_ref: FieldRef<"Attestation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attestation findUnique
   */
  export type AttestationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * Filter, which Attestation to fetch.
     */
    where: AttestationWhereUniqueInput
  }

  /**
   * Attestation findUniqueOrThrow
   */
  export type AttestationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * Filter, which Attestation to fetch.
     */
    where: AttestationWhereUniqueInput
  }

  /**
   * Attestation findFirst
   */
  export type AttestationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * Filter, which Attestation to fetch.
     */
    where?: AttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationOrderByWithRelationInput | AttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attestations.
     */
    cursor?: AttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attestations.
     */
    distinct?: AttestationScalarFieldEnum | AttestationScalarFieldEnum[]
  }

  /**
   * Attestation findFirstOrThrow
   */
  export type AttestationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * Filter, which Attestation to fetch.
     */
    where?: AttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationOrderByWithRelationInput | AttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attestations.
     */
    cursor?: AttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attestations.
     */
    distinct?: AttestationScalarFieldEnum | AttestationScalarFieldEnum[]
  }

  /**
   * Attestation findMany
   */
  export type AttestationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * Filter, which Attestations to fetch.
     */
    where?: AttestationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attestations to fetch.
     */
    orderBy?: AttestationOrderByWithRelationInput | AttestationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attestations.
     */
    cursor?: AttestationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attestations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attestations.
     */
    skip?: number
    distinct?: AttestationScalarFieldEnum | AttestationScalarFieldEnum[]
  }

  /**
   * Attestation create
   */
  export type AttestationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * The data needed to create a Attestation.
     */
    data: XOR<AttestationCreateInput, AttestationUncheckedCreateInput>
  }

  /**
   * Attestation createMany
   */
  export type AttestationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attestations.
     */
    data: AttestationCreateManyInput | AttestationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attestation createManyAndReturn
   */
  export type AttestationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * The data used to create many Attestations.
     */
    data: AttestationCreateManyInput | AttestationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attestation update
   */
  export type AttestationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * The data needed to update a Attestation.
     */
    data: XOR<AttestationUpdateInput, AttestationUncheckedUpdateInput>
    /**
     * Choose, which Attestation to update.
     */
    where: AttestationWhereUniqueInput
  }

  /**
   * Attestation updateMany
   */
  export type AttestationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attestations.
     */
    data: XOR<AttestationUpdateManyMutationInput, AttestationUncheckedUpdateManyInput>
    /**
     * Filter which Attestations to update
     */
    where?: AttestationWhereInput
    /**
     * Limit how many Attestations to update.
     */
    limit?: number
  }

  /**
   * Attestation updateManyAndReturn
   */
  export type AttestationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * The data used to update Attestations.
     */
    data: XOR<AttestationUpdateManyMutationInput, AttestationUncheckedUpdateManyInput>
    /**
     * Filter which Attestations to update
     */
    where?: AttestationWhereInput
    /**
     * Limit how many Attestations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attestation upsert
   */
  export type AttestationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * The filter to search for the Attestation to update in case it exists.
     */
    where: AttestationWhereUniqueInput
    /**
     * In case the Attestation found by the `where` argument doesn't exist, create a new Attestation with this data.
     */
    create: XOR<AttestationCreateInput, AttestationUncheckedCreateInput>
    /**
     * In case the Attestation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttestationUpdateInput, AttestationUncheckedUpdateInput>
  }

  /**
   * Attestation delete
   */
  export type AttestationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
    /**
     * Filter which Attestation to delete.
     */
    where: AttestationWhereUniqueInput
  }

  /**
   * Attestation deleteMany
   */
  export type AttestationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attestations to delete
     */
    where?: AttestationWhereInput
    /**
     * Limit how many Attestations to delete.
     */
    limit?: number
  }

  /**
   * Attestation without action
   */
  export type AttestationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attestation
     */
    select?: AttestationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attestation
     */
    omit?: AttestationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttestationInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    file_id: number | null
    action_id: number | null
  }

  export type FileSumAggregateOutputType = {
    file_id: number | null
    action_id: number | null
  }

  export type FileMinAggregateOutputType = {
    file_id: number | null
    file_path: string | null
    type: $Enums.FileType | null
    formateur_id: string | null
    action_id: number | null
    validated: boolean | null
    validated_at: Date | null
  }

  export type FileMaxAggregateOutputType = {
    file_id: number | null
    file_path: string | null
    type: $Enums.FileType | null
    formateur_id: string | null
    action_id: number | null
    validated: boolean | null
    validated_at: Date | null
  }

  export type FileCountAggregateOutputType = {
    file_id: number
    file_path: number
    type: number
    formateur_id: number
    action_id: number
    validated: number
    validated_at: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    file_id?: true
    action_id?: true
  }

  export type FileSumAggregateInputType = {
    file_id?: true
    action_id?: true
  }

  export type FileMinAggregateInputType = {
    file_id?: true
    file_path?: true
    type?: true
    formateur_id?: true
    action_id?: true
    validated?: true
    validated_at?: true
  }

  export type FileMaxAggregateInputType = {
    file_id?: true
    file_path?: true
    type?: true
    formateur_id?: true
    action_id?: true
    validated?: true
    validated_at?: true
  }

  export type FileCountAggregateInputType = {
    file_id?: true
    file_path?: true
    type?: true
    formateur_id?: true
    action_id?: true
    validated?: true
    validated_at?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    file_id: number
    file_path: string
    type: $Enums.FileType
    formateur_id: string | null
    action_id: number | null
    validated: boolean | null
    validated_at: Date | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    file_path?: boolean
    type?: boolean
    formateur_id?: boolean
    action_id?: boolean
    validated?: boolean
    validated_at?: boolean
    formateur?: boolean | File$formateurArgs<ExtArgs>
    action?: boolean | File$actionArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    file_path?: boolean
    type?: boolean
    formateur_id?: boolean
    action_id?: boolean
    validated?: boolean
    validated_at?: boolean
    formateur?: boolean | File$formateurArgs<ExtArgs>
    action?: boolean | File$actionArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    file_path?: boolean
    type?: boolean
    formateur_id?: boolean
    action_id?: boolean
    validated?: boolean
    validated_at?: boolean
    formateur?: boolean | File$formateurArgs<ExtArgs>
    action?: boolean | File$actionArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    file_id?: boolean
    file_path?: boolean
    type?: boolean
    formateur_id?: boolean
    action_id?: boolean
    validated?: boolean
    validated_at?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "file_path" | "type" | "formateur_id" | "action_id" | "validated" | "validated_at", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | File$formateurArgs<ExtArgs>
    action?: boolean | File$actionArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | File$formateurArgs<ExtArgs>
    action?: boolean | File$actionArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formateur?: boolean | File$formateurArgs<ExtArgs>
    action?: boolean | File$actionArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      formateur: Prisma.$FormateurPayload<ExtArgs> | null
      action: Prisma.$ActionFormationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: number
      file_path: string
      type: $Enums.FileType
      formateur_id: string | null
      action_id: number | null
      validated: boolean | null
      validated_at: Date | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const fileWithFile_idOnly = await prisma.file.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `file_id`
     * const fileWithFile_idOnly = await prisma.file.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `file_id`
     * const fileWithFile_idOnly = await prisma.file.updateManyAndReturn({
     *   select: { file_id: true },
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formateur<T extends File$formateurArgs<ExtArgs> = {}>(args?: Subset<T, File$formateurArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends File$actionArgs<ExtArgs> = {}>(args?: Subset<T, File$actionArgs<ExtArgs>>): Prisma__ActionFormationClient<$Result.GetResult<Prisma.$ActionFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly file_id: FieldRef<"File", 'Int'>
    readonly file_path: FieldRef<"File", 'String'>
    readonly type: FieldRef<"File", 'FileType'>
    readonly formateur_id: FieldRef<"File", 'String'>
    readonly action_id: FieldRef<"File", 'Int'>
    readonly validated: FieldRef<"File", 'Boolean'>
    readonly validated_at: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.formateur
   */
  export type File$formateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    where?: FormateurWhereInput
  }

  /**
   * File.action
   */
  export type File$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionFormation
     */
    select?: ActionFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActionFormation
     */
    omit?: ActionFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionFormationInclude<ExtArgs> | null
    where?: ActionFormationWhereInput
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Presence
   */

  export type AggregatePresence = {
    _count: PresenceCountAggregateOutputType | null
    _avg: PresenceAvgAggregateOutputType | null
    _sum: PresenceSumAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  export type PresenceAvgAggregateOutputType = {
    presence_id: number | null
    seance_id: number | null
  }

  export type PresenceSumAggregateOutputType = {
    presence_id: number | null
    seance_id: number | null
  }

  export type PresenceMinAggregateOutputType = {
    presence_id: number | null
    status: $Enums.PresenceStatus | null
    noted_at: Date | null
    participant_id: string | null
    seance_id: number | null
    formateur_id: string | null
  }

  export type PresenceMaxAggregateOutputType = {
    presence_id: number | null
    status: $Enums.PresenceStatus | null
    noted_at: Date | null
    participant_id: string | null
    seance_id: number | null
    formateur_id: string | null
  }

  export type PresenceCountAggregateOutputType = {
    presence_id: number
    status: number
    noted_at: number
    participant_id: number
    seance_id: number
    formateur_id: number
    _all: number
  }


  export type PresenceAvgAggregateInputType = {
    presence_id?: true
    seance_id?: true
  }

  export type PresenceSumAggregateInputType = {
    presence_id?: true
    seance_id?: true
  }

  export type PresenceMinAggregateInputType = {
    presence_id?: true
    status?: true
    noted_at?: true
    participant_id?: true
    seance_id?: true
    formateur_id?: true
  }

  export type PresenceMaxAggregateInputType = {
    presence_id?: true
    status?: true
    noted_at?: true
    participant_id?: true
    seance_id?: true
    formateur_id?: true
  }

  export type PresenceCountAggregateInputType = {
    presence_id?: true
    status?: true
    noted_at?: true
    participant_id?: true
    seance_id?: true
    formateur_id?: true
    _all?: true
  }

  export type PresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presence to aggregate.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presences
    **/
    _count?: true | PresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresenceMaxAggregateInputType
  }

  export type GetPresenceAggregateType<T extends PresenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresence[P]>
      : GetScalarType<T[P], AggregatePresence[P]>
  }




  export type PresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceWhereInput
    orderBy?: PresenceOrderByWithAggregationInput | PresenceOrderByWithAggregationInput[]
    by: PresenceScalarFieldEnum[] | PresenceScalarFieldEnum
    having?: PresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresenceCountAggregateInputType | true
    _avg?: PresenceAvgAggregateInputType
    _sum?: PresenceSumAggregateInputType
    _min?: PresenceMinAggregateInputType
    _max?: PresenceMaxAggregateInputType
  }

  export type PresenceGroupByOutputType = {
    presence_id: number
    status: $Enums.PresenceStatus
    noted_at: Date
    participant_id: string
    seance_id: number
    formateur_id: string | null
    _count: PresenceCountAggregateOutputType | null
    _avg: PresenceAvgAggregateOutputType | null
    _sum: PresenceSumAggregateOutputType | null
    _min: PresenceMinAggregateOutputType | null
    _max: PresenceMaxAggregateOutputType | null
  }

  type GetPresenceGroupByPayload<T extends PresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresenceGroupByOutputType[P]>
            : GetScalarType<T[P], PresenceGroupByOutputType[P]>
        }
      >
    >


  export type PresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presence_id?: boolean
    status?: boolean
    noted_at?: boolean
    participant_id?: boolean
    seance_id?: boolean
    formateur_id?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    seance?: boolean | SeanceDefaultArgs<ExtArgs>
    formateur?: boolean | Presence$formateurArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presence_id?: boolean
    status?: boolean
    noted_at?: boolean
    participant_id?: boolean
    seance_id?: boolean
    formateur_id?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    seance?: boolean | SeanceDefaultArgs<ExtArgs>
    formateur?: boolean | Presence$formateurArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presence_id?: boolean
    status?: boolean
    noted_at?: boolean
    participant_id?: boolean
    seance_id?: boolean
    formateur_id?: boolean
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    seance?: boolean | SeanceDefaultArgs<ExtArgs>
    formateur?: boolean | Presence$formateurArgs<ExtArgs>
  }, ExtArgs["result"]["presence"]>

  export type PresenceSelectScalar = {
    presence_id?: boolean
    status?: boolean
    noted_at?: boolean
    participant_id?: boolean
    seance_id?: boolean
    formateur_id?: boolean
  }

  export type PresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"presence_id" | "status" | "noted_at" | "participant_id" | "seance_id" | "formateur_id", ExtArgs["result"]["presence"]>
  export type PresenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    seance?: boolean | SeanceDefaultArgs<ExtArgs>
    formateur?: boolean | Presence$formateurArgs<ExtArgs>
  }
  export type PresenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    seance?: boolean | SeanceDefaultArgs<ExtArgs>
    formateur?: boolean | Presence$formateurArgs<ExtArgs>
  }
  export type PresenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant?: boolean | ParticipantDefaultArgs<ExtArgs>
    seance?: boolean | SeanceDefaultArgs<ExtArgs>
    formateur?: boolean | Presence$formateurArgs<ExtArgs>
  }

  export type $PresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presence"
    objects: {
      participant: Prisma.$ParticipantPayload<ExtArgs>
      seance: Prisma.$SeancePayload<ExtArgs>
      formateur: Prisma.$FormateurPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      presence_id: number
      status: $Enums.PresenceStatus
      noted_at: Date
      participant_id: string
      seance_id: number
      formateur_id: string | null
    }, ExtArgs["result"]["presence"]>
    composites: {}
  }

  type PresenceGetPayload<S extends boolean | null | undefined | PresenceDefaultArgs> = $Result.GetResult<Prisma.$PresencePayload, S>

  type PresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresenceCountAggregateInputType | true
    }

  export interface PresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presence'], meta: { name: 'Presence' } }
    /**
     * Find zero or one Presence that matches the filter.
     * @param {PresenceFindUniqueArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresenceFindUniqueArgs>(args: SelectSubset<T, PresenceFindUniqueArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresenceFindUniqueOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindFirstArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresenceFindFirstArgs>(args?: SelectSubset<T, PresenceFindFirstArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindFirstOrThrowArgs} args - Arguments to find a Presence
     * @example
     * // Get one Presence
     * const presence = await prisma.presence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presences
     * const presences = await prisma.presence.findMany()
     * 
     * // Get first 10 Presences
     * const presences = await prisma.presence.findMany({ take: 10 })
     * 
     * // Only select the `presence_id`
     * const presenceWithPresence_idOnly = await prisma.presence.findMany({ select: { presence_id: true } })
     * 
     */
    findMany<T extends PresenceFindManyArgs>(args?: SelectSubset<T, PresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presence.
     * @param {PresenceCreateArgs} args - Arguments to create a Presence.
     * @example
     * // Create one Presence
     * const Presence = await prisma.presence.create({
     *   data: {
     *     // ... data to create a Presence
     *   }
     * })
     * 
     */
    create<T extends PresenceCreateArgs>(args: SelectSubset<T, PresenceCreateArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presences.
     * @param {PresenceCreateManyArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresenceCreateManyArgs>(args?: SelectSubset<T, PresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presences and returns the data saved in the database.
     * @param {PresenceCreateManyAndReturnArgs} args - Arguments to create many Presences.
     * @example
     * // Create many Presences
     * const presence = await prisma.presence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presences and only return the `presence_id`
     * const presenceWithPresence_idOnly = await prisma.presence.createManyAndReturn({
     *   select: { presence_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Presence.
     * @param {PresenceDeleteArgs} args - Arguments to delete one Presence.
     * @example
     * // Delete one Presence
     * const Presence = await prisma.presence.delete({
     *   where: {
     *     // ... filter to delete one Presence
     *   }
     * })
     * 
     */
    delete<T extends PresenceDeleteArgs>(args: SelectSubset<T, PresenceDeleteArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presence.
     * @param {PresenceUpdateArgs} args - Arguments to update one Presence.
     * @example
     * // Update one Presence
     * const presence = await prisma.presence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresenceUpdateArgs>(args: SelectSubset<T, PresenceUpdateArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presences.
     * @param {PresenceDeleteManyArgs} args - Arguments to filter Presences to delete.
     * @example
     * // Delete a few Presences
     * const { count } = await prisma.presence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresenceDeleteManyArgs>(args?: SelectSubset<T, PresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presences
     * const presence = await prisma.presence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresenceUpdateManyArgs>(args: SelectSubset<T, PresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presences and returns the data updated in the database.
     * @param {PresenceUpdateManyAndReturnArgs} args - Arguments to update many Presences.
     * @example
     * // Update many Presences
     * const presence = await prisma.presence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presences and only return the `presence_id`
     * const presenceWithPresence_idOnly = await prisma.presence.updateManyAndReturn({
     *   select: { presence_id: true },
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
    updateManyAndReturn<T extends PresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Presence.
     * @param {PresenceUpsertArgs} args - Arguments to update or create a Presence.
     * @example
     * // Update or create a Presence
     * const presence = await prisma.presence.upsert({
     *   create: {
     *     // ... data to create a Presence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presence we want to update
     *   }
     * })
     */
    upsert<T extends PresenceUpsertArgs>(args: SelectSubset<T, PresenceUpsertArgs<ExtArgs>>): Prisma__PresenceClient<$Result.GetResult<Prisma.$PresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceCountArgs} args - Arguments to filter Presences to count.
     * @example
     * // Count the number of Presences
     * const count = await prisma.presence.count({
     *   where: {
     *     // ... the filter for the Presences we want to count
     *   }
     * })
    **/
    count<T extends PresenceCountArgs>(
      args?: Subset<T, PresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresenceAggregateArgs>(args: Subset<T, PresenceAggregateArgs>): Prisma.PrismaPromise<GetPresenceAggregateType<T>>

    /**
     * Group by Presence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceGroupByArgs} args - Group by arguments.
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
      T extends PresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresenceGroupByArgs['orderBy'] }
        : { orderBy?: PresenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presence model
   */
  readonly fields: PresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seance<T extends SeanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeanceDefaultArgs<ExtArgs>>): Prisma__SeanceClient<$Result.GetResult<Prisma.$SeancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formateur<T extends Presence$formateurArgs<ExtArgs> = {}>(args?: Subset<T, Presence$formateurArgs<ExtArgs>>): Prisma__FormateurClient<$Result.GetResult<Prisma.$FormateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Presence model
   */
  interface PresenceFieldRefs {
    readonly presence_id: FieldRef<"Presence", 'Int'>
    readonly status: FieldRef<"Presence", 'PresenceStatus'>
    readonly noted_at: FieldRef<"Presence", 'DateTime'>
    readonly participant_id: FieldRef<"Presence", 'String'>
    readonly seance_id: FieldRef<"Presence", 'Int'>
    readonly formateur_id: FieldRef<"Presence", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Presence findUnique
   */
  export type PresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence findUniqueOrThrow
   */
  export type PresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence findFirst
   */
  export type PresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence findFirstOrThrow
   */
  export type PresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presence to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presences.
     */
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence findMany
   */
  export type PresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter, which Presences to fetch.
     */
    where?: PresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presences to fetch.
     */
    orderBy?: PresenceOrderByWithRelationInput | PresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presences.
     */
    cursor?: PresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presences.
     */
    skip?: number
    distinct?: PresenceScalarFieldEnum | PresenceScalarFieldEnum[]
  }

  /**
   * Presence create
   */
  export type PresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Presence.
     */
    data: XOR<PresenceCreateInput, PresenceUncheckedCreateInput>
  }

  /**
   * Presence createMany
   */
  export type PresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presences.
     */
    data: PresenceCreateManyInput | PresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presence createManyAndReturn
   */
  export type PresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * The data used to create many Presences.
     */
    data: PresenceCreateManyInput | PresenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presence update
   */
  export type PresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Presence.
     */
    data: XOR<PresenceUpdateInput, PresenceUncheckedUpdateInput>
    /**
     * Choose, which Presence to update.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence updateMany
   */
  export type PresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presences.
     */
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyInput>
    /**
     * Filter which Presences to update
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to update.
     */
    limit?: number
  }

  /**
   * Presence updateManyAndReturn
   */
  export type PresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * The data used to update Presences.
     */
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyInput>
    /**
     * Filter which Presences to update
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presence upsert
   */
  export type PresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Presence to update in case it exists.
     */
    where: PresenceWhereUniqueInput
    /**
     * In case the Presence found by the `where` argument doesn't exist, create a new Presence with this data.
     */
    create: XOR<PresenceCreateInput, PresenceUncheckedCreateInput>
    /**
     * In case the Presence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresenceUpdateInput, PresenceUncheckedUpdateInput>
  }

  /**
   * Presence delete
   */
  export type PresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
    /**
     * Filter which Presence to delete.
     */
    where: PresenceWhereUniqueInput
  }

  /**
   * Presence deleteMany
   */
  export type PresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presences to delete
     */
    where?: PresenceWhereInput
    /**
     * Limit how many Presences to delete.
     */
    limit?: number
  }

  /**
   * Presence.formateur
   */
  export type Presence$formateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formateur
     */
    select?: FormateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formateur
     */
    omit?: FormateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormateurInclude<ExtArgs> | null
    where?: FormateurWhereInput
  }

  /**
   * Presence without action
   */
  export type PresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presence
     */
    select?: PresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presence
     */
    omit?: PresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresenceInclude<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    role_id: 'role_id',
    role_name: 'role_name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FormateurScalarFieldEnum: {
    user_id: 'user_id'
  };

  export type FormateurScalarFieldEnum = (typeof FormateurScalarFieldEnum)[keyof typeof FormateurScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    user_id: 'user_id',
    entreprise: 'entreprise',
    poste: 'poste'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const DomaineScalarFieldEnum: {
    domaine_id: 'domaine_id',
    libelle_domaine: 'libelle_domaine'
  };

  export type DomaineScalarFieldEnum = (typeof DomaineScalarFieldEnum)[keyof typeof DomaineScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    theme_id: 'theme_id',
    libelle_theme: 'libelle_theme',
    domaine_id: 'domaine_id'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const ActionFormationScalarFieldEnum: {
    action_id: 'action_id',
    type_action: 'type_action',
    date_debut: 'date_debut',
    date_fin: 'date_fin',
    duree_jours: 'duree_jours',
    duree_heures: 'duree_heures',
    nb_seances: 'nb_seances',
    lieu: 'lieu',
    nb_participants_prevu: 'nb_participants_prevu',
    theme_id: 'theme_id'
  };

  export type ActionFormationScalarFieldEnum = (typeof ActionFormationScalarFieldEnum)[keyof typeof ActionFormationScalarFieldEnum]


  export const SeanceScalarFieldEnum: {
    seance_id: 'seance_id',
    action_id: 'action_id',
    date: 'date',
    heure: 'heure',
    duree_heures: 'duree_heures',
    statut: 'statut',
    formateur_id: 'formateur_id'
  };

  export type SeanceScalarFieldEnum = (typeof SeanceScalarFieldEnum)[keyof typeof SeanceScalarFieldEnum]


  export const ActionFormationFormateurScalarFieldEnum: {
    action_id: 'action_id',
    formateur_id: 'formateur_id'
  };

  export type ActionFormationFormateurScalarFieldEnum = (typeof ActionFormationFormateurScalarFieldEnum)[keyof typeof ActionFormationFormateurScalarFieldEnum]


  export const ActionFormationParticipantScalarFieldEnum: {
    action_id: 'action_id',
    participant_id: 'participant_id',
    date_inscription: 'date_inscription',
    statut: 'statut'
  };

  export type ActionFormationParticipantScalarFieldEnum = (typeof ActionFormationParticipantScalarFieldEnum)[keyof typeof ActionFormationParticipantScalarFieldEnum]


  export const AttestationScalarFieldEnum: {
    attestation_id: 'attestation_id',
    participant_id: 'participant_id',
    action_id: 'action_id',
    date_emission: 'date_emission',
    qr_code_ref: 'qr_code_ref'
  };

  export type AttestationScalarFieldEnum = (typeof AttestationScalarFieldEnum)[keyof typeof AttestationScalarFieldEnum]


  export const FileScalarFieldEnum: {
    file_id: 'file_id',
    file_path: 'file_path',
    type: 'type',
    formateur_id: 'formateur_id',
    action_id: 'action_id',
    validated: 'validated',
    validated_at: 'validated_at'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const PresenceScalarFieldEnum: {
    presence_id: 'presence_id',
    status: 'status',
    noted_at: 'noted_at',
    participant_id: 'participant_id',
    seance_id: 'seance_id',
    formateur_id: 'formateur_id'
  };

  export type PresenceScalarFieldEnum = (typeof PresenceScalarFieldEnum)[keyof typeof PresenceScalarFieldEnum]


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
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


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
   * Reference to a field of type 'SeanceStatut'
   */
  export type EnumSeanceStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeanceStatut'>
    


  /**
   * Reference to a field of type 'SeanceStatut[]'
   */
  export type ListEnumSeanceStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeanceStatut[]'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'FileType[]'
   */
  export type ListEnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PresenceStatus'
   */
  export type EnumPresenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresenceStatus'>
    


  /**
   * Reference to a field of type 'PresenceStatus[]'
   */
  export type ListEnumPresenceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PresenceStatus[]'>
    


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


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role_id?: IntFilter<"Role"> | number
    role_name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    role_name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "role_id" | "role_name">

  export type RoleOrderByWithAggregationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"Role"> | number
    role_name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    telephone?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    formateur?: XOR<FormateurNullableScalarRelationFilter, FormateurWhereInput> | null
    participant?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role_id?: SortOrder
    role?: RoleOrderByWithRelationInput
    formateur?: FormateurOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    telephone?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    formateur?: XOR<FormateurNullableScalarRelationFilter, FormateurWhereInput> | null
    participant?: XOR<ParticipantNullableScalarRelationFilter, ParticipantWhereInput> | null
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role_id?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    telephone?: StringWithAggregatesFilter<"User"> | string
    role_id?: IntWithAggregatesFilter<"User"> | number
  }

  export type FormateurWhereInput = {
    AND?: FormateurWhereInput | FormateurWhereInput[]
    OR?: FormateurWhereInput[]
    NOT?: FormateurWhereInput | FormateurWhereInput[]
    user_id?: StringFilter<"Formateur"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    actions?: ActionFormationFormateurListRelationFilter
    seances?: SeanceListRelationFilter
    files?: FileListRelationFilter
    presences?: PresenceListRelationFilter
  }

  export type FormateurOrderByWithRelationInput = {
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    actions?: ActionFormationFormateurOrderByRelationAggregateInput
    seances?: SeanceOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    presences?: PresenceOrderByRelationAggregateInput
  }

  export type FormateurWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: FormateurWhereInput | FormateurWhereInput[]
    OR?: FormateurWhereInput[]
    NOT?: FormateurWhereInput | FormateurWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    actions?: ActionFormationFormateurListRelationFilter
    seances?: SeanceListRelationFilter
    files?: FileListRelationFilter
    presences?: PresenceListRelationFilter
  }, "user_id">

  export type FormateurOrderByWithAggregationInput = {
    user_id?: SortOrder
    _count?: FormateurCountOrderByAggregateInput
    _max?: FormateurMaxOrderByAggregateInput
    _min?: FormateurMinOrderByAggregateInput
  }

  export type FormateurScalarWhereWithAggregatesInput = {
    AND?: FormateurScalarWhereWithAggregatesInput | FormateurScalarWhereWithAggregatesInput[]
    OR?: FormateurScalarWhereWithAggregatesInput[]
    NOT?: FormateurScalarWhereWithAggregatesInput | FormateurScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Formateur"> | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    user_id?: StringFilter<"Participant"> | string
    entreprise?: StringFilter<"Participant"> | string
    poste?: StringFilter<"Participant"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    actions?: ActionFormationParticipantListRelationFilter
    attestations?: AttestationListRelationFilter
    presences?: PresenceListRelationFilter
  }

  export type ParticipantOrderByWithRelationInput = {
    user_id?: SortOrder
    entreprise?: SortOrder
    poste?: SortOrder
    user?: UserOrderByWithRelationInput
    actions?: ActionFormationParticipantOrderByRelationAggregateInput
    attestations?: AttestationOrderByRelationAggregateInput
    presences?: PresenceOrderByRelationAggregateInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    entreprise?: StringFilter<"Participant"> | string
    poste?: StringFilter<"Participant"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    actions?: ActionFormationParticipantListRelationFilter
    attestations?: AttestationListRelationFilter
    presences?: PresenceListRelationFilter
  }, "user_id">

  export type ParticipantOrderByWithAggregationInput = {
    user_id?: SortOrder
    entreprise?: SortOrder
    poste?: SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"Participant"> | string
    entreprise?: StringWithAggregatesFilter<"Participant"> | string
    poste?: StringWithAggregatesFilter<"Participant"> | string
  }

  export type DomaineWhereInput = {
    AND?: DomaineWhereInput | DomaineWhereInput[]
    OR?: DomaineWhereInput[]
    NOT?: DomaineWhereInput | DomaineWhereInput[]
    domaine_id?: IntFilter<"Domaine"> | number
    libelle_domaine?: StringFilter<"Domaine"> | string
    themes?: ThemeListRelationFilter
  }

  export type DomaineOrderByWithRelationInput = {
    domaine_id?: SortOrder
    libelle_domaine?: SortOrder
    themes?: ThemeOrderByRelationAggregateInput
  }

  export type DomaineWhereUniqueInput = Prisma.AtLeast<{
    domaine_id?: number
    AND?: DomaineWhereInput | DomaineWhereInput[]
    OR?: DomaineWhereInput[]
    NOT?: DomaineWhereInput | DomaineWhereInput[]
    libelle_domaine?: StringFilter<"Domaine"> | string
    themes?: ThemeListRelationFilter
  }, "domaine_id">

  export type DomaineOrderByWithAggregationInput = {
    domaine_id?: SortOrder
    libelle_domaine?: SortOrder
    _count?: DomaineCountOrderByAggregateInput
    _avg?: DomaineAvgOrderByAggregateInput
    _max?: DomaineMaxOrderByAggregateInput
    _min?: DomaineMinOrderByAggregateInput
    _sum?: DomaineSumOrderByAggregateInput
  }

  export type DomaineScalarWhereWithAggregatesInput = {
    AND?: DomaineScalarWhereWithAggregatesInput | DomaineScalarWhereWithAggregatesInput[]
    OR?: DomaineScalarWhereWithAggregatesInput[]
    NOT?: DomaineScalarWhereWithAggregatesInput | DomaineScalarWhereWithAggregatesInput[]
    domaine_id?: IntWithAggregatesFilter<"Domaine"> | number
    libelle_domaine?: StringWithAggregatesFilter<"Domaine"> | string
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    theme_id?: IntFilter<"Theme"> | number
    libelle_theme?: StringFilter<"Theme"> | string
    domaine_id?: IntFilter<"Theme"> | number
    domaine?: XOR<DomaineScalarRelationFilter, DomaineWhereInput>
    actions?: ActionFormationListRelationFilter
  }

  export type ThemeOrderByWithRelationInput = {
    theme_id?: SortOrder
    libelle_theme?: SortOrder
    domaine_id?: SortOrder
    domaine?: DomaineOrderByWithRelationInput
    actions?: ActionFormationOrderByRelationAggregateInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    theme_id?: number
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    libelle_theme?: StringFilter<"Theme"> | string
    domaine_id?: IntFilter<"Theme"> | number
    domaine?: XOR<DomaineScalarRelationFilter, DomaineWhereInput>
    actions?: ActionFormationListRelationFilter
  }, "theme_id">

  export type ThemeOrderByWithAggregationInput = {
    theme_id?: SortOrder
    libelle_theme?: SortOrder
    domaine_id?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    theme_id?: IntWithAggregatesFilter<"Theme"> | number
    libelle_theme?: StringWithAggregatesFilter<"Theme"> | string
    domaine_id?: IntWithAggregatesFilter<"Theme"> | number
  }

  export type ActionFormationWhereInput = {
    AND?: ActionFormationWhereInput | ActionFormationWhereInput[]
    OR?: ActionFormationWhereInput[]
    NOT?: ActionFormationWhereInput | ActionFormationWhereInput[]
    action_id?: IntFilter<"ActionFormation"> | number
    type_action?: StringFilter<"ActionFormation"> | string
    date_debut?: DateTimeFilter<"ActionFormation"> | Date | string
    date_fin?: DateTimeFilter<"ActionFormation"> | Date | string
    duree_jours?: IntNullableFilter<"ActionFormation"> | number | null
    duree_heures?: IntNullableFilter<"ActionFormation"> | number | null
    nb_seances?: IntNullableFilter<"ActionFormation"> | number | null
    lieu?: StringFilter<"ActionFormation"> | string
    nb_participants_prevu?: IntNullableFilter<"ActionFormation"> | number | null
    theme_id?: IntFilter<"ActionFormation"> | number
    theme?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
    formateurs?: ActionFormationFormateurListRelationFilter
    participants?: ActionFormationParticipantListRelationFilter
    attestations?: AttestationListRelationFilter
    seances?: SeanceListRelationFilter
    files?: FileListRelationFilter
  }

  export type ActionFormationOrderByWithRelationInput = {
    action_id?: SortOrder
    type_action?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrderInput | SortOrder
    duree_heures?: SortOrderInput | SortOrder
    nb_seances?: SortOrderInput | SortOrder
    lieu?: SortOrder
    nb_participants_prevu?: SortOrderInput | SortOrder
    theme_id?: SortOrder
    theme?: ThemeOrderByWithRelationInput
    formateurs?: ActionFormationFormateurOrderByRelationAggregateInput
    participants?: ActionFormationParticipantOrderByRelationAggregateInput
    attestations?: AttestationOrderByRelationAggregateInput
    seances?: SeanceOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
  }

  export type ActionFormationWhereUniqueInput = Prisma.AtLeast<{
    action_id?: number
    AND?: ActionFormationWhereInput | ActionFormationWhereInput[]
    OR?: ActionFormationWhereInput[]
    NOT?: ActionFormationWhereInput | ActionFormationWhereInput[]
    type_action?: StringFilter<"ActionFormation"> | string
    date_debut?: DateTimeFilter<"ActionFormation"> | Date | string
    date_fin?: DateTimeFilter<"ActionFormation"> | Date | string
    duree_jours?: IntNullableFilter<"ActionFormation"> | number | null
    duree_heures?: IntNullableFilter<"ActionFormation"> | number | null
    nb_seances?: IntNullableFilter<"ActionFormation"> | number | null
    lieu?: StringFilter<"ActionFormation"> | string
    nb_participants_prevu?: IntNullableFilter<"ActionFormation"> | number | null
    theme_id?: IntFilter<"ActionFormation"> | number
    theme?: XOR<ThemeScalarRelationFilter, ThemeWhereInput>
    formateurs?: ActionFormationFormateurListRelationFilter
    participants?: ActionFormationParticipantListRelationFilter
    attestations?: AttestationListRelationFilter
    seances?: SeanceListRelationFilter
    files?: FileListRelationFilter
  }, "action_id">

  export type ActionFormationOrderByWithAggregationInput = {
    action_id?: SortOrder
    type_action?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrderInput | SortOrder
    duree_heures?: SortOrderInput | SortOrder
    nb_seances?: SortOrderInput | SortOrder
    lieu?: SortOrder
    nb_participants_prevu?: SortOrderInput | SortOrder
    theme_id?: SortOrder
    _count?: ActionFormationCountOrderByAggregateInput
    _avg?: ActionFormationAvgOrderByAggregateInput
    _max?: ActionFormationMaxOrderByAggregateInput
    _min?: ActionFormationMinOrderByAggregateInput
    _sum?: ActionFormationSumOrderByAggregateInput
  }

  export type ActionFormationScalarWhereWithAggregatesInput = {
    AND?: ActionFormationScalarWhereWithAggregatesInput | ActionFormationScalarWhereWithAggregatesInput[]
    OR?: ActionFormationScalarWhereWithAggregatesInput[]
    NOT?: ActionFormationScalarWhereWithAggregatesInput | ActionFormationScalarWhereWithAggregatesInput[]
    action_id?: IntWithAggregatesFilter<"ActionFormation"> | number
    type_action?: StringWithAggregatesFilter<"ActionFormation"> | string
    date_debut?: DateTimeWithAggregatesFilter<"ActionFormation"> | Date | string
    date_fin?: DateTimeWithAggregatesFilter<"ActionFormation"> | Date | string
    duree_jours?: IntNullableWithAggregatesFilter<"ActionFormation"> | number | null
    duree_heures?: IntNullableWithAggregatesFilter<"ActionFormation"> | number | null
    nb_seances?: IntNullableWithAggregatesFilter<"ActionFormation"> | number | null
    lieu?: StringWithAggregatesFilter<"ActionFormation"> | string
    nb_participants_prevu?: IntNullableWithAggregatesFilter<"ActionFormation"> | number | null
    theme_id?: IntWithAggregatesFilter<"ActionFormation"> | number
  }

  export type SeanceWhereInput = {
    AND?: SeanceWhereInput | SeanceWhereInput[]
    OR?: SeanceWhereInput[]
    NOT?: SeanceWhereInput | SeanceWhereInput[]
    seance_id?: IntFilter<"Seance"> | number
    action_id?: IntFilter<"Seance"> | number
    date?: DateTimeNullableFilter<"Seance"> | Date | string | null
    heure?: StringNullableFilter<"Seance"> | string | null
    duree_heures?: IntNullableFilter<"Seance"> | number | null
    statut?: EnumSeanceStatutFilter<"Seance"> | $Enums.SeanceStatut
    formateur_id?: StringFilter<"Seance"> | string
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
    formateur?: XOR<FormateurScalarRelationFilter, FormateurWhereInput>
    presences?: PresenceListRelationFilter
  }

  export type SeanceOrderByWithRelationInput = {
    seance_id?: SortOrder
    action_id?: SortOrder
    date?: SortOrderInput | SortOrder
    heure?: SortOrderInput | SortOrder
    duree_heures?: SortOrderInput | SortOrder
    statut?: SortOrder
    formateur_id?: SortOrder
    action?: ActionFormationOrderByWithRelationInput
    formateur?: FormateurOrderByWithRelationInput
    presences?: PresenceOrderByRelationAggregateInput
  }

  export type SeanceWhereUniqueInput = Prisma.AtLeast<{
    seance_id?: number
    AND?: SeanceWhereInput | SeanceWhereInput[]
    OR?: SeanceWhereInput[]
    NOT?: SeanceWhereInput | SeanceWhereInput[]
    action_id?: IntFilter<"Seance"> | number
    date?: DateTimeNullableFilter<"Seance"> | Date | string | null
    heure?: StringNullableFilter<"Seance"> | string | null
    duree_heures?: IntNullableFilter<"Seance"> | number | null
    statut?: EnumSeanceStatutFilter<"Seance"> | $Enums.SeanceStatut
    formateur_id?: StringFilter<"Seance"> | string
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
    formateur?: XOR<FormateurScalarRelationFilter, FormateurWhereInput>
    presences?: PresenceListRelationFilter
  }, "seance_id">

  export type SeanceOrderByWithAggregationInput = {
    seance_id?: SortOrder
    action_id?: SortOrder
    date?: SortOrderInput | SortOrder
    heure?: SortOrderInput | SortOrder
    duree_heures?: SortOrderInput | SortOrder
    statut?: SortOrder
    formateur_id?: SortOrder
    _count?: SeanceCountOrderByAggregateInput
    _avg?: SeanceAvgOrderByAggregateInput
    _max?: SeanceMaxOrderByAggregateInput
    _min?: SeanceMinOrderByAggregateInput
    _sum?: SeanceSumOrderByAggregateInput
  }

  export type SeanceScalarWhereWithAggregatesInput = {
    AND?: SeanceScalarWhereWithAggregatesInput | SeanceScalarWhereWithAggregatesInput[]
    OR?: SeanceScalarWhereWithAggregatesInput[]
    NOT?: SeanceScalarWhereWithAggregatesInput | SeanceScalarWhereWithAggregatesInput[]
    seance_id?: IntWithAggregatesFilter<"Seance"> | number
    action_id?: IntWithAggregatesFilter<"Seance"> | number
    date?: DateTimeNullableWithAggregatesFilter<"Seance"> | Date | string | null
    heure?: StringNullableWithAggregatesFilter<"Seance"> | string | null
    duree_heures?: IntNullableWithAggregatesFilter<"Seance"> | number | null
    statut?: EnumSeanceStatutWithAggregatesFilter<"Seance"> | $Enums.SeanceStatut
    formateur_id?: StringWithAggregatesFilter<"Seance"> | string
  }

  export type ActionFormationFormateurWhereInput = {
    AND?: ActionFormationFormateurWhereInput | ActionFormationFormateurWhereInput[]
    OR?: ActionFormationFormateurWhereInput[]
    NOT?: ActionFormationFormateurWhereInput | ActionFormationFormateurWhereInput[]
    action_id?: IntFilter<"ActionFormationFormateur"> | number
    formateur_id?: StringFilter<"ActionFormationFormateur"> | string
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
    formateur?: XOR<FormateurScalarRelationFilter, FormateurWhereInput>
  }

  export type ActionFormationFormateurOrderByWithRelationInput = {
    action_id?: SortOrder
    formateur_id?: SortOrder
    action?: ActionFormationOrderByWithRelationInput
    formateur?: FormateurOrderByWithRelationInput
  }

  export type ActionFormationFormateurWhereUniqueInput = Prisma.AtLeast<{
    action_id_formateur_id?: ActionFormationFormateurAction_idFormateur_idCompoundUniqueInput
    AND?: ActionFormationFormateurWhereInput | ActionFormationFormateurWhereInput[]
    OR?: ActionFormationFormateurWhereInput[]
    NOT?: ActionFormationFormateurWhereInput | ActionFormationFormateurWhereInput[]
    action_id?: IntFilter<"ActionFormationFormateur"> | number
    formateur_id?: StringFilter<"ActionFormationFormateur"> | string
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
    formateur?: XOR<FormateurScalarRelationFilter, FormateurWhereInput>
  }, "action_id_formateur_id">

  export type ActionFormationFormateurOrderByWithAggregationInput = {
    action_id?: SortOrder
    formateur_id?: SortOrder
    _count?: ActionFormationFormateurCountOrderByAggregateInput
    _avg?: ActionFormationFormateurAvgOrderByAggregateInput
    _max?: ActionFormationFormateurMaxOrderByAggregateInput
    _min?: ActionFormationFormateurMinOrderByAggregateInput
    _sum?: ActionFormationFormateurSumOrderByAggregateInput
  }

  export type ActionFormationFormateurScalarWhereWithAggregatesInput = {
    AND?: ActionFormationFormateurScalarWhereWithAggregatesInput | ActionFormationFormateurScalarWhereWithAggregatesInput[]
    OR?: ActionFormationFormateurScalarWhereWithAggregatesInput[]
    NOT?: ActionFormationFormateurScalarWhereWithAggregatesInput | ActionFormationFormateurScalarWhereWithAggregatesInput[]
    action_id?: IntWithAggregatesFilter<"ActionFormationFormateur"> | number
    formateur_id?: StringWithAggregatesFilter<"ActionFormationFormateur"> | string
  }

  export type ActionFormationParticipantWhereInput = {
    AND?: ActionFormationParticipantWhereInput | ActionFormationParticipantWhereInput[]
    OR?: ActionFormationParticipantWhereInput[]
    NOT?: ActionFormationParticipantWhereInput | ActionFormationParticipantWhereInput[]
    action_id?: IntFilter<"ActionFormationParticipant"> | number
    participant_id?: StringFilter<"ActionFormationParticipant"> | string
    date_inscription?: DateTimeNullableFilter<"ActionFormationParticipant"> | Date | string | null
    statut?: StringNullableFilter<"ActionFormationParticipant"> | string | null
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }

  export type ActionFormationParticipantOrderByWithRelationInput = {
    action_id?: SortOrder
    participant_id?: SortOrder
    date_inscription?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    action?: ActionFormationOrderByWithRelationInput
    participant?: ParticipantOrderByWithRelationInput
  }

  export type ActionFormationParticipantWhereUniqueInput = Prisma.AtLeast<{
    action_id_participant_id?: ActionFormationParticipantAction_idParticipant_idCompoundUniqueInput
    AND?: ActionFormationParticipantWhereInput | ActionFormationParticipantWhereInput[]
    OR?: ActionFormationParticipantWhereInput[]
    NOT?: ActionFormationParticipantWhereInput | ActionFormationParticipantWhereInput[]
    action_id?: IntFilter<"ActionFormationParticipant"> | number
    participant_id?: StringFilter<"ActionFormationParticipant"> | string
    date_inscription?: DateTimeNullableFilter<"ActionFormationParticipant"> | Date | string | null
    statut?: StringNullableFilter<"ActionFormationParticipant"> | string | null
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
  }, "action_id_participant_id">

  export type ActionFormationParticipantOrderByWithAggregationInput = {
    action_id?: SortOrder
    participant_id?: SortOrder
    date_inscription?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    _count?: ActionFormationParticipantCountOrderByAggregateInput
    _avg?: ActionFormationParticipantAvgOrderByAggregateInput
    _max?: ActionFormationParticipantMaxOrderByAggregateInput
    _min?: ActionFormationParticipantMinOrderByAggregateInput
    _sum?: ActionFormationParticipantSumOrderByAggregateInput
  }

  export type ActionFormationParticipantScalarWhereWithAggregatesInput = {
    AND?: ActionFormationParticipantScalarWhereWithAggregatesInput | ActionFormationParticipantScalarWhereWithAggregatesInput[]
    OR?: ActionFormationParticipantScalarWhereWithAggregatesInput[]
    NOT?: ActionFormationParticipantScalarWhereWithAggregatesInput | ActionFormationParticipantScalarWhereWithAggregatesInput[]
    action_id?: IntWithAggregatesFilter<"ActionFormationParticipant"> | number
    participant_id?: StringWithAggregatesFilter<"ActionFormationParticipant"> | string
    date_inscription?: DateTimeNullableWithAggregatesFilter<"ActionFormationParticipant"> | Date | string | null
    statut?: StringNullableWithAggregatesFilter<"ActionFormationParticipant"> | string | null
  }

  export type AttestationWhereInput = {
    AND?: AttestationWhereInput | AttestationWhereInput[]
    OR?: AttestationWhereInput[]
    NOT?: AttestationWhereInput | AttestationWhereInput[]
    attestation_id?: IntFilter<"Attestation"> | number
    participant_id?: StringFilter<"Attestation"> | string
    action_id?: IntFilter<"Attestation"> | number
    date_emission?: DateTimeNullableFilter<"Attestation"> | Date | string | null
    qr_code_ref?: StringNullableFilter<"Attestation"> | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
  }

  export type AttestationOrderByWithRelationInput = {
    attestation_id?: SortOrder
    participant_id?: SortOrder
    action_id?: SortOrder
    date_emission?: SortOrderInput | SortOrder
    qr_code_ref?: SortOrderInput | SortOrder
    participant?: ParticipantOrderByWithRelationInput
    action?: ActionFormationOrderByWithRelationInput
  }

  export type AttestationWhereUniqueInput = Prisma.AtLeast<{
    attestation_id?: number
    qr_code_ref?: string
    participant_id_action_id?: AttestationParticipant_idAction_idCompoundUniqueInput
    AND?: AttestationWhereInput | AttestationWhereInput[]
    OR?: AttestationWhereInput[]
    NOT?: AttestationWhereInput | AttestationWhereInput[]
    participant_id?: StringFilter<"Attestation"> | string
    action_id?: IntFilter<"Attestation"> | number
    date_emission?: DateTimeNullableFilter<"Attestation"> | Date | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    action?: XOR<ActionFormationScalarRelationFilter, ActionFormationWhereInput>
  }, "attestation_id" | "qr_code_ref" | "participant_id_action_id">

  export type AttestationOrderByWithAggregationInput = {
    attestation_id?: SortOrder
    participant_id?: SortOrder
    action_id?: SortOrder
    date_emission?: SortOrderInput | SortOrder
    qr_code_ref?: SortOrderInput | SortOrder
    _count?: AttestationCountOrderByAggregateInput
    _avg?: AttestationAvgOrderByAggregateInput
    _max?: AttestationMaxOrderByAggregateInput
    _min?: AttestationMinOrderByAggregateInput
    _sum?: AttestationSumOrderByAggregateInput
  }

  export type AttestationScalarWhereWithAggregatesInput = {
    AND?: AttestationScalarWhereWithAggregatesInput | AttestationScalarWhereWithAggregatesInput[]
    OR?: AttestationScalarWhereWithAggregatesInput[]
    NOT?: AttestationScalarWhereWithAggregatesInput | AttestationScalarWhereWithAggregatesInput[]
    attestation_id?: IntWithAggregatesFilter<"Attestation"> | number
    participant_id?: StringWithAggregatesFilter<"Attestation"> | string
    action_id?: IntWithAggregatesFilter<"Attestation"> | number
    date_emission?: DateTimeNullableWithAggregatesFilter<"Attestation"> | Date | string | null
    qr_code_ref?: StringNullableWithAggregatesFilter<"Attestation"> | string | null
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    file_id?: IntFilter<"File"> | number
    file_path?: StringFilter<"File"> | string
    type?: EnumFileTypeFilter<"File"> | $Enums.FileType
    formateur_id?: StringNullableFilter<"File"> | string | null
    action_id?: IntNullableFilter<"File"> | number | null
    validated?: BoolNullableFilter<"File"> | boolean | null
    validated_at?: DateTimeNullableFilter<"File"> | Date | string | null
    formateur?: XOR<FormateurNullableScalarRelationFilter, FormateurWhereInput> | null
    action?: XOR<ActionFormationNullableScalarRelationFilter, ActionFormationWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    file_id?: SortOrder
    file_path?: SortOrder
    type?: SortOrder
    formateur_id?: SortOrderInput | SortOrder
    action_id?: SortOrderInput | SortOrder
    validated?: SortOrderInput | SortOrder
    validated_at?: SortOrderInput | SortOrder
    formateur?: FormateurOrderByWithRelationInput
    action?: ActionFormationOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    file_path?: StringFilter<"File"> | string
    type?: EnumFileTypeFilter<"File"> | $Enums.FileType
    formateur_id?: StringNullableFilter<"File"> | string | null
    action_id?: IntNullableFilter<"File"> | number | null
    validated?: BoolNullableFilter<"File"> | boolean | null
    validated_at?: DateTimeNullableFilter<"File"> | Date | string | null
    formateur?: XOR<FormateurNullableScalarRelationFilter, FormateurWhereInput> | null
    action?: XOR<ActionFormationNullableScalarRelationFilter, ActionFormationWhereInput> | null
  }, "file_id">

  export type FileOrderByWithAggregationInput = {
    file_id?: SortOrder
    file_path?: SortOrder
    type?: SortOrder
    formateur_id?: SortOrderInput | SortOrder
    action_id?: SortOrderInput | SortOrder
    validated?: SortOrderInput | SortOrder
    validated_at?: SortOrderInput | SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    file_id?: IntWithAggregatesFilter<"File"> | number
    file_path?: StringWithAggregatesFilter<"File"> | string
    type?: EnumFileTypeWithAggregatesFilter<"File"> | $Enums.FileType
    formateur_id?: StringNullableWithAggregatesFilter<"File"> | string | null
    action_id?: IntNullableWithAggregatesFilter<"File"> | number | null
    validated?: BoolNullableWithAggregatesFilter<"File"> | boolean | null
    validated_at?: DateTimeNullableWithAggregatesFilter<"File"> | Date | string | null
  }

  export type PresenceWhereInput = {
    AND?: PresenceWhereInput | PresenceWhereInput[]
    OR?: PresenceWhereInput[]
    NOT?: PresenceWhereInput | PresenceWhereInput[]
    presence_id?: IntFilter<"Presence"> | number
    status?: EnumPresenceStatusFilter<"Presence"> | $Enums.PresenceStatus
    noted_at?: DateTimeFilter<"Presence"> | Date | string
    participant_id?: StringFilter<"Presence"> | string
    seance_id?: IntFilter<"Presence"> | number
    formateur_id?: StringNullableFilter<"Presence"> | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    seance?: XOR<SeanceScalarRelationFilter, SeanceWhereInput>
    formateur?: XOR<FormateurNullableScalarRelationFilter, FormateurWhereInput> | null
  }

  export type PresenceOrderByWithRelationInput = {
    presence_id?: SortOrder
    status?: SortOrder
    noted_at?: SortOrder
    participant_id?: SortOrder
    seance_id?: SortOrder
    formateur_id?: SortOrderInput | SortOrder
    participant?: ParticipantOrderByWithRelationInput
    seance?: SeanceOrderByWithRelationInput
    formateur?: FormateurOrderByWithRelationInput
  }

  export type PresenceWhereUniqueInput = Prisma.AtLeast<{
    presence_id?: number
    participant_id_seance_id?: PresenceParticipant_idSeance_idCompoundUniqueInput
    AND?: PresenceWhereInput | PresenceWhereInput[]
    OR?: PresenceWhereInput[]
    NOT?: PresenceWhereInput | PresenceWhereInput[]
    status?: EnumPresenceStatusFilter<"Presence"> | $Enums.PresenceStatus
    noted_at?: DateTimeFilter<"Presence"> | Date | string
    participant_id?: StringFilter<"Presence"> | string
    seance_id?: IntFilter<"Presence"> | number
    formateur_id?: StringNullableFilter<"Presence"> | string | null
    participant?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    seance?: XOR<SeanceScalarRelationFilter, SeanceWhereInput>
    formateur?: XOR<FormateurNullableScalarRelationFilter, FormateurWhereInput> | null
  }, "presence_id" | "participant_id_seance_id">

  export type PresenceOrderByWithAggregationInput = {
    presence_id?: SortOrder
    status?: SortOrder
    noted_at?: SortOrder
    participant_id?: SortOrder
    seance_id?: SortOrder
    formateur_id?: SortOrderInput | SortOrder
    _count?: PresenceCountOrderByAggregateInput
    _avg?: PresenceAvgOrderByAggregateInput
    _max?: PresenceMaxOrderByAggregateInput
    _min?: PresenceMinOrderByAggregateInput
    _sum?: PresenceSumOrderByAggregateInput
  }

  export type PresenceScalarWhereWithAggregatesInput = {
    AND?: PresenceScalarWhereWithAggregatesInput | PresenceScalarWhereWithAggregatesInput[]
    OR?: PresenceScalarWhereWithAggregatesInput[]
    NOT?: PresenceScalarWhereWithAggregatesInput | PresenceScalarWhereWithAggregatesInput[]
    presence_id?: IntWithAggregatesFilter<"Presence"> | number
    status?: EnumPresenceStatusWithAggregatesFilter<"Presence"> | $Enums.PresenceStatus
    noted_at?: DateTimeWithAggregatesFilter<"Presence"> | Date | string
    participant_id?: StringWithAggregatesFilter<"Presence"> | string
    seance_id?: IntWithAggregatesFilter<"Presence"> | number
    formateur_id?: StringNullableWithAggregatesFilter<"Presence"> | string | null
  }

  export type RoleCreateInput = {
    role_name: $Enums.RoleName
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    role_id?: number
    role_name: $Enums.RoleName
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    role_name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    role_id?: number
    role_name: $Enums.RoleName
  }

  export type RoleUpdateManyMutationInput = {
    role_name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type UserCreateInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role: RoleCreateNestedOneWithoutUsersInput
    formateur?: FormateurCreateNestedOneWithoutUserInput
    participant?: ParticipantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role_id: number
    formateur?: FormateurUncheckedCreateNestedOneWithoutUserInput
    participant?: ParticipantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    formateur?: FormateurUpdateOneWithoutUserNestedInput
    participant?: ParticipantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    formateur?: FormateurUncheckedUpdateOneWithoutUserNestedInput
    participant?: ParticipantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role_id: number
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type FormateurCreateInput = {
    user: UserCreateNestedOneWithoutFormateurInput
    actions?: ActionFormationFormateurCreateNestedManyWithoutFormateurInput
    seances?: SeanceCreateNestedManyWithoutFormateurInput
    files?: FileCreateNestedManyWithoutFormateurInput
    presences?: PresenceCreateNestedManyWithoutFormateurInput
  }

  export type FormateurUncheckedCreateInput = {
    user_id: string
    actions?: ActionFormationFormateurUncheckedCreateNestedManyWithoutFormateurInput
    seances?: SeanceUncheckedCreateNestedManyWithoutFormateurInput
    files?: FileUncheckedCreateNestedManyWithoutFormateurInput
    presences?: PresenceUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type FormateurUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFormateurNestedInput
    actions?: ActionFormationFormateurUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUpdateManyWithoutFormateurNestedInput
    files?: FileUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUpdateManyWithoutFormateurNestedInput
  }

  export type FormateurUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationFormateurUncheckedUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutFormateurNestedInput
    files?: FileUncheckedUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type FormateurCreateManyInput = {
    user_id: string
  }

  export type FormateurUpdateManyMutationInput = {

  }

  export type FormateurUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantCreateInput = {
    entreprise: string
    poste: string
    user: UserCreateNestedOneWithoutParticipantInput
    actions?: ActionFormationParticipantCreateNestedManyWithoutParticipantInput
    attestations?: AttestationCreateNestedManyWithoutParticipantInput
    presences?: PresenceCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateInput = {
    user_id: string
    entreprise: string
    poste: string
    actions?: ActionFormationParticipantUncheckedCreateNestedManyWithoutParticipantInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutParticipantInput
    presences?: PresenceUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUpdateInput = {
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutParticipantNestedInput
    actions?: ActionFormationParticipantUpdateManyWithoutParticipantNestedInput
    attestations?: AttestationUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateManyInput = {
    user_id: string
    entreprise: string
    poste: string
  }

  export type ParticipantUpdateManyMutationInput = {
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
  }

  export type DomaineCreateInput = {
    libelle_domaine: string
    themes?: ThemeCreateNestedManyWithoutDomaineInput
  }

  export type DomaineUncheckedCreateInput = {
    domaine_id?: number
    libelle_domaine: string
    themes?: ThemeUncheckedCreateNestedManyWithoutDomaineInput
  }

  export type DomaineUpdateInput = {
    libelle_domaine?: StringFieldUpdateOperationsInput | string
    themes?: ThemeUpdateManyWithoutDomaineNestedInput
  }

  export type DomaineUncheckedUpdateInput = {
    domaine_id?: IntFieldUpdateOperationsInput | number
    libelle_domaine?: StringFieldUpdateOperationsInput | string
    themes?: ThemeUncheckedUpdateManyWithoutDomaineNestedInput
  }

  export type DomaineCreateManyInput = {
    domaine_id?: number
    libelle_domaine: string
  }

  export type DomaineUpdateManyMutationInput = {
    libelle_domaine?: StringFieldUpdateOperationsInput | string
  }

  export type DomaineUncheckedUpdateManyInput = {
    domaine_id?: IntFieldUpdateOperationsInput | number
    libelle_domaine?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeCreateInput = {
    libelle_theme: string
    domaine: DomaineCreateNestedOneWithoutThemesInput
    actions?: ActionFormationCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateInput = {
    theme_id?: number
    libelle_theme: string
    domaine_id: number
    actions?: ActionFormationUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeUpdateInput = {
    libelle_theme?: StringFieldUpdateOperationsInput | string
    domaine?: DomaineUpdateOneRequiredWithoutThemesNestedInput
    actions?: ActionFormationUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: StringFieldUpdateOperationsInput | string
    domaine_id?: IntFieldUpdateOperationsInput | number
    actions?: ActionFormationUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeCreateManyInput = {
    theme_id?: number
    libelle_theme: string
    domaine_id: number
  }

  export type ThemeUpdateManyMutationInput = {
    libelle_theme?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeUncheckedUpdateManyInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: StringFieldUpdateOperationsInput | string
    domaine_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionFormationCreateInput = {
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme: ThemeCreateNestedOneWithoutActionsInput
    formateurs?: ActionFormationFormateurCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantCreateNestedManyWithoutActionInput
    attestations?: AttestationCreateNestedManyWithoutActionInput
    seances?: SeanceCreateNestedManyWithoutActionInput
    files?: FileCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUncheckedCreateInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme_id: number
    formateurs?: ActionFormationFormateurUncheckedCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantUncheckedCreateNestedManyWithoutActionInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutActionInput
    seances?: SeanceUncheckedCreateNestedManyWithoutActionInput
    files?: FileUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUpdateInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: ThemeUpdateOneRequiredWithoutActionsNestedInput
    formateurs?: ActionFormationFormateurUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUpdateManyWithoutActionNestedInput
    attestations?: AttestationUpdateManyWithoutActionNestedInput
    seances?: SeanceUpdateManyWithoutActionNestedInput
    files?: FileUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: IntFieldUpdateOperationsInput | number
    formateurs?: ActionFormationFormateurUncheckedUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUncheckedUpdateManyWithoutActionNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutActionNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutActionNestedInput
    files?: FileUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationCreateManyInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme_id: number
  }

  export type ActionFormationUpdateManyMutationInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActionFormationUncheckedUpdateManyInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type SeanceCreateInput = {
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    action: ActionFormationCreateNestedOneWithoutSeancesInput
    formateur: FormateurCreateNestedOneWithoutSeancesInput
    presences?: PresenceCreateNestedManyWithoutSeanceInput
  }

  export type SeanceUncheckedCreateInput = {
    seance_id?: number
    action_id: number
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    formateur_id: string
    presences?: PresenceUncheckedCreateNestedManyWithoutSeanceInput
  }

  export type SeanceUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    action?: ActionFormationUpdateOneRequiredWithoutSeancesNestedInput
    formateur?: FormateurUpdateOneRequiredWithoutSeancesNestedInput
    presences?: PresenceUpdateManyWithoutSeanceNestedInput
  }

  export type SeanceUncheckedUpdateInput = {
    seance_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    formateur_id?: StringFieldUpdateOperationsInput | string
    presences?: PresenceUncheckedUpdateManyWithoutSeanceNestedInput
  }

  export type SeanceCreateManyInput = {
    seance_id?: number
    action_id: number
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    formateur_id: string
  }

  export type SeanceUpdateManyMutationInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
  }

  export type SeanceUncheckedUpdateManyInput = {
    seance_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    formateur_id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationFormateurCreateInput = {
    action: ActionFormationCreateNestedOneWithoutFormateursInput
    formateur: FormateurCreateNestedOneWithoutActionsInput
  }

  export type ActionFormationFormateurUncheckedCreateInput = {
    action_id: number
    formateur_id: string
  }

  export type ActionFormationFormateurUpdateInput = {
    action?: ActionFormationUpdateOneRequiredWithoutFormateursNestedInput
    formateur?: FormateurUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionFormationFormateurUncheckedUpdateInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    formateur_id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationFormateurCreateManyInput = {
    action_id: number
    formateur_id: string
  }

  export type ActionFormationFormateurUpdateManyMutationInput = {

  }

  export type ActionFormationFormateurUncheckedUpdateManyInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    formateur_id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationParticipantCreateInput = {
    date_inscription?: Date | string | null
    statut?: string | null
    action: ActionFormationCreateNestedOneWithoutParticipantsInput
    participant: ParticipantCreateNestedOneWithoutActionsInput
  }

  export type ActionFormationParticipantUncheckedCreateInput = {
    action_id: number
    participant_id: string
    date_inscription?: Date | string | null
    statut?: string | null
  }

  export type ActionFormationParticipantUpdateInput = {
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    action?: ActionFormationUpdateOneRequiredWithoutParticipantsNestedInput
    participant?: ParticipantUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionFormationParticipantUncheckedUpdateInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    participant_id?: StringFieldUpdateOperationsInput | string
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionFormationParticipantCreateManyInput = {
    action_id: number
    participant_id: string
    date_inscription?: Date | string | null
    statut?: string | null
  }

  export type ActionFormationParticipantUpdateManyMutationInput = {
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionFormationParticipantUncheckedUpdateManyInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    participant_id?: StringFieldUpdateOperationsInput | string
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttestationCreateInput = {
    date_emission?: Date | string | null
    qr_code_ref?: string | null
    participant: ParticipantCreateNestedOneWithoutAttestationsInput
    action: ActionFormationCreateNestedOneWithoutAttestationsInput
  }

  export type AttestationUncheckedCreateInput = {
    attestation_id?: number
    participant_id: string
    action_id: number
    date_emission?: Date | string | null
    qr_code_ref?: string | null
  }

  export type AttestationUpdateInput = {
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
    participant?: ParticipantUpdateOneRequiredWithoutAttestationsNestedInput
    action?: ActionFormationUpdateOneRequiredWithoutAttestationsNestedInput
  }

  export type AttestationUncheckedUpdateInput = {
    attestation_id?: IntFieldUpdateOperationsInput | number
    participant_id?: StringFieldUpdateOperationsInput | string
    action_id?: IntFieldUpdateOperationsInput | number
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttestationCreateManyInput = {
    attestation_id?: number
    participant_id: string
    action_id: number
    date_emission?: Date | string | null
    qr_code_ref?: string | null
  }

  export type AttestationUpdateManyMutationInput = {
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttestationUncheckedUpdateManyInput = {
    attestation_id?: IntFieldUpdateOperationsInput | number
    participant_id?: StringFieldUpdateOperationsInput | string
    action_id?: IntFieldUpdateOperationsInput | number
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileCreateInput = {
    file_path: string
    type: $Enums.FileType
    validated?: boolean | null
    validated_at?: Date | string | null
    formateur?: FormateurCreateNestedOneWithoutFilesInput
    action?: ActionFormationCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    file_id?: number
    file_path: string
    type: $Enums.FileType
    formateur_id?: string | null
    action_id?: number | null
    validated?: boolean | null
    validated_at?: Date | string | null
  }

  export type FileUpdateInput = {
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    formateur?: FormateurUpdateOneWithoutFilesNestedInput
    action?: ActionFormationUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
    action_id?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileCreateManyInput = {
    file_id?: number
    file_path: string
    type: $Enums.FileType
    formateur_id?: string | null
    action_id?: number | null
    validated?: boolean | null
    validated_at?: Date | string | null
  }

  export type FileUpdateManyMutationInput = {
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUncheckedUpdateManyInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
    action_id?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PresenceCreateInput = {
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant: ParticipantCreateNestedOneWithoutPresencesInput
    seance: SeanceCreateNestedOneWithoutPresencesInput
    formateur?: FormateurCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant_id: string
    seance_id: number
    formateur_id?: string | null
  }

  export type PresenceUpdateInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutPresencesNestedInput
    seance?: SeanceUpdateOneRequiredWithoutPresencesNestedInput
    formateur?: FormateurUpdateOneWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_id?: StringFieldUpdateOperationsInput | string
    seance_id?: IntFieldUpdateOperationsInput | number
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PresenceCreateManyInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant_id: string
    seance_id: number
    formateur_id?: string | null
  }

  export type PresenceUpdateManyMutationInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresenceUncheckedUpdateManyInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_id?: StringFieldUpdateOperationsInput | string
    seance_id?: IntFieldUpdateOperationsInput | number
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    role_id?: SortOrder
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

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type FormateurNullableScalarRelationFilter = {
    is?: FormateurWhereInput | null
    isNot?: FormateurWhereInput | null
  }

  export type ParticipantNullableScalarRelationFilter = {
    is?: ParticipantWhereInput | null
    isNot?: ParticipantWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    role_id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ActionFormationFormateurListRelationFilter = {
    every?: ActionFormationFormateurWhereInput
    some?: ActionFormationFormateurWhereInput
    none?: ActionFormationFormateurWhereInput
  }

  export type SeanceListRelationFilter = {
    every?: SeanceWhereInput
    some?: SeanceWhereInput
    none?: SeanceWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type PresenceListRelationFilter = {
    every?: PresenceWhereInput
    some?: PresenceWhereInput
    none?: PresenceWhereInput
  }

  export type ActionFormationFormateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormateurCountOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type FormateurMaxOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type FormateurMinOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type ActionFormationParticipantListRelationFilter = {
    every?: ActionFormationParticipantWhereInput
    some?: ActionFormationParticipantWhereInput
    none?: ActionFormationParticipantWhereInput
  }

  export type AttestationListRelationFilter = {
    every?: AttestationWhereInput
    some?: AttestationWhereInput
    none?: AttestationWhereInput
  }

  export type ActionFormationParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttestationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantCountOrderByAggregateInput = {
    user_id?: SortOrder
    entreprise?: SortOrder
    poste?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    user_id?: SortOrder
    entreprise?: SortOrder
    poste?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    user_id?: SortOrder
    entreprise?: SortOrder
    poste?: SortOrder
  }

  export type ThemeListRelationFilter = {
    every?: ThemeWhereInput
    some?: ThemeWhereInput
    none?: ThemeWhereInput
  }

  export type ThemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomaineCountOrderByAggregateInput = {
    domaine_id?: SortOrder
    libelle_domaine?: SortOrder
  }

  export type DomaineAvgOrderByAggregateInput = {
    domaine_id?: SortOrder
  }

  export type DomaineMaxOrderByAggregateInput = {
    domaine_id?: SortOrder
    libelle_domaine?: SortOrder
  }

  export type DomaineMinOrderByAggregateInput = {
    domaine_id?: SortOrder
    libelle_domaine?: SortOrder
  }

  export type DomaineSumOrderByAggregateInput = {
    domaine_id?: SortOrder
  }

  export type DomaineScalarRelationFilter = {
    is?: DomaineWhereInput
    isNot?: DomaineWhereInput
  }

  export type ActionFormationListRelationFilter = {
    every?: ActionFormationWhereInput
    some?: ActionFormationWhereInput
    none?: ActionFormationWhereInput
  }

  export type ActionFormationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThemeCountOrderByAggregateInput = {
    theme_id?: SortOrder
    libelle_theme?: SortOrder
    domaine_id?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    theme_id?: SortOrder
    domaine_id?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    theme_id?: SortOrder
    libelle_theme?: SortOrder
    domaine_id?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    theme_id?: SortOrder
    libelle_theme?: SortOrder
    domaine_id?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    theme_id?: SortOrder
    domaine_id?: SortOrder
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

  export type ThemeScalarRelationFilter = {
    is?: ThemeWhereInput
    isNot?: ThemeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActionFormationCountOrderByAggregateInput = {
    action_id?: SortOrder
    type_action?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrder
    duree_heures?: SortOrder
    nb_seances?: SortOrder
    lieu?: SortOrder
    nb_participants_prevu?: SortOrder
    theme_id?: SortOrder
  }

  export type ActionFormationAvgOrderByAggregateInput = {
    action_id?: SortOrder
    duree_jours?: SortOrder
    duree_heures?: SortOrder
    nb_seances?: SortOrder
    nb_participants_prevu?: SortOrder
    theme_id?: SortOrder
  }

  export type ActionFormationMaxOrderByAggregateInput = {
    action_id?: SortOrder
    type_action?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrder
    duree_heures?: SortOrder
    nb_seances?: SortOrder
    lieu?: SortOrder
    nb_participants_prevu?: SortOrder
    theme_id?: SortOrder
  }

  export type ActionFormationMinOrderByAggregateInput = {
    action_id?: SortOrder
    type_action?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    duree_jours?: SortOrder
    duree_heures?: SortOrder
    nb_seances?: SortOrder
    lieu?: SortOrder
    nb_participants_prevu?: SortOrder
    theme_id?: SortOrder
  }

  export type ActionFormationSumOrderByAggregateInput = {
    action_id?: SortOrder
    duree_jours?: SortOrder
    duree_heures?: SortOrder
    nb_seances?: SortOrder
    nb_participants_prevu?: SortOrder
    theme_id?: SortOrder
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

  export type EnumSeanceStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.SeanceStatut | EnumSeanceStatutFieldRefInput<$PrismaModel>
    in?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumSeanceStatutFilter<$PrismaModel> | $Enums.SeanceStatut
  }

  export type ActionFormationScalarRelationFilter = {
    is?: ActionFormationWhereInput
    isNot?: ActionFormationWhereInput
  }

  export type FormateurScalarRelationFilter = {
    is?: FormateurWhereInput
    isNot?: FormateurWhereInput
  }

  export type SeanceCountOrderByAggregateInput = {
    seance_id?: SortOrder
    action_id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    duree_heures?: SortOrder
    statut?: SortOrder
    formateur_id?: SortOrder
  }

  export type SeanceAvgOrderByAggregateInput = {
    seance_id?: SortOrder
    action_id?: SortOrder
    duree_heures?: SortOrder
  }

  export type SeanceMaxOrderByAggregateInput = {
    seance_id?: SortOrder
    action_id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    duree_heures?: SortOrder
    statut?: SortOrder
    formateur_id?: SortOrder
  }

  export type SeanceMinOrderByAggregateInput = {
    seance_id?: SortOrder
    action_id?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    duree_heures?: SortOrder
    statut?: SortOrder
    formateur_id?: SortOrder
  }

  export type SeanceSumOrderByAggregateInput = {
    seance_id?: SortOrder
    action_id?: SortOrder
    duree_heures?: SortOrder
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

  export type EnumSeanceStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeanceStatut | EnumSeanceStatutFieldRefInput<$PrismaModel>
    in?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumSeanceStatutWithAggregatesFilter<$PrismaModel> | $Enums.SeanceStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeanceStatutFilter<$PrismaModel>
    _max?: NestedEnumSeanceStatutFilter<$PrismaModel>
  }

  export type ActionFormationFormateurAction_idFormateur_idCompoundUniqueInput = {
    action_id: number
    formateur_id: string
  }

  export type ActionFormationFormateurCountOrderByAggregateInput = {
    action_id?: SortOrder
    formateur_id?: SortOrder
  }

  export type ActionFormationFormateurAvgOrderByAggregateInput = {
    action_id?: SortOrder
  }

  export type ActionFormationFormateurMaxOrderByAggregateInput = {
    action_id?: SortOrder
    formateur_id?: SortOrder
  }

  export type ActionFormationFormateurMinOrderByAggregateInput = {
    action_id?: SortOrder
    formateur_id?: SortOrder
  }

  export type ActionFormationFormateurSumOrderByAggregateInput = {
    action_id?: SortOrder
  }

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type ActionFormationParticipantAction_idParticipant_idCompoundUniqueInput = {
    action_id: number
    participant_id: string
  }

  export type ActionFormationParticipantCountOrderByAggregateInput = {
    action_id?: SortOrder
    participant_id?: SortOrder
    date_inscription?: SortOrder
    statut?: SortOrder
  }

  export type ActionFormationParticipantAvgOrderByAggregateInput = {
    action_id?: SortOrder
  }

  export type ActionFormationParticipantMaxOrderByAggregateInput = {
    action_id?: SortOrder
    participant_id?: SortOrder
    date_inscription?: SortOrder
    statut?: SortOrder
  }

  export type ActionFormationParticipantMinOrderByAggregateInput = {
    action_id?: SortOrder
    participant_id?: SortOrder
    date_inscription?: SortOrder
    statut?: SortOrder
  }

  export type ActionFormationParticipantSumOrderByAggregateInput = {
    action_id?: SortOrder
  }

  export type AttestationParticipant_idAction_idCompoundUniqueInput = {
    participant_id: string
    action_id: number
  }

  export type AttestationCountOrderByAggregateInput = {
    attestation_id?: SortOrder
    participant_id?: SortOrder
    action_id?: SortOrder
    date_emission?: SortOrder
    qr_code_ref?: SortOrder
  }

  export type AttestationAvgOrderByAggregateInput = {
    attestation_id?: SortOrder
    action_id?: SortOrder
  }

  export type AttestationMaxOrderByAggregateInput = {
    attestation_id?: SortOrder
    participant_id?: SortOrder
    action_id?: SortOrder
    date_emission?: SortOrder
    qr_code_ref?: SortOrder
  }

  export type AttestationMinOrderByAggregateInput = {
    attestation_id?: SortOrder
    participant_id?: SortOrder
    action_id?: SortOrder
    date_emission?: SortOrder
    qr_code_ref?: SortOrder
  }

  export type AttestationSumOrderByAggregateInput = {
    attestation_id?: SortOrder
    action_id?: SortOrder
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ActionFormationNullableScalarRelationFilter = {
    is?: ActionFormationWhereInput | null
    isNot?: ActionFormationWhereInput | null
  }

  export type FileCountOrderByAggregateInput = {
    file_id?: SortOrder
    file_path?: SortOrder
    type?: SortOrder
    formateur_id?: SortOrder
    action_id?: SortOrder
    validated?: SortOrder
    validated_at?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    file_id?: SortOrder
    action_id?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    file_id?: SortOrder
    file_path?: SortOrder
    type?: SortOrder
    formateur_id?: SortOrder
    action_id?: SortOrder
    validated?: SortOrder
    validated_at?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    file_id?: SortOrder
    file_path?: SortOrder
    type?: SortOrder
    formateur_id?: SortOrder
    action_id?: SortOrder
    validated?: SortOrder
    validated_at?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    file_id?: SortOrder
    action_id?: SortOrder
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumPresenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusFilter<$PrismaModel> | $Enums.PresenceStatus
  }

  export type SeanceScalarRelationFilter = {
    is?: SeanceWhereInput
    isNot?: SeanceWhereInput
  }

  export type PresenceParticipant_idSeance_idCompoundUniqueInput = {
    participant_id: string
    seance_id: number
  }

  export type PresenceCountOrderByAggregateInput = {
    presence_id?: SortOrder
    status?: SortOrder
    noted_at?: SortOrder
    participant_id?: SortOrder
    seance_id?: SortOrder
    formateur_id?: SortOrder
  }

  export type PresenceAvgOrderByAggregateInput = {
    presence_id?: SortOrder
    seance_id?: SortOrder
  }

  export type PresenceMaxOrderByAggregateInput = {
    presence_id?: SortOrder
    status?: SortOrder
    noted_at?: SortOrder
    participant_id?: SortOrder
    seance_id?: SortOrder
    formateur_id?: SortOrder
  }

  export type PresenceMinOrderByAggregateInput = {
    presence_id?: SortOrder
    status?: SortOrder
    noted_at?: SortOrder
    participant_id?: SortOrder
    seance_id?: SortOrder
    formateur_id?: SortOrder
  }

  export type PresenceSumOrderByAggregateInput = {
    presence_id?: SortOrder
    seance_id?: SortOrder
  }

  export type EnumPresenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.PresenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceStatusFilter<$PrismaModel>
    _max?: NestedEnumPresenceStatusFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type FormateurCreateNestedOneWithoutUserInput = {
    create?: XOR<FormateurCreateWithoutUserInput, FormateurUncheckedCreateWithoutUserInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutUserInput
    connect?: FormateurWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput
    connect?: ParticipantWhereUniqueInput
  }

  export type FormateurUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FormateurCreateWithoutUserInput, FormateurUncheckedCreateWithoutUserInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutUserInput
    connect?: FormateurWhereUniqueInput
  }

  export type ParticipantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput
    connect?: ParticipantWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type FormateurUpdateOneWithoutUserNestedInput = {
    create?: XOR<FormateurCreateWithoutUserInput, FormateurUncheckedCreateWithoutUserInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutUserInput
    upsert?: FormateurUpsertWithoutUserInput
    disconnect?: FormateurWhereInput | boolean
    delete?: FormateurWhereInput | boolean
    connect?: FormateurWhereUniqueInput
    update?: XOR<XOR<FormateurUpdateToOneWithWhereWithoutUserInput, FormateurUpdateWithoutUserInput>, FormateurUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput
    upsert?: ParticipantUpsertWithoutUserInput
    disconnect?: ParticipantWhereInput | boolean
    delete?: ParticipantWhereInput | boolean
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutUserInput, ParticipantUpdateWithoutUserInput>, ParticipantUncheckedUpdateWithoutUserInput>
  }

  export type FormateurUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FormateurCreateWithoutUserInput, FormateurUncheckedCreateWithoutUserInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutUserInput
    upsert?: FormateurUpsertWithoutUserInput
    disconnect?: FormateurWhereInput | boolean
    delete?: FormateurWhereInput | boolean
    connect?: FormateurWhereUniqueInput
    update?: XOR<XOR<FormateurUpdateToOneWithWhereWithoutUserInput, FormateurUpdateWithoutUserInput>, FormateurUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutUserInput
    upsert?: ParticipantUpsertWithoutUserInput
    disconnect?: ParticipantWhereInput | boolean
    delete?: ParticipantWhereInput | boolean
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutUserInput, ParticipantUpdateWithoutUserInput>, ParticipantUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutFormateurInput = {
    create?: XOR<UserCreateWithoutFormateurInput, UserUncheckedCreateWithoutFormateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormateurInput
    connect?: UserWhereUniqueInput
  }

  export type ActionFormationFormateurCreateNestedManyWithoutFormateurInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutFormateurInput, ActionFormationFormateurUncheckedCreateWithoutFormateurInput> | ActionFormationFormateurCreateWithoutFormateurInput[] | ActionFormationFormateurUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutFormateurInput | ActionFormationFormateurCreateOrConnectWithoutFormateurInput[]
    createMany?: ActionFormationFormateurCreateManyFormateurInputEnvelope
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
  }

  export type SeanceCreateNestedManyWithoutFormateurInput = {
    create?: XOR<SeanceCreateWithoutFormateurInput, SeanceUncheckedCreateWithoutFormateurInput> | SeanceCreateWithoutFormateurInput[] | SeanceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutFormateurInput | SeanceCreateOrConnectWithoutFormateurInput[]
    createMany?: SeanceCreateManyFormateurInputEnvelope
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutFormateurInput = {
    create?: XOR<FileCreateWithoutFormateurInput, FileUncheckedCreateWithoutFormateurInput> | FileCreateWithoutFormateurInput[] | FileUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFormateurInput | FileCreateOrConnectWithoutFormateurInput[]
    createMany?: FileCreateManyFormateurInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type PresenceCreateNestedManyWithoutFormateurInput = {
    create?: XOR<PresenceCreateWithoutFormateurInput, PresenceUncheckedCreateWithoutFormateurInput> | PresenceCreateWithoutFormateurInput[] | PresenceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutFormateurInput | PresenceCreateOrConnectWithoutFormateurInput[]
    createMany?: PresenceCreateManyFormateurInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type ActionFormationFormateurUncheckedCreateNestedManyWithoutFormateurInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutFormateurInput, ActionFormationFormateurUncheckedCreateWithoutFormateurInput> | ActionFormationFormateurCreateWithoutFormateurInput[] | ActionFormationFormateurUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutFormateurInput | ActionFormationFormateurCreateOrConnectWithoutFormateurInput[]
    createMany?: ActionFormationFormateurCreateManyFormateurInputEnvelope
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
  }

  export type SeanceUncheckedCreateNestedManyWithoutFormateurInput = {
    create?: XOR<SeanceCreateWithoutFormateurInput, SeanceUncheckedCreateWithoutFormateurInput> | SeanceCreateWithoutFormateurInput[] | SeanceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutFormateurInput | SeanceCreateOrConnectWithoutFormateurInput[]
    createMany?: SeanceCreateManyFormateurInputEnvelope
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutFormateurInput = {
    create?: XOR<FileCreateWithoutFormateurInput, FileUncheckedCreateWithoutFormateurInput> | FileCreateWithoutFormateurInput[] | FileUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFormateurInput | FileCreateOrConnectWithoutFormateurInput[]
    createMany?: FileCreateManyFormateurInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type PresenceUncheckedCreateNestedManyWithoutFormateurInput = {
    create?: XOR<PresenceCreateWithoutFormateurInput, PresenceUncheckedCreateWithoutFormateurInput> | PresenceCreateWithoutFormateurInput[] | PresenceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutFormateurInput | PresenceCreateOrConnectWithoutFormateurInput[]
    createMany?: PresenceCreateManyFormateurInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFormateurNestedInput = {
    create?: XOR<UserCreateWithoutFormateurInput, UserUncheckedCreateWithoutFormateurInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormateurInput
    upsert?: UserUpsertWithoutFormateurInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormateurInput, UserUpdateWithoutFormateurInput>, UserUncheckedUpdateWithoutFormateurInput>
  }

  export type ActionFormationFormateurUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutFormateurInput, ActionFormationFormateurUncheckedCreateWithoutFormateurInput> | ActionFormationFormateurCreateWithoutFormateurInput[] | ActionFormationFormateurUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutFormateurInput | ActionFormationFormateurCreateOrConnectWithoutFormateurInput[]
    upsert?: ActionFormationFormateurUpsertWithWhereUniqueWithoutFormateurInput | ActionFormationFormateurUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: ActionFormationFormateurCreateManyFormateurInputEnvelope
    set?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    disconnect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    delete?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    update?: ActionFormationFormateurUpdateWithWhereUniqueWithoutFormateurInput | ActionFormationFormateurUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: ActionFormationFormateurUpdateManyWithWhereWithoutFormateurInput | ActionFormationFormateurUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: ActionFormationFormateurScalarWhereInput | ActionFormationFormateurScalarWhereInput[]
  }

  export type SeanceUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<SeanceCreateWithoutFormateurInput, SeanceUncheckedCreateWithoutFormateurInput> | SeanceCreateWithoutFormateurInput[] | SeanceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutFormateurInput | SeanceCreateOrConnectWithoutFormateurInput[]
    upsert?: SeanceUpsertWithWhereUniqueWithoutFormateurInput | SeanceUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: SeanceCreateManyFormateurInputEnvelope
    set?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    disconnect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    delete?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    update?: SeanceUpdateWithWhereUniqueWithoutFormateurInput | SeanceUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: SeanceUpdateManyWithWhereWithoutFormateurInput | SeanceUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: SeanceScalarWhereInput | SeanceScalarWhereInput[]
  }

  export type FileUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<FileCreateWithoutFormateurInput, FileUncheckedCreateWithoutFormateurInput> | FileCreateWithoutFormateurInput[] | FileUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFormateurInput | FileCreateOrConnectWithoutFormateurInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutFormateurInput | FileUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: FileCreateManyFormateurInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutFormateurInput | FileUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: FileUpdateManyWithWhereWithoutFormateurInput | FileUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type PresenceUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<PresenceCreateWithoutFormateurInput, PresenceUncheckedCreateWithoutFormateurInput> | PresenceCreateWithoutFormateurInput[] | PresenceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutFormateurInput | PresenceCreateOrConnectWithoutFormateurInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutFormateurInput | PresenceUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: PresenceCreateManyFormateurInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutFormateurInput | PresenceUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutFormateurInput | PresenceUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type ActionFormationFormateurUncheckedUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutFormateurInput, ActionFormationFormateurUncheckedCreateWithoutFormateurInput> | ActionFormationFormateurCreateWithoutFormateurInput[] | ActionFormationFormateurUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutFormateurInput | ActionFormationFormateurCreateOrConnectWithoutFormateurInput[]
    upsert?: ActionFormationFormateurUpsertWithWhereUniqueWithoutFormateurInput | ActionFormationFormateurUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: ActionFormationFormateurCreateManyFormateurInputEnvelope
    set?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    disconnect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    delete?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    update?: ActionFormationFormateurUpdateWithWhereUniqueWithoutFormateurInput | ActionFormationFormateurUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: ActionFormationFormateurUpdateManyWithWhereWithoutFormateurInput | ActionFormationFormateurUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: ActionFormationFormateurScalarWhereInput | ActionFormationFormateurScalarWhereInput[]
  }

  export type SeanceUncheckedUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<SeanceCreateWithoutFormateurInput, SeanceUncheckedCreateWithoutFormateurInput> | SeanceCreateWithoutFormateurInput[] | SeanceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutFormateurInput | SeanceCreateOrConnectWithoutFormateurInput[]
    upsert?: SeanceUpsertWithWhereUniqueWithoutFormateurInput | SeanceUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: SeanceCreateManyFormateurInputEnvelope
    set?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    disconnect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    delete?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    update?: SeanceUpdateWithWhereUniqueWithoutFormateurInput | SeanceUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: SeanceUpdateManyWithWhereWithoutFormateurInput | SeanceUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: SeanceScalarWhereInput | SeanceScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<FileCreateWithoutFormateurInput, FileUncheckedCreateWithoutFormateurInput> | FileCreateWithoutFormateurInput[] | FileUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: FileCreateOrConnectWithoutFormateurInput | FileCreateOrConnectWithoutFormateurInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutFormateurInput | FileUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: FileCreateManyFormateurInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutFormateurInput | FileUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: FileUpdateManyWithWhereWithoutFormateurInput | FileUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type PresenceUncheckedUpdateManyWithoutFormateurNestedInput = {
    create?: XOR<PresenceCreateWithoutFormateurInput, PresenceUncheckedCreateWithoutFormateurInput> | PresenceCreateWithoutFormateurInput[] | PresenceUncheckedCreateWithoutFormateurInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutFormateurInput | PresenceCreateOrConnectWithoutFormateurInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutFormateurInput | PresenceUpsertWithWhereUniqueWithoutFormateurInput[]
    createMany?: PresenceCreateManyFormateurInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutFormateurInput | PresenceUpdateWithWhereUniqueWithoutFormateurInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutFormateurInput | PresenceUpdateManyWithWhereWithoutFormateurInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParticipantInput = {
    create?: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput
    connect?: UserWhereUniqueInput
  }

  export type ActionFormationParticipantCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutParticipantInput, ActionFormationParticipantUncheckedCreateWithoutParticipantInput> | ActionFormationParticipantCreateWithoutParticipantInput[] | ActionFormationParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutParticipantInput | ActionFormationParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: ActionFormationParticipantCreateManyParticipantInputEnvelope
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
  }

  export type AttestationCreateNestedManyWithoutParticipantInput = {
    create?: XOR<AttestationCreateWithoutParticipantInput, AttestationUncheckedCreateWithoutParticipantInput> | AttestationCreateWithoutParticipantInput[] | AttestationUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutParticipantInput | AttestationCreateOrConnectWithoutParticipantInput[]
    createMany?: AttestationCreateManyParticipantInputEnvelope
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
  }

  export type PresenceCreateNestedManyWithoutParticipantInput = {
    create?: XOR<PresenceCreateWithoutParticipantInput, PresenceUncheckedCreateWithoutParticipantInput> | PresenceCreateWithoutParticipantInput[] | PresenceUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutParticipantInput | PresenceCreateOrConnectWithoutParticipantInput[]
    createMany?: PresenceCreateManyParticipantInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type ActionFormationParticipantUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutParticipantInput, ActionFormationParticipantUncheckedCreateWithoutParticipantInput> | ActionFormationParticipantCreateWithoutParticipantInput[] | ActionFormationParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutParticipantInput | ActionFormationParticipantCreateOrConnectWithoutParticipantInput[]
    createMany?: ActionFormationParticipantCreateManyParticipantInputEnvelope
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
  }

  export type AttestationUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<AttestationCreateWithoutParticipantInput, AttestationUncheckedCreateWithoutParticipantInput> | AttestationCreateWithoutParticipantInput[] | AttestationUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutParticipantInput | AttestationCreateOrConnectWithoutParticipantInput[]
    createMany?: AttestationCreateManyParticipantInputEnvelope
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
  }

  export type PresenceUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<PresenceCreateWithoutParticipantInput, PresenceUncheckedCreateWithoutParticipantInput> | PresenceCreateWithoutParticipantInput[] | PresenceUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutParticipantInput | PresenceCreateOrConnectWithoutParticipantInput[]
    createMany?: PresenceCreateManyParticipantInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutParticipantNestedInput = {
    create?: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantInput
    upsert?: UserUpsertWithoutParticipantInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantInput, UserUpdateWithoutParticipantInput>, UserUncheckedUpdateWithoutParticipantInput>
  }

  export type ActionFormationParticipantUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutParticipantInput, ActionFormationParticipantUncheckedCreateWithoutParticipantInput> | ActionFormationParticipantCreateWithoutParticipantInput[] | ActionFormationParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutParticipantInput | ActionFormationParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: ActionFormationParticipantUpsertWithWhereUniqueWithoutParticipantInput | ActionFormationParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ActionFormationParticipantCreateManyParticipantInputEnvelope
    set?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    disconnect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    delete?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    update?: ActionFormationParticipantUpdateWithWhereUniqueWithoutParticipantInput | ActionFormationParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ActionFormationParticipantUpdateManyWithWhereWithoutParticipantInput | ActionFormationParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ActionFormationParticipantScalarWhereInput | ActionFormationParticipantScalarWhereInput[]
  }

  export type AttestationUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<AttestationCreateWithoutParticipantInput, AttestationUncheckedCreateWithoutParticipantInput> | AttestationCreateWithoutParticipantInput[] | AttestationUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutParticipantInput | AttestationCreateOrConnectWithoutParticipantInput[]
    upsert?: AttestationUpsertWithWhereUniqueWithoutParticipantInput | AttestationUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: AttestationCreateManyParticipantInputEnvelope
    set?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    disconnect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    delete?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    update?: AttestationUpdateWithWhereUniqueWithoutParticipantInput | AttestationUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: AttestationUpdateManyWithWhereWithoutParticipantInput | AttestationUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: AttestationScalarWhereInput | AttestationScalarWhereInput[]
  }

  export type PresenceUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<PresenceCreateWithoutParticipantInput, PresenceUncheckedCreateWithoutParticipantInput> | PresenceCreateWithoutParticipantInput[] | PresenceUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutParticipantInput | PresenceCreateOrConnectWithoutParticipantInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutParticipantInput | PresenceUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: PresenceCreateManyParticipantInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutParticipantInput | PresenceUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutParticipantInput | PresenceUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type ActionFormationParticipantUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutParticipantInput, ActionFormationParticipantUncheckedCreateWithoutParticipantInput> | ActionFormationParticipantCreateWithoutParticipantInput[] | ActionFormationParticipantUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutParticipantInput | ActionFormationParticipantCreateOrConnectWithoutParticipantInput[]
    upsert?: ActionFormationParticipantUpsertWithWhereUniqueWithoutParticipantInput | ActionFormationParticipantUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ActionFormationParticipantCreateManyParticipantInputEnvelope
    set?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    disconnect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    delete?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    update?: ActionFormationParticipantUpdateWithWhereUniqueWithoutParticipantInput | ActionFormationParticipantUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ActionFormationParticipantUpdateManyWithWhereWithoutParticipantInput | ActionFormationParticipantUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ActionFormationParticipantScalarWhereInput | ActionFormationParticipantScalarWhereInput[]
  }

  export type AttestationUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<AttestationCreateWithoutParticipantInput, AttestationUncheckedCreateWithoutParticipantInput> | AttestationCreateWithoutParticipantInput[] | AttestationUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutParticipantInput | AttestationCreateOrConnectWithoutParticipantInput[]
    upsert?: AttestationUpsertWithWhereUniqueWithoutParticipantInput | AttestationUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: AttestationCreateManyParticipantInputEnvelope
    set?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    disconnect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    delete?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    update?: AttestationUpdateWithWhereUniqueWithoutParticipantInput | AttestationUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: AttestationUpdateManyWithWhereWithoutParticipantInput | AttestationUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: AttestationScalarWhereInput | AttestationScalarWhereInput[]
  }

  export type PresenceUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<PresenceCreateWithoutParticipantInput, PresenceUncheckedCreateWithoutParticipantInput> | PresenceCreateWithoutParticipantInput[] | PresenceUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutParticipantInput | PresenceCreateOrConnectWithoutParticipantInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutParticipantInput | PresenceUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: PresenceCreateManyParticipantInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutParticipantInput | PresenceUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutParticipantInput | PresenceUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type ThemeCreateNestedManyWithoutDomaineInput = {
    create?: XOR<ThemeCreateWithoutDomaineInput, ThemeUncheckedCreateWithoutDomaineInput> | ThemeCreateWithoutDomaineInput[] | ThemeUncheckedCreateWithoutDomaineInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutDomaineInput | ThemeCreateOrConnectWithoutDomaineInput[]
    createMany?: ThemeCreateManyDomaineInputEnvelope
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
  }

  export type ThemeUncheckedCreateNestedManyWithoutDomaineInput = {
    create?: XOR<ThemeCreateWithoutDomaineInput, ThemeUncheckedCreateWithoutDomaineInput> | ThemeCreateWithoutDomaineInput[] | ThemeUncheckedCreateWithoutDomaineInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutDomaineInput | ThemeCreateOrConnectWithoutDomaineInput[]
    createMany?: ThemeCreateManyDomaineInputEnvelope
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
  }

  export type ThemeUpdateManyWithoutDomaineNestedInput = {
    create?: XOR<ThemeCreateWithoutDomaineInput, ThemeUncheckedCreateWithoutDomaineInput> | ThemeCreateWithoutDomaineInput[] | ThemeUncheckedCreateWithoutDomaineInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutDomaineInput | ThemeCreateOrConnectWithoutDomaineInput[]
    upsert?: ThemeUpsertWithWhereUniqueWithoutDomaineInput | ThemeUpsertWithWhereUniqueWithoutDomaineInput[]
    createMany?: ThemeCreateManyDomaineInputEnvelope
    set?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    disconnect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    delete?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    update?: ThemeUpdateWithWhereUniqueWithoutDomaineInput | ThemeUpdateWithWhereUniqueWithoutDomaineInput[]
    updateMany?: ThemeUpdateManyWithWhereWithoutDomaineInput | ThemeUpdateManyWithWhereWithoutDomaineInput[]
    deleteMany?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
  }

  export type ThemeUncheckedUpdateManyWithoutDomaineNestedInput = {
    create?: XOR<ThemeCreateWithoutDomaineInput, ThemeUncheckedCreateWithoutDomaineInput> | ThemeCreateWithoutDomaineInput[] | ThemeUncheckedCreateWithoutDomaineInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutDomaineInput | ThemeCreateOrConnectWithoutDomaineInput[]
    upsert?: ThemeUpsertWithWhereUniqueWithoutDomaineInput | ThemeUpsertWithWhereUniqueWithoutDomaineInput[]
    createMany?: ThemeCreateManyDomaineInputEnvelope
    set?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    disconnect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    delete?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    update?: ThemeUpdateWithWhereUniqueWithoutDomaineInput | ThemeUpdateWithWhereUniqueWithoutDomaineInput[]
    updateMany?: ThemeUpdateManyWithWhereWithoutDomaineInput | ThemeUpdateManyWithWhereWithoutDomaineInput[]
    deleteMany?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
  }

  export type DomaineCreateNestedOneWithoutThemesInput = {
    create?: XOR<DomaineCreateWithoutThemesInput, DomaineUncheckedCreateWithoutThemesInput>
    connectOrCreate?: DomaineCreateOrConnectWithoutThemesInput
    connect?: DomaineWhereUniqueInput
  }

  export type ActionFormationCreateNestedManyWithoutThemeInput = {
    create?: XOR<ActionFormationCreateWithoutThemeInput, ActionFormationUncheckedCreateWithoutThemeInput> | ActionFormationCreateWithoutThemeInput[] | ActionFormationUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ActionFormationCreateOrConnectWithoutThemeInput | ActionFormationCreateOrConnectWithoutThemeInput[]
    createMany?: ActionFormationCreateManyThemeInputEnvelope
    connect?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
  }

  export type ActionFormationUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<ActionFormationCreateWithoutThemeInput, ActionFormationUncheckedCreateWithoutThemeInput> | ActionFormationCreateWithoutThemeInput[] | ActionFormationUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ActionFormationCreateOrConnectWithoutThemeInput | ActionFormationCreateOrConnectWithoutThemeInput[]
    createMany?: ActionFormationCreateManyThemeInputEnvelope
    connect?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
  }

  export type DomaineUpdateOneRequiredWithoutThemesNestedInput = {
    create?: XOR<DomaineCreateWithoutThemesInput, DomaineUncheckedCreateWithoutThemesInput>
    connectOrCreate?: DomaineCreateOrConnectWithoutThemesInput
    upsert?: DomaineUpsertWithoutThemesInput
    connect?: DomaineWhereUniqueInput
    update?: XOR<XOR<DomaineUpdateToOneWithWhereWithoutThemesInput, DomaineUpdateWithoutThemesInput>, DomaineUncheckedUpdateWithoutThemesInput>
  }

  export type ActionFormationUpdateManyWithoutThemeNestedInput = {
    create?: XOR<ActionFormationCreateWithoutThemeInput, ActionFormationUncheckedCreateWithoutThemeInput> | ActionFormationCreateWithoutThemeInput[] | ActionFormationUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ActionFormationCreateOrConnectWithoutThemeInput | ActionFormationCreateOrConnectWithoutThemeInput[]
    upsert?: ActionFormationUpsertWithWhereUniqueWithoutThemeInput | ActionFormationUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: ActionFormationCreateManyThemeInputEnvelope
    set?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    disconnect?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    delete?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    connect?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    update?: ActionFormationUpdateWithWhereUniqueWithoutThemeInput | ActionFormationUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: ActionFormationUpdateManyWithWhereWithoutThemeInput | ActionFormationUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: ActionFormationScalarWhereInput | ActionFormationScalarWhereInput[]
  }

  export type ActionFormationUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<ActionFormationCreateWithoutThemeInput, ActionFormationUncheckedCreateWithoutThemeInput> | ActionFormationCreateWithoutThemeInput[] | ActionFormationUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ActionFormationCreateOrConnectWithoutThemeInput | ActionFormationCreateOrConnectWithoutThemeInput[]
    upsert?: ActionFormationUpsertWithWhereUniqueWithoutThemeInput | ActionFormationUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: ActionFormationCreateManyThemeInputEnvelope
    set?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    disconnect?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    delete?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    connect?: ActionFormationWhereUniqueInput | ActionFormationWhereUniqueInput[]
    update?: ActionFormationUpdateWithWhereUniqueWithoutThemeInput | ActionFormationUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: ActionFormationUpdateManyWithWhereWithoutThemeInput | ActionFormationUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: ActionFormationScalarWhereInput | ActionFormationScalarWhereInput[]
  }

  export type ThemeCreateNestedOneWithoutActionsInput = {
    create?: XOR<ThemeCreateWithoutActionsInput, ThemeUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutActionsInput
    connect?: ThemeWhereUniqueInput
  }

  export type ActionFormationFormateurCreateNestedManyWithoutActionInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutActionInput, ActionFormationFormateurUncheckedCreateWithoutActionInput> | ActionFormationFormateurCreateWithoutActionInput[] | ActionFormationFormateurUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutActionInput | ActionFormationFormateurCreateOrConnectWithoutActionInput[]
    createMany?: ActionFormationFormateurCreateManyActionInputEnvelope
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
  }

  export type ActionFormationParticipantCreateNestedManyWithoutActionInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutActionInput, ActionFormationParticipantUncheckedCreateWithoutActionInput> | ActionFormationParticipantCreateWithoutActionInput[] | ActionFormationParticipantUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutActionInput | ActionFormationParticipantCreateOrConnectWithoutActionInput[]
    createMany?: ActionFormationParticipantCreateManyActionInputEnvelope
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
  }

  export type AttestationCreateNestedManyWithoutActionInput = {
    create?: XOR<AttestationCreateWithoutActionInput, AttestationUncheckedCreateWithoutActionInput> | AttestationCreateWithoutActionInput[] | AttestationUncheckedCreateWithoutActionInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutActionInput | AttestationCreateOrConnectWithoutActionInput[]
    createMany?: AttestationCreateManyActionInputEnvelope
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
  }

  export type SeanceCreateNestedManyWithoutActionInput = {
    create?: XOR<SeanceCreateWithoutActionInput, SeanceUncheckedCreateWithoutActionInput> | SeanceCreateWithoutActionInput[] | SeanceUncheckedCreateWithoutActionInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutActionInput | SeanceCreateOrConnectWithoutActionInput[]
    createMany?: SeanceCreateManyActionInputEnvelope
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutActionInput = {
    create?: XOR<FileCreateWithoutActionInput, FileUncheckedCreateWithoutActionInput> | FileCreateWithoutActionInput[] | FileUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutActionInput | FileCreateOrConnectWithoutActionInput[]
    createMany?: FileCreateManyActionInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type ActionFormationFormateurUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutActionInput, ActionFormationFormateurUncheckedCreateWithoutActionInput> | ActionFormationFormateurCreateWithoutActionInput[] | ActionFormationFormateurUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutActionInput | ActionFormationFormateurCreateOrConnectWithoutActionInput[]
    createMany?: ActionFormationFormateurCreateManyActionInputEnvelope
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
  }

  export type ActionFormationParticipantUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutActionInput, ActionFormationParticipantUncheckedCreateWithoutActionInput> | ActionFormationParticipantCreateWithoutActionInput[] | ActionFormationParticipantUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutActionInput | ActionFormationParticipantCreateOrConnectWithoutActionInput[]
    createMany?: ActionFormationParticipantCreateManyActionInputEnvelope
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
  }

  export type AttestationUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<AttestationCreateWithoutActionInput, AttestationUncheckedCreateWithoutActionInput> | AttestationCreateWithoutActionInput[] | AttestationUncheckedCreateWithoutActionInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutActionInput | AttestationCreateOrConnectWithoutActionInput[]
    createMany?: AttestationCreateManyActionInputEnvelope
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
  }

  export type SeanceUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<SeanceCreateWithoutActionInput, SeanceUncheckedCreateWithoutActionInput> | SeanceCreateWithoutActionInput[] | SeanceUncheckedCreateWithoutActionInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutActionInput | SeanceCreateOrConnectWithoutActionInput[]
    createMany?: SeanceCreateManyActionInputEnvelope
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<FileCreateWithoutActionInput, FileUncheckedCreateWithoutActionInput> | FileCreateWithoutActionInput[] | FileUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutActionInput | FileCreateOrConnectWithoutActionInput[]
    createMany?: FileCreateManyActionInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
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

  export type ThemeUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<ThemeCreateWithoutActionsInput, ThemeUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ThemeCreateOrConnectWithoutActionsInput
    upsert?: ThemeUpsertWithoutActionsInput
    connect?: ThemeWhereUniqueInput
    update?: XOR<XOR<ThemeUpdateToOneWithWhereWithoutActionsInput, ThemeUpdateWithoutActionsInput>, ThemeUncheckedUpdateWithoutActionsInput>
  }

  export type ActionFormationFormateurUpdateManyWithoutActionNestedInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutActionInput, ActionFormationFormateurUncheckedCreateWithoutActionInput> | ActionFormationFormateurCreateWithoutActionInput[] | ActionFormationFormateurUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutActionInput | ActionFormationFormateurCreateOrConnectWithoutActionInput[]
    upsert?: ActionFormationFormateurUpsertWithWhereUniqueWithoutActionInput | ActionFormationFormateurUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: ActionFormationFormateurCreateManyActionInputEnvelope
    set?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    disconnect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    delete?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    update?: ActionFormationFormateurUpdateWithWhereUniqueWithoutActionInput | ActionFormationFormateurUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: ActionFormationFormateurUpdateManyWithWhereWithoutActionInput | ActionFormationFormateurUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: ActionFormationFormateurScalarWhereInput | ActionFormationFormateurScalarWhereInput[]
  }

  export type ActionFormationParticipantUpdateManyWithoutActionNestedInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutActionInput, ActionFormationParticipantUncheckedCreateWithoutActionInput> | ActionFormationParticipantCreateWithoutActionInput[] | ActionFormationParticipantUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutActionInput | ActionFormationParticipantCreateOrConnectWithoutActionInput[]
    upsert?: ActionFormationParticipantUpsertWithWhereUniqueWithoutActionInput | ActionFormationParticipantUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: ActionFormationParticipantCreateManyActionInputEnvelope
    set?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    disconnect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    delete?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    update?: ActionFormationParticipantUpdateWithWhereUniqueWithoutActionInput | ActionFormationParticipantUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: ActionFormationParticipantUpdateManyWithWhereWithoutActionInput | ActionFormationParticipantUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: ActionFormationParticipantScalarWhereInput | ActionFormationParticipantScalarWhereInput[]
  }

  export type AttestationUpdateManyWithoutActionNestedInput = {
    create?: XOR<AttestationCreateWithoutActionInput, AttestationUncheckedCreateWithoutActionInput> | AttestationCreateWithoutActionInput[] | AttestationUncheckedCreateWithoutActionInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutActionInput | AttestationCreateOrConnectWithoutActionInput[]
    upsert?: AttestationUpsertWithWhereUniqueWithoutActionInput | AttestationUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: AttestationCreateManyActionInputEnvelope
    set?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    disconnect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    delete?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    update?: AttestationUpdateWithWhereUniqueWithoutActionInput | AttestationUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: AttestationUpdateManyWithWhereWithoutActionInput | AttestationUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: AttestationScalarWhereInput | AttestationScalarWhereInput[]
  }

  export type SeanceUpdateManyWithoutActionNestedInput = {
    create?: XOR<SeanceCreateWithoutActionInput, SeanceUncheckedCreateWithoutActionInput> | SeanceCreateWithoutActionInput[] | SeanceUncheckedCreateWithoutActionInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutActionInput | SeanceCreateOrConnectWithoutActionInput[]
    upsert?: SeanceUpsertWithWhereUniqueWithoutActionInput | SeanceUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: SeanceCreateManyActionInputEnvelope
    set?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    disconnect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    delete?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    update?: SeanceUpdateWithWhereUniqueWithoutActionInput | SeanceUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: SeanceUpdateManyWithWhereWithoutActionInput | SeanceUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: SeanceScalarWhereInput | SeanceScalarWhereInput[]
  }

  export type FileUpdateManyWithoutActionNestedInput = {
    create?: XOR<FileCreateWithoutActionInput, FileUncheckedCreateWithoutActionInput> | FileCreateWithoutActionInput[] | FileUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutActionInput | FileCreateOrConnectWithoutActionInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutActionInput | FileUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: FileCreateManyActionInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutActionInput | FileUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: FileUpdateManyWithWhereWithoutActionInput | FileUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ActionFormationFormateurUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<ActionFormationFormateurCreateWithoutActionInput, ActionFormationFormateurUncheckedCreateWithoutActionInput> | ActionFormationFormateurCreateWithoutActionInput[] | ActionFormationFormateurUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationFormateurCreateOrConnectWithoutActionInput | ActionFormationFormateurCreateOrConnectWithoutActionInput[]
    upsert?: ActionFormationFormateurUpsertWithWhereUniqueWithoutActionInput | ActionFormationFormateurUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: ActionFormationFormateurCreateManyActionInputEnvelope
    set?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    disconnect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    delete?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    connect?: ActionFormationFormateurWhereUniqueInput | ActionFormationFormateurWhereUniqueInput[]
    update?: ActionFormationFormateurUpdateWithWhereUniqueWithoutActionInput | ActionFormationFormateurUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: ActionFormationFormateurUpdateManyWithWhereWithoutActionInput | ActionFormationFormateurUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: ActionFormationFormateurScalarWhereInput | ActionFormationFormateurScalarWhereInput[]
  }

  export type ActionFormationParticipantUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<ActionFormationParticipantCreateWithoutActionInput, ActionFormationParticipantUncheckedCreateWithoutActionInput> | ActionFormationParticipantCreateWithoutActionInput[] | ActionFormationParticipantUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ActionFormationParticipantCreateOrConnectWithoutActionInput | ActionFormationParticipantCreateOrConnectWithoutActionInput[]
    upsert?: ActionFormationParticipantUpsertWithWhereUniqueWithoutActionInput | ActionFormationParticipantUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: ActionFormationParticipantCreateManyActionInputEnvelope
    set?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    disconnect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    delete?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    connect?: ActionFormationParticipantWhereUniqueInput | ActionFormationParticipantWhereUniqueInput[]
    update?: ActionFormationParticipantUpdateWithWhereUniqueWithoutActionInput | ActionFormationParticipantUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: ActionFormationParticipantUpdateManyWithWhereWithoutActionInput | ActionFormationParticipantUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: ActionFormationParticipantScalarWhereInput | ActionFormationParticipantScalarWhereInput[]
  }

  export type AttestationUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<AttestationCreateWithoutActionInput, AttestationUncheckedCreateWithoutActionInput> | AttestationCreateWithoutActionInput[] | AttestationUncheckedCreateWithoutActionInput[]
    connectOrCreate?: AttestationCreateOrConnectWithoutActionInput | AttestationCreateOrConnectWithoutActionInput[]
    upsert?: AttestationUpsertWithWhereUniqueWithoutActionInput | AttestationUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: AttestationCreateManyActionInputEnvelope
    set?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    disconnect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    delete?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    connect?: AttestationWhereUniqueInput | AttestationWhereUniqueInput[]
    update?: AttestationUpdateWithWhereUniqueWithoutActionInput | AttestationUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: AttestationUpdateManyWithWhereWithoutActionInput | AttestationUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: AttestationScalarWhereInput | AttestationScalarWhereInput[]
  }

  export type SeanceUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<SeanceCreateWithoutActionInput, SeanceUncheckedCreateWithoutActionInput> | SeanceCreateWithoutActionInput[] | SeanceUncheckedCreateWithoutActionInput[]
    connectOrCreate?: SeanceCreateOrConnectWithoutActionInput | SeanceCreateOrConnectWithoutActionInput[]
    upsert?: SeanceUpsertWithWhereUniqueWithoutActionInput | SeanceUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: SeanceCreateManyActionInputEnvelope
    set?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    disconnect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    delete?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    connect?: SeanceWhereUniqueInput | SeanceWhereUniqueInput[]
    update?: SeanceUpdateWithWhereUniqueWithoutActionInput | SeanceUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: SeanceUpdateManyWithWhereWithoutActionInput | SeanceUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: SeanceScalarWhereInput | SeanceScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<FileCreateWithoutActionInput, FileUncheckedCreateWithoutActionInput> | FileCreateWithoutActionInput[] | FileUncheckedCreateWithoutActionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutActionInput | FileCreateOrConnectWithoutActionInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutActionInput | FileUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: FileCreateManyActionInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutActionInput | FileUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: FileUpdateManyWithWhereWithoutActionInput | FileUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ActionFormationCreateNestedOneWithoutSeancesInput = {
    create?: XOR<ActionFormationCreateWithoutSeancesInput, ActionFormationUncheckedCreateWithoutSeancesInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutSeancesInput
    connect?: ActionFormationWhereUniqueInput
  }

  export type FormateurCreateNestedOneWithoutSeancesInput = {
    create?: XOR<FormateurCreateWithoutSeancesInput, FormateurUncheckedCreateWithoutSeancesInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutSeancesInput
    connect?: FormateurWhereUniqueInput
  }

  export type PresenceCreateNestedManyWithoutSeanceInput = {
    create?: XOR<PresenceCreateWithoutSeanceInput, PresenceUncheckedCreateWithoutSeanceInput> | PresenceCreateWithoutSeanceInput[] | PresenceUncheckedCreateWithoutSeanceInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutSeanceInput | PresenceCreateOrConnectWithoutSeanceInput[]
    createMany?: PresenceCreateManySeanceInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type PresenceUncheckedCreateNestedManyWithoutSeanceInput = {
    create?: XOR<PresenceCreateWithoutSeanceInput, PresenceUncheckedCreateWithoutSeanceInput> | PresenceCreateWithoutSeanceInput[] | PresenceUncheckedCreateWithoutSeanceInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutSeanceInput | PresenceCreateOrConnectWithoutSeanceInput[]
    createMany?: PresenceCreateManySeanceInputEnvelope
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSeanceStatutFieldUpdateOperationsInput = {
    set?: $Enums.SeanceStatut
  }

  export type ActionFormationUpdateOneRequiredWithoutSeancesNestedInput = {
    create?: XOR<ActionFormationCreateWithoutSeancesInput, ActionFormationUncheckedCreateWithoutSeancesInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutSeancesInput
    upsert?: ActionFormationUpsertWithoutSeancesInput
    connect?: ActionFormationWhereUniqueInput
    update?: XOR<XOR<ActionFormationUpdateToOneWithWhereWithoutSeancesInput, ActionFormationUpdateWithoutSeancesInput>, ActionFormationUncheckedUpdateWithoutSeancesInput>
  }

  export type FormateurUpdateOneRequiredWithoutSeancesNestedInput = {
    create?: XOR<FormateurCreateWithoutSeancesInput, FormateurUncheckedCreateWithoutSeancesInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutSeancesInput
    upsert?: FormateurUpsertWithoutSeancesInput
    connect?: FormateurWhereUniqueInput
    update?: XOR<XOR<FormateurUpdateToOneWithWhereWithoutSeancesInput, FormateurUpdateWithoutSeancesInput>, FormateurUncheckedUpdateWithoutSeancesInput>
  }

  export type PresenceUpdateManyWithoutSeanceNestedInput = {
    create?: XOR<PresenceCreateWithoutSeanceInput, PresenceUncheckedCreateWithoutSeanceInput> | PresenceCreateWithoutSeanceInput[] | PresenceUncheckedCreateWithoutSeanceInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutSeanceInput | PresenceCreateOrConnectWithoutSeanceInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutSeanceInput | PresenceUpsertWithWhereUniqueWithoutSeanceInput[]
    createMany?: PresenceCreateManySeanceInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutSeanceInput | PresenceUpdateWithWhereUniqueWithoutSeanceInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutSeanceInput | PresenceUpdateManyWithWhereWithoutSeanceInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type PresenceUncheckedUpdateManyWithoutSeanceNestedInput = {
    create?: XOR<PresenceCreateWithoutSeanceInput, PresenceUncheckedCreateWithoutSeanceInput> | PresenceCreateWithoutSeanceInput[] | PresenceUncheckedCreateWithoutSeanceInput[]
    connectOrCreate?: PresenceCreateOrConnectWithoutSeanceInput | PresenceCreateOrConnectWithoutSeanceInput[]
    upsert?: PresenceUpsertWithWhereUniqueWithoutSeanceInput | PresenceUpsertWithWhereUniqueWithoutSeanceInput[]
    createMany?: PresenceCreateManySeanceInputEnvelope
    set?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    disconnect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    delete?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    connect?: PresenceWhereUniqueInput | PresenceWhereUniqueInput[]
    update?: PresenceUpdateWithWhereUniqueWithoutSeanceInput | PresenceUpdateWithWhereUniqueWithoutSeanceInput[]
    updateMany?: PresenceUpdateManyWithWhereWithoutSeanceInput | PresenceUpdateManyWithWhereWithoutSeanceInput[]
    deleteMany?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
  }

  export type ActionFormationCreateNestedOneWithoutFormateursInput = {
    create?: XOR<ActionFormationCreateWithoutFormateursInput, ActionFormationUncheckedCreateWithoutFormateursInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutFormateursInput
    connect?: ActionFormationWhereUniqueInput
  }

  export type FormateurCreateNestedOneWithoutActionsInput = {
    create?: XOR<FormateurCreateWithoutActionsInput, FormateurUncheckedCreateWithoutActionsInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutActionsInput
    connect?: FormateurWhereUniqueInput
  }

  export type ActionFormationUpdateOneRequiredWithoutFormateursNestedInput = {
    create?: XOR<ActionFormationCreateWithoutFormateursInput, ActionFormationUncheckedCreateWithoutFormateursInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutFormateursInput
    upsert?: ActionFormationUpsertWithoutFormateursInput
    connect?: ActionFormationWhereUniqueInput
    update?: XOR<XOR<ActionFormationUpdateToOneWithWhereWithoutFormateursInput, ActionFormationUpdateWithoutFormateursInput>, ActionFormationUncheckedUpdateWithoutFormateursInput>
  }

  export type FormateurUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<FormateurCreateWithoutActionsInput, FormateurUncheckedCreateWithoutActionsInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutActionsInput
    upsert?: FormateurUpsertWithoutActionsInput
    connect?: FormateurWhereUniqueInput
    update?: XOR<XOR<FormateurUpdateToOneWithWhereWithoutActionsInput, FormateurUpdateWithoutActionsInput>, FormateurUncheckedUpdateWithoutActionsInput>
  }

  export type ActionFormationCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<ActionFormationCreateWithoutParticipantsInput, ActionFormationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutParticipantsInput
    connect?: ActionFormationWhereUniqueInput
  }

  export type ParticipantCreateNestedOneWithoutActionsInput = {
    create?: XOR<ParticipantCreateWithoutActionsInput, ParticipantUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutActionsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ActionFormationUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<ActionFormationCreateWithoutParticipantsInput, ActionFormationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutParticipantsInput
    upsert?: ActionFormationUpsertWithoutParticipantsInput
    connect?: ActionFormationWhereUniqueInput
    update?: XOR<XOR<ActionFormationUpdateToOneWithWhereWithoutParticipantsInput, ActionFormationUpdateWithoutParticipantsInput>, ActionFormationUncheckedUpdateWithoutParticipantsInput>
  }

  export type ParticipantUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<ParticipantCreateWithoutActionsInput, ParticipantUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutActionsInput
    upsert?: ParticipantUpsertWithoutActionsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutActionsInput, ParticipantUpdateWithoutActionsInput>, ParticipantUncheckedUpdateWithoutActionsInput>
  }

  export type ParticipantCreateNestedOneWithoutAttestationsInput = {
    create?: XOR<ParticipantCreateWithoutAttestationsInput, ParticipantUncheckedCreateWithoutAttestationsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutAttestationsInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ActionFormationCreateNestedOneWithoutAttestationsInput = {
    create?: XOR<ActionFormationCreateWithoutAttestationsInput, ActionFormationUncheckedCreateWithoutAttestationsInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutAttestationsInput
    connect?: ActionFormationWhereUniqueInput
  }

  export type ParticipantUpdateOneRequiredWithoutAttestationsNestedInput = {
    create?: XOR<ParticipantCreateWithoutAttestationsInput, ParticipantUncheckedCreateWithoutAttestationsInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutAttestationsInput
    upsert?: ParticipantUpsertWithoutAttestationsInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutAttestationsInput, ParticipantUpdateWithoutAttestationsInput>, ParticipantUncheckedUpdateWithoutAttestationsInput>
  }

  export type ActionFormationUpdateOneRequiredWithoutAttestationsNestedInput = {
    create?: XOR<ActionFormationCreateWithoutAttestationsInput, ActionFormationUncheckedCreateWithoutAttestationsInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutAttestationsInput
    upsert?: ActionFormationUpsertWithoutAttestationsInput
    connect?: ActionFormationWhereUniqueInput
    update?: XOR<XOR<ActionFormationUpdateToOneWithWhereWithoutAttestationsInput, ActionFormationUpdateWithoutAttestationsInput>, ActionFormationUncheckedUpdateWithoutAttestationsInput>
  }

  export type FormateurCreateNestedOneWithoutFilesInput = {
    create?: XOR<FormateurCreateWithoutFilesInput, FormateurUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutFilesInput
    connect?: FormateurWhereUniqueInput
  }

  export type ActionFormationCreateNestedOneWithoutFilesInput = {
    create?: XOR<ActionFormationCreateWithoutFilesInput, ActionFormationUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutFilesInput
    connect?: ActionFormationWhereUniqueInput
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FormateurUpdateOneWithoutFilesNestedInput = {
    create?: XOR<FormateurCreateWithoutFilesInput, FormateurUncheckedCreateWithoutFilesInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutFilesInput
    upsert?: FormateurUpsertWithoutFilesInput
    disconnect?: FormateurWhereInput | boolean
    delete?: FormateurWhereInput | boolean
    connect?: FormateurWhereUniqueInput
    update?: XOR<XOR<FormateurUpdateToOneWithWhereWithoutFilesInput, FormateurUpdateWithoutFilesInput>, FormateurUncheckedUpdateWithoutFilesInput>
  }

  export type ActionFormationUpdateOneWithoutFilesNestedInput = {
    create?: XOR<ActionFormationCreateWithoutFilesInput, ActionFormationUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ActionFormationCreateOrConnectWithoutFilesInput
    upsert?: ActionFormationUpsertWithoutFilesInput
    disconnect?: ActionFormationWhereInput | boolean
    delete?: ActionFormationWhereInput | boolean
    connect?: ActionFormationWhereUniqueInput
    update?: XOR<XOR<ActionFormationUpdateToOneWithWhereWithoutFilesInput, ActionFormationUpdateWithoutFilesInput>, ActionFormationUncheckedUpdateWithoutFilesInput>
  }

  export type ParticipantCreateNestedOneWithoutPresencesInput = {
    create?: XOR<ParticipantCreateWithoutPresencesInput, ParticipantUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutPresencesInput
    connect?: ParticipantWhereUniqueInput
  }

  export type SeanceCreateNestedOneWithoutPresencesInput = {
    create?: XOR<SeanceCreateWithoutPresencesInput, SeanceUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: SeanceCreateOrConnectWithoutPresencesInput
    connect?: SeanceWhereUniqueInput
  }

  export type FormateurCreateNestedOneWithoutPresencesInput = {
    create?: XOR<FormateurCreateWithoutPresencesInput, FormateurUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutPresencesInput
    connect?: FormateurWhereUniqueInput
  }

  export type EnumPresenceStatusFieldUpdateOperationsInput = {
    set?: $Enums.PresenceStatus
  }

  export type ParticipantUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<ParticipantCreateWithoutPresencesInput, ParticipantUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutPresencesInput
    upsert?: ParticipantUpsertWithoutPresencesInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutPresencesInput, ParticipantUpdateWithoutPresencesInput>, ParticipantUncheckedUpdateWithoutPresencesInput>
  }

  export type SeanceUpdateOneRequiredWithoutPresencesNestedInput = {
    create?: XOR<SeanceCreateWithoutPresencesInput, SeanceUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: SeanceCreateOrConnectWithoutPresencesInput
    upsert?: SeanceUpsertWithoutPresencesInput
    connect?: SeanceWhereUniqueInput
    update?: XOR<XOR<SeanceUpdateToOneWithWhereWithoutPresencesInput, SeanceUpdateWithoutPresencesInput>, SeanceUncheckedUpdateWithoutPresencesInput>
  }

  export type FormateurUpdateOneWithoutPresencesNestedInput = {
    create?: XOR<FormateurCreateWithoutPresencesInput, FormateurUncheckedCreateWithoutPresencesInput>
    connectOrCreate?: FormateurCreateOrConnectWithoutPresencesInput
    upsert?: FormateurUpsertWithoutPresencesInput
    disconnect?: FormateurWhereInput | boolean
    delete?: FormateurWhereInput | boolean
    connect?: FormateurWhereUniqueInput
    update?: XOR<XOR<FormateurUpdateToOneWithWhereWithoutPresencesInput, FormateurUpdateWithoutPresencesInput>, FormateurUncheckedUpdateWithoutPresencesInput>
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

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
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

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
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

  export type NestedEnumSeanceStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.SeanceStatut | EnumSeanceStatutFieldRefInput<$PrismaModel>
    in?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumSeanceStatutFilter<$PrismaModel> | $Enums.SeanceStatut
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

  export type NestedEnumSeanceStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeanceStatut | EnumSeanceStatutFieldRefInput<$PrismaModel>
    in?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeanceStatut[] | ListEnumSeanceStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumSeanceStatutWithAggregatesFilter<$PrismaModel> | $Enums.SeanceStatut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeanceStatutFilter<$PrismaModel>
    _max?: NestedEnumSeanceStatutFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileType[] | ListEnumFileTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumPresenceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusFilter<$PrismaModel> | $Enums.PresenceStatus
  }

  export type NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PresenceStatus | EnumPresenceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PresenceStatus[] | ListEnumPresenceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceStatusWithAggregatesFilter<$PrismaModel> | $Enums.PresenceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceStatusFilter<$PrismaModel>
    _max?: NestedEnumPresenceStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    formateur?: FormateurCreateNestedOneWithoutUserInput
    participant?: ParticipantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    formateur?: FormateurUncheckedCreateNestedOneWithoutUserInput
    participant?: ParticipantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    user_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    telephone?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
  }

  export type RoleCreateWithoutUsersInput = {
    role_name: $Enums.RoleName
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    role_id?: number
    role_name: $Enums.RoleName
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type FormateurCreateWithoutUserInput = {
    actions?: ActionFormationFormateurCreateNestedManyWithoutFormateurInput
    seances?: SeanceCreateNestedManyWithoutFormateurInput
    files?: FileCreateNestedManyWithoutFormateurInput
    presences?: PresenceCreateNestedManyWithoutFormateurInput
  }

  export type FormateurUncheckedCreateWithoutUserInput = {
    actions?: ActionFormationFormateurUncheckedCreateNestedManyWithoutFormateurInput
    seances?: SeanceUncheckedCreateNestedManyWithoutFormateurInput
    files?: FileUncheckedCreateNestedManyWithoutFormateurInput
    presences?: PresenceUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type FormateurCreateOrConnectWithoutUserInput = {
    where: FormateurWhereUniqueInput
    create: XOR<FormateurCreateWithoutUserInput, FormateurUncheckedCreateWithoutUserInput>
  }

  export type ParticipantCreateWithoutUserInput = {
    entreprise: string
    poste: string
    actions?: ActionFormationParticipantCreateNestedManyWithoutParticipantInput
    attestations?: AttestationCreateNestedManyWithoutParticipantInput
    presences?: PresenceCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutUserInput = {
    entreprise: string
    poste: string
    actions?: ActionFormationParticipantUncheckedCreateNestedManyWithoutParticipantInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutParticipantInput
    presences?: PresenceUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutUserInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    role_name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type FormateurUpsertWithoutUserInput = {
    update: XOR<FormateurUpdateWithoutUserInput, FormateurUncheckedUpdateWithoutUserInput>
    create: XOR<FormateurCreateWithoutUserInput, FormateurUncheckedCreateWithoutUserInput>
    where?: FormateurWhereInput
  }

  export type FormateurUpdateToOneWithWhereWithoutUserInput = {
    where?: FormateurWhereInput
    data: XOR<FormateurUpdateWithoutUserInput, FormateurUncheckedUpdateWithoutUserInput>
  }

  export type FormateurUpdateWithoutUserInput = {
    actions?: ActionFormationFormateurUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUpdateManyWithoutFormateurNestedInput
    files?: FileUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUpdateManyWithoutFormateurNestedInput
  }

  export type FormateurUncheckedUpdateWithoutUserInput = {
    actions?: ActionFormationFormateurUncheckedUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutFormateurNestedInput
    files?: FileUncheckedUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type ParticipantUpsertWithoutUserInput = {
    update: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantCreateWithoutUserInput, ParticipantUncheckedCreateWithoutUserInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutUserInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutUserInput, ParticipantUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantUpdateWithoutUserInput = {
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationParticipantUpdateManyWithoutParticipantNestedInput
    attestations?: AttestationUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutUserInput = {
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type UserCreateWithoutFormateurInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role: RoleCreateNestedOneWithoutUsersInput
    participant?: ParticipantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFormateurInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role_id: number
    participant?: ParticipantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFormateurInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormateurInput, UserUncheckedCreateWithoutFormateurInput>
  }

  export type ActionFormationFormateurCreateWithoutFormateurInput = {
    action: ActionFormationCreateNestedOneWithoutFormateursInput
  }

  export type ActionFormationFormateurUncheckedCreateWithoutFormateurInput = {
    action_id: number
  }

  export type ActionFormationFormateurCreateOrConnectWithoutFormateurInput = {
    where: ActionFormationFormateurWhereUniqueInput
    create: XOR<ActionFormationFormateurCreateWithoutFormateurInput, ActionFormationFormateurUncheckedCreateWithoutFormateurInput>
  }

  export type ActionFormationFormateurCreateManyFormateurInputEnvelope = {
    data: ActionFormationFormateurCreateManyFormateurInput | ActionFormationFormateurCreateManyFormateurInput[]
    skipDuplicates?: boolean
  }

  export type SeanceCreateWithoutFormateurInput = {
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    action: ActionFormationCreateNestedOneWithoutSeancesInput
    presences?: PresenceCreateNestedManyWithoutSeanceInput
  }

  export type SeanceUncheckedCreateWithoutFormateurInput = {
    seance_id?: number
    action_id: number
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    presences?: PresenceUncheckedCreateNestedManyWithoutSeanceInput
  }

  export type SeanceCreateOrConnectWithoutFormateurInput = {
    where: SeanceWhereUniqueInput
    create: XOR<SeanceCreateWithoutFormateurInput, SeanceUncheckedCreateWithoutFormateurInput>
  }

  export type SeanceCreateManyFormateurInputEnvelope = {
    data: SeanceCreateManyFormateurInput | SeanceCreateManyFormateurInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutFormateurInput = {
    file_path: string
    type: $Enums.FileType
    validated?: boolean | null
    validated_at?: Date | string | null
    action?: ActionFormationCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutFormateurInput = {
    file_id?: number
    file_path: string
    type: $Enums.FileType
    action_id?: number | null
    validated?: boolean | null
    validated_at?: Date | string | null
  }

  export type FileCreateOrConnectWithoutFormateurInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutFormateurInput, FileUncheckedCreateWithoutFormateurInput>
  }

  export type FileCreateManyFormateurInputEnvelope = {
    data: FileCreateManyFormateurInput | FileCreateManyFormateurInput[]
    skipDuplicates?: boolean
  }

  export type PresenceCreateWithoutFormateurInput = {
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant: ParticipantCreateNestedOneWithoutPresencesInput
    seance: SeanceCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateWithoutFormateurInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant_id: string
    seance_id: number
  }

  export type PresenceCreateOrConnectWithoutFormateurInput = {
    where: PresenceWhereUniqueInput
    create: XOR<PresenceCreateWithoutFormateurInput, PresenceUncheckedCreateWithoutFormateurInput>
  }

  export type PresenceCreateManyFormateurInputEnvelope = {
    data: PresenceCreateManyFormateurInput | PresenceCreateManyFormateurInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFormateurInput = {
    update: XOR<UserUpdateWithoutFormateurInput, UserUncheckedUpdateWithoutFormateurInput>
    create: XOR<UserCreateWithoutFormateurInput, UserUncheckedCreateWithoutFormateurInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormateurInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormateurInput, UserUncheckedUpdateWithoutFormateurInput>
  }

  export type UserUpdateWithoutFormateurInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    participant?: ParticipantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFormateurInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    participant?: ParticipantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ActionFormationFormateurUpsertWithWhereUniqueWithoutFormateurInput = {
    where: ActionFormationFormateurWhereUniqueInput
    update: XOR<ActionFormationFormateurUpdateWithoutFormateurInput, ActionFormationFormateurUncheckedUpdateWithoutFormateurInput>
    create: XOR<ActionFormationFormateurCreateWithoutFormateurInput, ActionFormationFormateurUncheckedCreateWithoutFormateurInput>
  }

  export type ActionFormationFormateurUpdateWithWhereUniqueWithoutFormateurInput = {
    where: ActionFormationFormateurWhereUniqueInput
    data: XOR<ActionFormationFormateurUpdateWithoutFormateurInput, ActionFormationFormateurUncheckedUpdateWithoutFormateurInput>
  }

  export type ActionFormationFormateurUpdateManyWithWhereWithoutFormateurInput = {
    where: ActionFormationFormateurScalarWhereInput
    data: XOR<ActionFormationFormateurUpdateManyMutationInput, ActionFormationFormateurUncheckedUpdateManyWithoutFormateurInput>
  }

  export type ActionFormationFormateurScalarWhereInput = {
    AND?: ActionFormationFormateurScalarWhereInput | ActionFormationFormateurScalarWhereInput[]
    OR?: ActionFormationFormateurScalarWhereInput[]
    NOT?: ActionFormationFormateurScalarWhereInput | ActionFormationFormateurScalarWhereInput[]
    action_id?: IntFilter<"ActionFormationFormateur"> | number
    formateur_id?: StringFilter<"ActionFormationFormateur"> | string
  }

  export type SeanceUpsertWithWhereUniqueWithoutFormateurInput = {
    where: SeanceWhereUniqueInput
    update: XOR<SeanceUpdateWithoutFormateurInput, SeanceUncheckedUpdateWithoutFormateurInput>
    create: XOR<SeanceCreateWithoutFormateurInput, SeanceUncheckedCreateWithoutFormateurInput>
  }

  export type SeanceUpdateWithWhereUniqueWithoutFormateurInput = {
    where: SeanceWhereUniqueInput
    data: XOR<SeanceUpdateWithoutFormateurInput, SeanceUncheckedUpdateWithoutFormateurInput>
  }

  export type SeanceUpdateManyWithWhereWithoutFormateurInput = {
    where: SeanceScalarWhereInput
    data: XOR<SeanceUpdateManyMutationInput, SeanceUncheckedUpdateManyWithoutFormateurInput>
  }

  export type SeanceScalarWhereInput = {
    AND?: SeanceScalarWhereInput | SeanceScalarWhereInput[]
    OR?: SeanceScalarWhereInput[]
    NOT?: SeanceScalarWhereInput | SeanceScalarWhereInput[]
    seance_id?: IntFilter<"Seance"> | number
    action_id?: IntFilter<"Seance"> | number
    date?: DateTimeNullableFilter<"Seance"> | Date | string | null
    heure?: StringNullableFilter<"Seance"> | string | null
    duree_heures?: IntNullableFilter<"Seance"> | number | null
    statut?: EnumSeanceStatutFilter<"Seance"> | $Enums.SeanceStatut
    formateur_id?: StringFilter<"Seance"> | string
  }

  export type FileUpsertWithWhereUniqueWithoutFormateurInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutFormateurInput, FileUncheckedUpdateWithoutFormateurInput>
    create: XOR<FileCreateWithoutFormateurInput, FileUncheckedCreateWithoutFormateurInput>
  }

  export type FileUpdateWithWhereUniqueWithoutFormateurInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutFormateurInput, FileUncheckedUpdateWithoutFormateurInput>
  }

  export type FileUpdateManyWithWhereWithoutFormateurInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFormateurInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    file_id?: IntFilter<"File"> | number
    file_path?: StringFilter<"File"> | string
    type?: EnumFileTypeFilter<"File"> | $Enums.FileType
    formateur_id?: StringNullableFilter<"File"> | string | null
    action_id?: IntNullableFilter<"File"> | number | null
    validated?: BoolNullableFilter<"File"> | boolean | null
    validated_at?: DateTimeNullableFilter<"File"> | Date | string | null
  }

  export type PresenceUpsertWithWhereUniqueWithoutFormateurInput = {
    where: PresenceWhereUniqueInput
    update: XOR<PresenceUpdateWithoutFormateurInput, PresenceUncheckedUpdateWithoutFormateurInput>
    create: XOR<PresenceCreateWithoutFormateurInput, PresenceUncheckedCreateWithoutFormateurInput>
  }

  export type PresenceUpdateWithWhereUniqueWithoutFormateurInput = {
    where: PresenceWhereUniqueInput
    data: XOR<PresenceUpdateWithoutFormateurInput, PresenceUncheckedUpdateWithoutFormateurInput>
  }

  export type PresenceUpdateManyWithWhereWithoutFormateurInput = {
    where: PresenceScalarWhereInput
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyWithoutFormateurInput>
  }

  export type PresenceScalarWhereInput = {
    AND?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
    OR?: PresenceScalarWhereInput[]
    NOT?: PresenceScalarWhereInput | PresenceScalarWhereInput[]
    presence_id?: IntFilter<"Presence"> | number
    status?: EnumPresenceStatusFilter<"Presence"> | $Enums.PresenceStatus
    noted_at?: DateTimeFilter<"Presence"> | Date | string
    participant_id?: StringFilter<"Presence"> | string
    seance_id?: IntFilter<"Presence"> | number
    formateur_id?: StringNullableFilter<"Presence"> | string | null
  }

  export type UserCreateWithoutParticipantInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role: RoleCreateNestedOneWithoutUsersInput
    formateur?: FormateurCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
    role_id: number
    formateur?: FormateurUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
  }

  export type ActionFormationParticipantCreateWithoutParticipantInput = {
    date_inscription?: Date | string | null
    statut?: string | null
    action: ActionFormationCreateNestedOneWithoutParticipantsInput
  }

  export type ActionFormationParticipantUncheckedCreateWithoutParticipantInput = {
    action_id: number
    date_inscription?: Date | string | null
    statut?: string | null
  }

  export type ActionFormationParticipantCreateOrConnectWithoutParticipantInput = {
    where: ActionFormationParticipantWhereUniqueInput
    create: XOR<ActionFormationParticipantCreateWithoutParticipantInput, ActionFormationParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type ActionFormationParticipantCreateManyParticipantInputEnvelope = {
    data: ActionFormationParticipantCreateManyParticipantInput | ActionFormationParticipantCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type AttestationCreateWithoutParticipantInput = {
    date_emission?: Date | string | null
    qr_code_ref?: string | null
    action: ActionFormationCreateNestedOneWithoutAttestationsInput
  }

  export type AttestationUncheckedCreateWithoutParticipantInput = {
    attestation_id?: number
    action_id: number
    date_emission?: Date | string | null
    qr_code_ref?: string | null
  }

  export type AttestationCreateOrConnectWithoutParticipantInput = {
    where: AttestationWhereUniqueInput
    create: XOR<AttestationCreateWithoutParticipantInput, AttestationUncheckedCreateWithoutParticipantInput>
  }

  export type AttestationCreateManyParticipantInputEnvelope = {
    data: AttestationCreateManyParticipantInput | AttestationCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type PresenceCreateWithoutParticipantInput = {
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    seance: SeanceCreateNestedOneWithoutPresencesInput
    formateur?: FormateurCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateWithoutParticipantInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    seance_id: number
    formateur_id?: string | null
  }

  export type PresenceCreateOrConnectWithoutParticipantInput = {
    where: PresenceWhereUniqueInput
    create: XOR<PresenceCreateWithoutParticipantInput, PresenceUncheckedCreateWithoutParticipantInput>
  }

  export type PresenceCreateManyParticipantInputEnvelope = {
    data: PresenceCreateManyParticipantInput | PresenceCreateManyParticipantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParticipantInput = {
    update: XOR<UserUpdateWithoutParticipantInput, UserUncheckedUpdateWithoutParticipantInput>
    create: XOR<UserCreateWithoutParticipantInput, UserUncheckedCreateWithoutParticipantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantInput, UserUncheckedUpdateWithoutParticipantInput>
  }

  export type UserUpdateWithoutParticipantInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    formateur?: FormateurUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    formateur?: FormateurUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ActionFormationParticipantUpsertWithWhereUniqueWithoutParticipantInput = {
    where: ActionFormationParticipantWhereUniqueInput
    update: XOR<ActionFormationParticipantUpdateWithoutParticipantInput, ActionFormationParticipantUncheckedUpdateWithoutParticipantInput>
    create: XOR<ActionFormationParticipantCreateWithoutParticipantInput, ActionFormationParticipantUncheckedCreateWithoutParticipantInput>
  }

  export type ActionFormationParticipantUpdateWithWhereUniqueWithoutParticipantInput = {
    where: ActionFormationParticipantWhereUniqueInput
    data: XOR<ActionFormationParticipantUpdateWithoutParticipantInput, ActionFormationParticipantUncheckedUpdateWithoutParticipantInput>
  }

  export type ActionFormationParticipantUpdateManyWithWhereWithoutParticipantInput = {
    where: ActionFormationParticipantScalarWhereInput
    data: XOR<ActionFormationParticipantUpdateManyMutationInput, ActionFormationParticipantUncheckedUpdateManyWithoutParticipantInput>
  }

  export type ActionFormationParticipantScalarWhereInput = {
    AND?: ActionFormationParticipantScalarWhereInput | ActionFormationParticipantScalarWhereInput[]
    OR?: ActionFormationParticipantScalarWhereInput[]
    NOT?: ActionFormationParticipantScalarWhereInput | ActionFormationParticipantScalarWhereInput[]
    action_id?: IntFilter<"ActionFormationParticipant"> | number
    participant_id?: StringFilter<"ActionFormationParticipant"> | string
    date_inscription?: DateTimeNullableFilter<"ActionFormationParticipant"> | Date | string | null
    statut?: StringNullableFilter<"ActionFormationParticipant"> | string | null
  }

  export type AttestationUpsertWithWhereUniqueWithoutParticipantInput = {
    where: AttestationWhereUniqueInput
    update: XOR<AttestationUpdateWithoutParticipantInput, AttestationUncheckedUpdateWithoutParticipantInput>
    create: XOR<AttestationCreateWithoutParticipantInput, AttestationUncheckedCreateWithoutParticipantInput>
  }

  export type AttestationUpdateWithWhereUniqueWithoutParticipantInput = {
    where: AttestationWhereUniqueInput
    data: XOR<AttestationUpdateWithoutParticipantInput, AttestationUncheckedUpdateWithoutParticipantInput>
  }

  export type AttestationUpdateManyWithWhereWithoutParticipantInput = {
    where: AttestationScalarWhereInput
    data: XOR<AttestationUpdateManyMutationInput, AttestationUncheckedUpdateManyWithoutParticipantInput>
  }

  export type AttestationScalarWhereInput = {
    AND?: AttestationScalarWhereInput | AttestationScalarWhereInput[]
    OR?: AttestationScalarWhereInput[]
    NOT?: AttestationScalarWhereInput | AttestationScalarWhereInput[]
    attestation_id?: IntFilter<"Attestation"> | number
    participant_id?: StringFilter<"Attestation"> | string
    action_id?: IntFilter<"Attestation"> | number
    date_emission?: DateTimeNullableFilter<"Attestation"> | Date | string | null
    qr_code_ref?: StringNullableFilter<"Attestation"> | string | null
  }

  export type PresenceUpsertWithWhereUniqueWithoutParticipantInput = {
    where: PresenceWhereUniqueInput
    update: XOR<PresenceUpdateWithoutParticipantInput, PresenceUncheckedUpdateWithoutParticipantInput>
    create: XOR<PresenceCreateWithoutParticipantInput, PresenceUncheckedCreateWithoutParticipantInput>
  }

  export type PresenceUpdateWithWhereUniqueWithoutParticipantInput = {
    where: PresenceWhereUniqueInput
    data: XOR<PresenceUpdateWithoutParticipantInput, PresenceUncheckedUpdateWithoutParticipantInput>
  }

  export type PresenceUpdateManyWithWhereWithoutParticipantInput = {
    where: PresenceScalarWhereInput
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyWithoutParticipantInput>
  }

  export type ThemeCreateWithoutDomaineInput = {
    libelle_theme: string
    actions?: ActionFormationCreateNestedManyWithoutThemeInput
  }

  export type ThemeUncheckedCreateWithoutDomaineInput = {
    theme_id?: number
    libelle_theme: string
    actions?: ActionFormationUncheckedCreateNestedManyWithoutThemeInput
  }

  export type ThemeCreateOrConnectWithoutDomaineInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutDomaineInput, ThemeUncheckedCreateWithoutDomaineInput>
  }

  export type ThemeCreateManyDomaineInputEnvelope = {
    data: ThemeCreateManyDomaineInput | ThemeCreateManyDomaineInput[]
    skipDuplicates?: boolean
  }

  export type ThemeUpsertWithWhereUniqueWithoutDomaineInput = {
    where: ThemeWhereUniqueInput
    update: XOR<ThemeUpdateWithoutDomaineInput, ThemeUncheckedUpdateWithoutDomaineInput>
    create: XOR<ThemeCreateWithoutDomaineInput, ThemeUncheckedCreateWithoutDomaineInput>
  }

  export type ThemeUpdateWithWhereUniqueWithoutDomaineInput = {
    where: ThemeWhereUniqueInput
    data: XOR<ThemeUpdateWithoutDomaineInput, ThemeUncheckedUpdateWithoutDomaineInput>
  }

  export type ThemeUpdateManyWithWhereWithoutDomaineInput = {
    where: ThemeScalarWhereInput
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyWithoutDomaineInput>
  }

  export type ThemeScalarWhereInput = {
    AND?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
    OR?: ThemeScalarWhereInput[]
    NOT?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
    theme_id?: IntFilter<"Theme"> | number
    libelle_theme?: StringFilter<"Theme"> | string
    domaine_id?: IntFilter<"Theme"> | number
  }

  export type DomaineCreateWithoutThemesInput = {
    libelle_domaine: string
  }

  export type DomaineUncheckedCreateWithoutThemesInput = {
    domaine_id?: number
    libelle_domaine: string
  }

  export type DomaineCreateOrConnectWithoutThemesInput = {
    where: DomaineWhereUniqueInput
    create: XOR<DomaineCreateWithoutThemesInput, DomaineUncheckedCreateWithoutThemesInput>
  }

  export type ActionFormationCreateWithoutThemeInput = {
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    formateurs?: ActionFormationFormateurCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantCreateNestedManyWithoutActionInput
    attestations?: AttestationCreateNestedManyWithoutActionInput
    seances?: SeanceCreateNestedManyWithoutActionInput
    files?: FileCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUncheckedCreateWithoutThemeInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    formateurs?: ActionFormationFormateurUncheckedCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantUncheckedCreateNestedManyWithoutActionInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutActionInput
    seances?: SeanceUncheckedCreateNestedManyWithoutActionInput
    files?: FileUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionFormationCreateOrConnectWithoutThemeInput = {
    where: ActionFormationWhereUniqueInput
    create: XOR<ActionFormationCreateWithoutThemeInput, ActionFormationUncheckedCreateWithoutThemeInput>
  }

  export type ActionFormationCreateManyThemeInputEnvelope = {
    data: ActionFormationCreateManyThemeInput | ActionFormationCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type DomaineUpsertWithoutThemesInput = {
    update: XOR<DomaineUpdateWithoutThemesInput, DomaineUncheckedUpdateWithoutThemesInput>
    create: XOR<DomaineCreateWithoutThemesInput, DomaineUncheckedCreateWithoutThemesInput>
    where?: DomaineWhereInput
  }

  export type DomaineUpdateToOneWithWhereWithoutThemesInput = {
    where?: DomaineWhereInput
    data: XOR<DomaineUpdateWithoutThemesInput, DomaineUncheckedUpdateWithoutThemesInput>
  }

  export type DomaineUpdateWithoutThemesInput = {
    libelle_domaine?: StringFieldUpdateOperationsInput | string
  }

  export type DomaineUncheckedUpdateWithoutThemesInput = {
    domaine_id?: IntFieldUpdateOperationsInput | number
    libelle_domaine?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationUpsertWithWhereUniqueWithoutThemeInput = {
    where: ActionFormationWhereUniqueInput
    update: XOR<ActionFormationUpdateWithoutThemeInput, ActionFormationUncheckedUpdateWithoutThemeInput>
    create: XOR<ActionFormationCreateWithoutThemeInput, ActionFormationUncheckedCreateWithoutThemeInput>
  }

  export type ActionFormationUpdateWithWhereUniqueWithoutThemeInput = {
    where: ActionFormationWhereUniqueInput
    data: XOR<ActionFormationUpdateWithoutThemeInput, ActionFormationUncheckedUpdateWithoutThemeInput>
  }

  export type ActionFormationUpdateManyWithWhereWithoutThemeInput = {
    where: ActionFormationScalarWhereInput
    data: XOR<ActionFormationUpdateManyMutationInput, ActionFormationUncheckedUpdateManyWithoutThemeInput>
  }

  export type ActionFormationScalarWhereInput = {
    AND?: ActionFormationScalarWhereInput | ActionFormationScalarWhereInput[]
    OR?: ActionFormationScalarWhereInput[]
    NOT?: ActionFormationScalarWhereInput | ActionFormationScalarWhereInput[]
    action_id?: IntFilter<"ActionFormation"> | number
    type_action?: StringFilter<"ActionFormation"> | string
    date_debut?: DateTimeFilter<"ActionFormation"> | Date | string
    date_fin?: DateTimeFilter<"ActionFormation"> | Date | string
    duree_jours?: IntNullableFilter<"ActionFormation"> | number | null
    duree_heures?: IntNullableFilter<"ActionFormation"> | number | null
    nb_seances?: IntNullableFilter<"ActionFormation"> | number | null
    lieu?: StringFilter<"ActionFormation"> | string
    nb_participants_prevu?: IntNullableFilter<"ActionFormation"> | number | null
    theme_id?: IntFilter<"ActionFormation"> | number
  }

  export type ThemeCreateWithoutActionsInput = {
    libelle_theme: string
    domaine: DomaineCreateNestedOneWithoutThemesInput
  }

  export type ThemeUncheckedCreateWithoutActionsInput = {
    theme_id?: number
    libelle_theme: string
    domaine_id: number
  }

  export type ThemeCreateOrConnectWithoutActionsInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutActionsInput, ThemeUncheckedCreateWithoutActionsInput>
  }

  export type ActionFormationFormateurCreateWithoutActionInput = {
    formateur: FormateurCreateNestedOneWithoutActionsInput
  }

  export type ActionFormationFormateurUncheckedCreateWithoutActionInput = {
    formateur_id: string
  }

  export type ActionFormationFormateurCreateOrConnectWithoutActionInput = {
    where: ActionFormationFormateurWhereUniqueInput
    create: XOR<ActionFormationFormateurCreateWithoutActionInput, ActionFormationFormateurUncheckedCreateWithoutActionInput>
  }

  export type ActionFormationFormateurCreateManyActionInputEnvelope = {
    data: ActionFormationFormateurCreateManyActionInput | ActionFormationFormateurCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type ActionFormationParticipantCreateWithoutActionInput = {
    date_inscription?: Date | string | null
    statut?: string | null
    participant: ParticipantCreateNestedOneWithoutActionsInput
  }

  export type ActionFormationParticipantUncheckedCreateWithoutActionInput = {
    participant_id: string
    date_inscription?: Date | string | null
    statut?: string | null
  }

  export type ActionFormationParticipantCreateOrConnectWithoutActionInput = {
    where: ActionFormationParticipantWhereUniqueInput
    create: XOR<ActionFormationParticipantCreateWithoutActionInput, ActionFormationParticipantUncheckedCreateWithoutActionInput>
  }

  export type ActionFormationParticipantCreateManyActionInputEnvelope = {
    data: ActionFormationParticipantCreateManyActionInput | ActionFormationParticipantCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type AttestationCreateWithoutActionInput = {
    date_emission?: Date | string | null
    qr_code_ref?: string | null
    participant: ParticipantCreateNestedOneWithoutAttestationsInput
  }

  export type AttestationUncheckedCreateWithoutActionInput = {
    attestation_id?: number
    participant_id: string
    date_emission?: Date | string | null
    qr_code_ref?: string | null
  }

  export type AttestationCreateOrConnectWithoutActionInput = {
    where: AttestationWhereUniqueInput
    create: XOR<AttestationCreateWithoutActionInput, AttestationUncheckedCreateWithoutActionInput>
  }

  export type AttestationCreateManyActionInputEnvelope = {
    data: AttestationCreateManyActionInput | AttestationCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type SeanceCreateWithoutActionInput = {
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    formateur: FormateurCreateNestedOneWithoutSeancesInput
    presences?: PresenceCreateNestedManyWithoutSeanceInput
  }

  export type SeanceUncheckedCreateWithoutActionInput = {
    seance_id?: number
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    formateur_id: string
    presences?: PresenceUncheckedCreateNestedManyWithoutSeanceInput
  }

  export type SeanceCreateOrConnectWithoutActionInput = {
    where: SeanceWhereUniqueInput
    create: XOR<SeanceCreateWithoutActionInput, SeanceUncheckedCreateWithoutActionInput>
  }

  export type SeanceCreateManyActionInputEnvelope = {
    data: SeanceCreateManyActionInput | SeanceCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutActionInput = {
    file_path: string
    type: $Enums.FileType
    validated?: boolean | null
    validated_at?: Date | string | null
    formateur?: FormateurCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutActionInput = {
    file_id?: number
    file_path: string
    type: $Enums.FileType
    formateur_id?: string | null
    validated?: boolean | null
    validated_at?: Date | string | null
  }

  export type FileCreateOrConnectWithoutActionInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutActionInput, FileUncheckedCreateWithoutActionInput>
  }

  export type FileCreateManyActionInputEnvelope = {
    data: FileCreateManyActionInput | FileCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type ThemeUpsertWithoutActionsInput = {
    update: XOR<ThemeUpdateWithoutActionsInput, ThemeUncheckedUpdateWithoutActionsInput>
    create: XOR<ThemeCreateWithoutActionsInput, ThemeUncheckedCreateWithoutActionsInput>
    where?: ThemeWhereInput
  }

  export type ThemeUpdateToOneWithWhereWithoutActionsInput = {
    where?: ThemeWhereInput
    data: XOR<ThemeUpdateWithoutActionsInput, ThemeUncheckedUpdateWithoutActionsInput>
  }

  export type ThemeUpdateWithoutActionsInput = {
    libelle_theme?: StringFieldUpdateOperationsInput | string
    domaine?: DomaineUpdateOneRequiredWithoutThemesNestedInput
  }

  export type ThemeUncheckedUpdateWithoutActionsInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: StringFieldUpdateOperationsInput | string
    domaine_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionFormationFormateurUpsertWithWhereUniqueWithoutActionInput = {
    where: ActionFormationFormateurWhereUniqueInput
    update: XOR<ActionFormationFormateurUpdateWithoutActionInput, ActionFormationFormateurUncheckedUpdateWithoutActionInput>
    create: XOR<ActionFormationFormateurCreateWithoutActionInput, ActionFormationFormateurUncheckedCreateWithoutActionInput>
  }

  export type ActionFormationFormateurUpdateWithWhereUniqueWithoutActionInput = {
    where: ActionFormationFormateurWhereUniqueInput
    data: XOR<ActionFormationFormateurUpdateWithoutActionInput, ActionFormationFormateurUncheckedUpdateWithoutActionInput>
  }

  export type ActionFormationFormateurUpdateManyWithWhereWithoutActionInput = {
    where: ActionFormationFormateurScalarWhereInput
    data: XOR<ActionFormationFormateurUpdateManyMutationInput, ActionFormationFormateurUncheckedUpdateManyWithoutActionInput>
  }

  export type ActionFormationParticipantUpsertWithWhereUniqueWithoutActionInput = {
    where: ActionFormationParticipantWhereUniqueInput
    update: XOR<ActionFormationParticipantUpdateWithoutActionInput, ActionFormationParticipantUncheckedUpdateWithoutActionInput>
    create: XOR<ActionFormationParticipantCreateWithoutActionInput, ActionFormationParticipantUncheckedCreateWithoutActionInput>
  }

  export type ActionFormationParticipantUpdateWithWhereUniqueWithoutActionInput = {
    where: ActionFormationParticipantWhereUniqueInput
    data: XOR<ActionFormationParticipantUpdateWithoutActionInput, ActionFormationParticipantUncheckedUpdateWithoutActionInput>
  }

  export type ActionFormationParticipantUpdateManyWithWhereWithoutActionInput = {
    where: ActionFormationParticipantScalarWhereInput
    data: XOR<ActionFormationParticipantUpdateManyMutationInput, ActionFormationParticipantUncheckedUpdateManyWithoutActionInput>
  }

  export type AttestationUpsertWithWhereUniqueWithoutActionInput = {
    where: AttestationWhereUniqueInput
    update: XOR<AttestationUpdateWithoutActionInput, AttestationUncheckedUpdateWithoutActionInput>
    create: XOR<AttestationCreateWithoutActionInput, AttestationUncheckedCreateWithoutActionInput>
  }

  export type AttestationUpdateWithWhereUniqueWithoutActionInput = {
    where: AttestationWhereUniqueInput
    data: XOR<AttestationUpdateWithoutActionInput, AttestationUncheckedUpdateWithoutActionInput>
  }

  export type AttestationUpdateManyWithWhereWithoutActionInput = {
    where: AttestationScalarWhereInput
    data: XOR<AttestationUpdateManyMutationInput, AttestationUncheckedUpdateManyWithoutActionInput>
  }

  export type SeanceUpsertWithWhereUniqueWithoutActionInput = {
    where: SeanceWhereUniqueInput
    update: XOR<SeanceUpdateWithoutActionInput, SeanceUncheckedUpdateWithoutActionInput>
    create: XOR<SeanceCreateWithoutActionInput, SeanceUncheckedCreateWithoutActionInput>
  }

  export type SeanceUpdateWithWhereUniqueWithoutActionInput = {
    where: SeanceWhereUniqueInput
    data: XOR<SeanceUpdateWithoutActionInput, SeanceUncheckedUpdateWithoutActionInput>
  }

  export type SeanceUpdateManyWithWhereWithoutActionInput = {
    where: SeanceScalarWhereInput
    data: XOR<SeanceUpdateManyMutationInput, SeanceUncheckedUpdateManyWithoutActionInput>
  }

  export type FileUpsertWithWhereUniqueWithoutActionInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutActionInput, FileUncheckedUpdateWithoutActionInput>
    create: XOR<FileCreateWithoutActionInput, FileUncheckedCreateWithoutActionInput>
  }

  export type FileUpdateWithWhereUniqueWithoutActionInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutActionInput, FileUncheckedUpdateWithoutActionInput>
  }

  export type FileUpdateManyWithWhereWithoutActionInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutActionInput>
  }

  export type ActionFormationCreateWithoutSeancesInput = {
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme: ThemeCreateNestedOneWithoutActionsInput
    formateurs?: ActionFormationFormateurCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantCreateNestedManyWithoutActionInput
    attestations?: AttestationCreateNestedManyWithoutActionInput
    files?: FileCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUncheckedCreateWithoutSeancesInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme_id: number
    formateurs?: ActionFormationFormateurUncheckedCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantUncheckedCreateNestedManyWithoutActionInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutActionInput
    files?: FileUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionFormationCreateOrConnectWithoutSeancesInput = {
    where: ActionFormationWhereUniqueInput
    create: XOR<ActionFormationCreateWithoutSeancesInput, ActionFormationUncheckedCreateWithoutSeancesInput>
  }

  export type FormateurCreateWithoutSeancesInput = {
    user: UserCreateNestedOneWithoutFormateurInput
    actions?: ActionFormationFormateurCreateNestedManyWithoutFormateurInput
    files?: FileCreateNestedManyWithoutFormateurInput
    presences?: PresenceCreateNestedManyWithoutFormateurInput
  }

  export type FormateurUncheckedCreateWithoutSeancesInput = {
    user_id: string
    actions?: ActionFormationFormateurUncheckedCreateNestedManyWithoutFormateurInput
    files?: FileUncheckedCreateNestedManyWithoutFormateurInput
    presences?: PresenceUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type FormateurCreateOrConnectWithoutSeancesInput = {
    where: FormateurWhereUniqueInput
    create: XOR<FormateurCreateWithoutSeancesInput, FormateurUncheckedCreateWithoutSeancesInput>
  }

  export type PresenceCreateWithoutSeanceInput = {
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant: ParticipantCreateNestedOneWithoutPresencesInput
    formateur?: FormateurCreateNestedOneWithoutPresencesInput
  }

  export type PresenceUncheckedCreateWithoutSeanceInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant_id: string
    formateur_id?: string | null
  }

  export type PresenceCreateOrConnectWithoutSeanceInput = {
    where: PresenceWhereUniqueInput
    create: XOR<PresenceCreateWithoutSeanceInput, PresenceUncheckedCreateWithoutSeanceInput>
  }

  export type PresenceCreateManySeanceInputEnvelope = {
    data: PresenceCreateManySeanceInput | PresenceCreateManySeanceInput[]
    skipDuplicates?: boolean
  }

  export type ActionFormationUpsertWithoutSeancesInput = {
    update: XOR<ActionFormationUpdateWithoutSeancesInput, ActionFormationUncheckedUpdateWithoutSeancesInput>
    create: XOR<ActionFormationCreateWithoutSeancesInput, ActionFormationUncheckedCreateWithoutSeancesInput>
    where?: ActionFormationWhereInput
  }

  export type ActionFormationUpdateToOneWithWhereWithoutSeancesInput = {
    where?: ActionFormationWhereInput
    data: XOR<ActionFormationUpdateWithoutSeancesInput, ActionFormationUncheckedUpdateWithoutSeancesInput>
  }

  export type ActionFormationUpdateWithoutSeancesInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: ThemeUpdateOneRequiredWithoutActionsNestedInput
    formateurs?: ActionFormationFormateurUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUpdateManyWithoutActionNestedInput
    attestations?: AttestationUpdateManyWithoutActionNestedInput
    files?: FileUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateWithoutSeancesInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: IntFieldUpdateOperationsInput | number
    formateurs?: ActionFormationFormateurUncheckedUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUncheckedUpdateManyWithoutActionNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutActionNestedInput
    files?: FileUncheckedUpdateManyWithoutActionNestedInput
  }

  export type FormateurUpsertWithoutSeancesInput = {
    update: XOR<FormateurUpdateWithoutSeancesInput, FormateurUncheckedUpdateWithoutSeancesInput>
    create: XOR<FormateurCreateWithoutSeancesInput, FormateurUncheckedCreateWithoutSeancesInput>
    where?: FormateurWhereInput
  }

  export type FormateurUpdateToOneWithWhereWithoutSeancesInput = {
    where?: FormateurWhereInput
    data: XOR<FormateurUpdateWithoutSeancesInput, FormateurUncheckedUpdateWithoutSeancesInput>
  }

  export type FormateurUpdateWithoutSeancesInput = {
    user?: UserUpdateOneRequiredWithoutFormateurNestedInput
    actions?: ActionFormationFormateurUpdateManyWithoutFormateurNestedInput
    files?: FileUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUpdateManyWithoutFormateurNestedInput
  }

  export type FormateurUncheckedUpdateWithoutSeancesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationFormateurUncheckedUpdateManyWithoutFormateurNestedInput
    files?: FileUncheckedUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type PresenceUpsertWithWhereUniqueWithoutSeanceInput = {
    where: PresenceWhereUniqueInput
    update: XOR<PresenceUpdateWithoutSeanceInput, PresenceUncheckedUpdateWithoutSeanceInput>
    create: XOR<PresenceCreateWithoutSeanceInput, PresenceUncheckedCreateWithoutSeanceInput>
  }

  export type PresenceUpdateWithWhereUniqueWithoutSeanceInput = {
    where: PresenceWhereUniqueInput
    data: XOR<PresenceUpdateWithoutSeanceInput, PresenceUncheckedUpdateWithoutSeanceInput>
  }

  export type PresenceUpdateManyWithWhereWithoutSeanceInput = {
    where: PresenceScalarWhereInput
    data: XOR<PresenceUpdateManyMutationInput, PresenceUncheckedUpdateManyWithoutSeanceInput>
  }

  export type ActionFormationCreateWithoutFormateursInput = {
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme: ThemeCreateNestedOneWithoutActionsInput
    participants?: ActionFormationParticipantCreateNestedManyWithoutActionInput
    attestations?: AttestationCreateNestedManyWithoutActionInput
    seances?: SeanceCreateNestedManyWithoutActionInput
    files?: FileCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUncheckedCreateWithoutFormateursInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme_id: number
    participants?: ActionFormationParticipantUncheckedCreateNestedManyWithoutActionInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutActionInput
    seances?: SeanceUncheckedCreateNestedManyWithoutActionInput
    files?: FileUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionFormationCreateOrConnectWithoutFormateursInput = {
    where: ActionFormationWhereUniqueInput
    create: XOR<ActionFormationCreateWithoutFormateursInput, ActionFormationUncheckedCreateWithoutFormateursInput>
  }

  export type FormateurCreateWithoutActionsInput = {
    user: UserCreateNestedOneWithoutFormateurInput
    seances?: SeanceCreateNestedManyWithoutFormateurInput
    files?: FileCreateNestedManyWithoutFormateurInput
    presences?: PresenceCreateNestedManyWithoutFormateurInput
  }

  export type FormateurUncheckedCreateWithoutActionsInput = {
    user_id: string
    seances?: SeanceUncheckedCreateNestedManyWithoutFormateurInput
    files?: FileUncheckedCreateNestedManyWithoutFormateurInput
    presences?: PresenceUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type FormateurCreateOrConnectWithoutActionsInput = {
    where: FormateurWhereUniqueInput
    create: XOR<FormateurCreateWithoutActionsInput, FormateurUncheckedCreateWithoutActionsInput>
  }

  export type ActionFormationUpsertWithoutFormateursInput = {
    update: XOR<ActionFormationUpdateWithoutFormateursInput, ActionFormationUncheckedUpdateWithoutFormateursInput>
    create: XOR<ActionFormationCreateWithoutFormateursInput, ActionFormationUncheckedCreateWithoutFormateursInput>
    where?: ActionFormationWhereInput
  }

  export type ActionFormationUpdateToOneWithWhereWithoutFormateursInput = {
    where?: ActionFormationWhereInput
    data: XOR<ActionFormationUpdateWithoutFormateursInput, ActionFormationUncheckedUpdateWithoutFormateursInput>
  }

  export type ActionFormationUpdateWithoutFormateursInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: ThemeUpdateOneRequiredWithoutActionsNestedInput
    participants?: ActionFormationParticipantUpdateManyWithoutActionNestedInput
    attestations?: AttestationUpdateManyWithoutActionNestedInput
    seances?: SeanceUpdateManyWithoutActionNestedInput
    files?: FileUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateWithoutFormateursInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: IntFieldUpdateOperationsInput | number
    participants?: ActionFormationParticipantUncheckedUpdateManyWithoutActionNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutActionNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutActionNestedInput
    files?: FileUncheckedUpdateManyWithoutActionNestedInput
  }

  export type FormateurUpsertWithoutActionsInput = {
    update: XOR<FormateurUpdateWithoutActionsInput, FormateurUncheckedUpdateWithoutActionsInput>
    create: XOR<FormateurCreateWithoutActionsInput, FormateurUncheckedCreateWithoutActionsInput>
    where?: FormateurWhereInput
  }

  export type FormateurUpdateToOneWithWhereWithoutActionsInput = {
    where?: FormateurWhereInput
    data: XOR<FormateurUpdateWithoutActionsInput, FormateurUncheckedUpdateWithoutActionsInput>
  }

  export type FormateurUpdateWithoutActionsInput = {
    user?: UserUpdateOneRequiredWithoutFormateurNestedInput
    seances?: SeanceUpdateManyWithoutFormateurNestedInput
    files?: FileUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUpdateManyWithoutFormateurNestedInput
  }

  export type FormateurUncheckedUpdateWithoutActionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    seances?: SeanceUncheckedUpdateManyWithoutFormateurNestedInput
    files?: FileUncheckedUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type ActionFormationCreateWithoutParticipantsInput = {
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme: ThemeCreateNestedOneWithoutActionsInput
    formateurs?: ActionFormationFormateurCreateNestedManyWithoutActionInput
    attestations?: AttestationCreateNestedManyWithoutActionInput
    seances?: SeanceCreateNestedManyWithoutActionInput
    files?: FileCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUncheckedCreateWithoutParticipantsInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme_id: number
    formateurs?: ActionFormationFormateurUncheckedCreateNestedManyWithoutActionInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutActionInput
    seances?: SeanceUncheckedCreateNestedManyWithoutActionInput
    files?: FileUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionFormationCreateOrConnectWithoutParticipantsInput = {
    where: ActionFormationWhereUniqueInput
    create: XOR<ActionFormationCreateWithoutParticipantsInput, ActionFormationUncheckedCreateWithoutParticipantsInput>
  }

  export type ParticipantCreateWithoutActionsInput = {
    entreprise: string
    poste: string
    user: UserCreateNestedOneWithoutParticipantInput
    attestations?: AttestationCreateNestedManyWithoutParticipantInput
    presences?: PresenceCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutActionsInput = {
    user_id: string
    entreprise: string
    poste: string
    attestations?: AttestationUncheckedCreateNestedManyWithoutParticipantInput
    presences?: PresenceUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutActionsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutActionsInput, ParticipantUncheckedCreateWithoutActionsInput>
  }

  export type ActionFormationUpsertWithoutParticipantsInput = {
    update: XOR<ActionFormationUpdateWithoutParticipantsInput, ActionFormationUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ActionFormationCreateWithoutParticipantsInput, ActionFormationUncheckedCreateWithoutParticipantsInput>
    where?: ActionFormationWhereInput
  }

  export type ActionFormationUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: ActionFormationWhereInput
    data: XOR<ActionFormationUpdateWithoutParticipantsInput, ActionFormationUncheckedUpdateWithoutParticipantsInput>
  }

  export type ActionFormationUpdateWithoutParticipantsInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: ThemeUpdateOneRequiredWithoutActionsNestedInput
    formateurs?: ActionFormationFormateurUpdateManyWithoutActionNestedInput
    attestations?: AttestationUpdateManyWithoutActionNestedInput
    seances?: SeanceUpdateManyWithoutActionNestedInput
    files?: FileUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateWithoutParticipantsInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: IntFieldUpdateOperationsInput | number
    formateurs?: ActionFormationFormateurUncheckedUpdateManyWithoutActionNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutActionNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutActionNestedInput
    files?: FileUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ParticipantUpsertWithoutActionsInput = {
    update: XOR<ParticipantUpdateWithoutActionsInput, ParticipantUncheckedUpdateWithoutActionsInput>
    create: XOR<ParticipantCreateWithoutActionsInput, ParticipantUncheckedCreateWithoutActionsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutActionsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutActionsInput, ParticipantUncheckedUpdateWithoutActionsInput>
  }

  export type ParticipantUpdateWithoutActionsInput = {
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutParticipantNestedInput
    attestations?: AttestationUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutActionsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    attestations?: AttestationUncheckedUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantCreateWithoutAttestationsInput = {
    entreprise: string
    poste: string
    user: UserCreateNestedOneWithoutParticipantInput
    actions?: ActionFormationParticipantCreateNestedManyWithoutParticipantInput
    presences?: PresenceCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutAttestationsInput = {
    user_id: string
    entreprise: string
    poste: string
    actions?: ActionFormationParticipantUncheckedCreateNestedManyWithoutParticipantInput
    presences?: PresenceUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutAttestationsInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutAttestationsInput, ParticipantUncheckedCreateWithoutAttestationsInput>
  }

  export type ActionFormationCreateWithoutAttestationsInput = {
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme: ThemeCreateNestedOneWithoutActionsInput
    formateurs?: ActionFormationFormateurCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantCreateNestedManyWithoutActionInput
    seances?: SeanceCreateNestedManyWithoutActionInput
    files?: FileCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUncheckedCreateWithoutAttestationsInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme_id: number
    formateurs?: ActionFormationFormateurUncheckedCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantUncheckedCreateNestedManyWithoutActionInput
    seances?: SeanceUncheckedCreateNestedManyWithoutActionInput
    files?: FileUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionFormationCreateOrConnectWithoutAttestationsInput = {
    where: ActionFormationWhereUniqueInput
    create: XOR<ActionFormationCreateWithoutAttestationsInput, ActionFormationUncheckedCreateWithoutAttestationsInput>
  }

  export type ParticipantUpsertWithoutAttestationsInput = {
    update: XOR<ParticipantUpdateWithoutAttestationsInput, ParticipantUncheckedUpdateWithoutAttestationsInput>
    create: XOR<ParticipantCreateWithoutAttestationsInput, ParticipantUncheckedCreateWithoutAttestationsInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutAttestationsInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutAttestationsInput, ParticipantUncheckedUpdateWithoutAttestationsInput>
  }

  export type ParticipantUpdateWithoutAttestationsInput = {
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutParticipantNestedInput
    actions?: ActionFormationParticipantUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutAttestationsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type ActionFormationUpsertWithoutAttestationsInput = {
    update: XOR<ActionFormationUpdateWithoutAttestationsInput, ActionFormationUncheckedUpdateWithoutAttestationsInput>
    create: XOR<ActionFormationCreateWithoutAttestationsInput, ActionFormationUncheckedCreateWithoutAttestationsInput>
    where?: ActionFormationWhereInput
  }

  export type ActionFormationUpdateToOneWithWhereWithoutAttestationsInput = {
    where?: ActionFormationWhereInput
    data: XOR<ActionFormationUpdateWithoutAttestationsInput, ActionFormationUncheckedUpdateWithoutAttestationsInput>
  }

  export type ActionFormationUpdateWithoutAttestationsInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: ThemeUpdateOneRequiredWithoutActionsNestedInput
    formateurs?: ActionFormationFormateurUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUpdateManyWithoutActionNestedInput
    seances?: SeanceUpdateManyWithoutActionNestedInput
    files?: FileUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateWithoutAttestationsInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: IntFieldUpdateOperationsInput | number
    formateurs?: ActionFormationFormateurUncheckedUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUncheckedUpdateManyWithoutActionNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutActionNestedInput
    files?: FileUncheckedUpdateManyWithoutActionNestedInput
  }

  export type FormateurCreateWithoutFilesInput = {
    user: UserCreateNestedOneWithoutFormateurInput
    actions?: ActionFormationFormateurCreateNestedManyWithoutFormateurInput
    seances?: SeanceCreateNestedManyWithoutFormateurInput
    presences?: PresenceCreateNestedManyWithoutFormateurInput
  }

  export type FormateurUncheckedCreateWithoutFilesInput = {
    user_id: string
    actions?: ActionFormationFormateurUncheckedCreateNestedManyWithoutFormateurInput
    seances?: SeanceUncheckedCreateNestedManyWithoutFormateurInput
    presences?: PresenceUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type FormateurCreateOrConnectWithoutFilesInput = {
    where: FormateurWhereUniqueInput
    create: XOR<FormateurCreateWithoutFilesInput, FormateurUncheckedCreateWithoutFilesInput>
  }

  export type ActionFormationCreateWithoutFilesInput = {
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme: ThemeCreateNestedOneWithoutActionsInput
    formateurs?: ActionFormationFormateurCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantCreateNestedManyWithoutActionInput
    attestations?: AttestationCreateNestedManyWithoutActionInput
    seances?: SeanceCreateNestedManyWithoutActionInput
  }

  export type ActionFormationUncheckedCreateWithoutFilesInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
    theme_id: number
    formateurs?: ActionFormationFormateurUncheckedCreateNestedManyWithoutActionInput
    participants?: ActionFormationParticipantUncheckedCreateNestedManyWithoutActionInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutActionInput
    seances?: SeanceUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionFormationCreateOrConnectWithoutFilesInput = {
    where: ActionFormationWhereUniqueInput
    create: XOR<ActionFormationCreateWithoutFilesInput, ActionFormationUncheckedCreateWithoutFilesInput>
  }

  export type FormateurUpsertWithoutFilesInput = {
    update: XOR<FormateurUpdateWithoutFilesInput, FormateurUncheckedUpdateWithoutFilesInput>
    create: XOR<FormateurCreateWithoutFilesInput, FormateurUncheckedCreateWithoutFilesInput>
    where?: FormateurWhereInput
  }

  export type FormateurUpdateToOneWithWhereWithoutFilesInput = {
    where?: FormateurWhereInput
    data: XOR<FormateurUpdateWithoutFilesInput, FormateurUncheckedUpdateWithoutFilesInput>
  }

  export type FormateurUpdateWithoutFilesInput = {
    user?: UserUpdateOneRequiredWithoutFormateurNestedInput
    actions?: ActionFormationFormateurUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUpdateManyWithoutFormateurNestedInput
  }

  export type FormateurUncheckedUpdateWithoutFilesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationFormateurUncheckedUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutFormateurNestedInput
    presences?: PresenceUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type ActionFormationUpsertWithoutFilesInput = {
    update: XOR<ActionFormationUpdateWithoutFilesInput, ActionFormationUncheckedUpdateWithoutFilesInput>
    create: XOR<ActionFormationCreateWithoutFilesInput, ActionFormationUncheckedCreateWithoutFilesInput>
    where?: ActionFormationWhereInput
  }

  export type ActionFormationUpdateToOneWithWhereWithoutFilesInput = {
    where?: ActionFormationWhereInput
    data: XOR<ActionFormationUpdateWithoutFilesInput, ActionFormationUncheckedUpdateWithoutFilesInput>
  }

  export type ActionFormationUpdateWithoutFilesInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: ThemeUpdateOneRequiredWithoutActionsNestedInput
    formateurs?: ActionFormationFormateurUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUpdateManyWithoutActionNestedInput
    attestations?: AttestationUpdateManyWithoutActionNestedInput
    seances?: SeanceUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateWithoutFilesInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    theme_id?: IntFieldUpdateOperationsInput | number
    formateurs?: ActionFormationFormateurUncheckedUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUncheckedUpdateManyWithoutActionNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutActionNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ParticipantCreateWithoutPresencesInput = {
    entreprise: string
    poste: string
    user: UserCreateNestedOneWithoutParticipantInput
    actions?: ActionFormationParticipantCreateNestedManyWithoutParticipantInput
    attestations?: AttestationCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantUncheckedCreateWithoutPresencesInput = {
    user_id: string
    entreprise: string
    poste: string
    actions?: ActionFormationParticipantUncheckedCreateNestedManyWithoutParticipantInput
    attestations?: AttestationUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type ParticipantCreateOrConnectWithoutPresencesInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutPresencesInput, ParticipantUncheckedCreateWithoutPresencesInput>
  }

  export type SeanceCreateWithoutPresencesInput = {
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    action: ActionFormationCreateNestedOneWithoutSeancesInput
    formateur: FormateurCreateNestedOneWithoutSeancesInput
  }

  export type SeanceUncheckedCreateWithoutPresencesInput = {
    seance_id?: number
    action_id: number
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    formateur_id: string
  }

  export type SeanceCreateOrConnectWithoutPresencesInput = {
    where: SeanceWhereUniqueInput
    create: XOR<SeanceCreateWithoutPresencesInput, SeanceUncheckedCreateWithoutPresencesInput>
  }

  export type FormateurCreateWithoutPresencesInput = {
    user: UserCreateNestedOneWithoutFormateurInput
    actions?: ActionFormationFormateurCreateNestedManyWithoutFormateurInput
    seances?: SeanceCreateNestedManyWithoutFormateurInput
    files?: FileCreateNestedManyWithoutFormateurInput
  }

  export type FormateurUncheckedCreateWithoutPresencesInput = {
    user_id: string
    actions?: ActionFormationFormateurUncheckedCreateNestedManyWithoutFormateurInput
    seances?: SeanceUncheckedCreateNestedManyWithoutFormateurInput
    files?: FileUncheckedCreateNestedManyWithoutFormateurInput
  }

  export type FormateurCreateOrConnectWithoutPresencesInput = {
    where: FormateurWhereUniqueInput
    create: XOR<FormateurCreateWithoutPresencesInput, FormateurUncheckedCreateWithoutPresencesInput>
  }

  export type ParticipantUpsertWithoutPresencesInput = {
    update: XOR<ParticipantUpdateWithoutPresencesInput, ParticipantUncheckedUpdateWithoutPresencesInput>
    create: XOR<ParticipantCreateWithoutPresencesInput, ParticipantUncheckedCreateWithoutPresencesInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutPresencesInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutPresencesInput, ParticipantUncheckedUpdateWithoutPresencesInput>
  }

  export type ParticipantUpdateWithoutPresencesInput = {
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutParticipantNestedInput
    actions?: ActionFormationParticipantUpdateManyWithoutParticipantNestedInput
    attestations?: AttestationUpdateManyWithoutParticipantNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutPresencesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    entreprise?: StringFieldUpdateOperationsInput | string
    poste?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationParticipantUncheckedUpdateManyWithoutParticipantNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type SeanceUpsertWithoutPresencesInput = {
    update: XOR<SeanceUpdateWithoutPresencesInput, SeanceUncheckedUpdateWithoutPresencesInput>
    create: XOR<SeanceCreateWithoutPresencesInput, SeanceUncheckedCreateWithoutPresencesInput>
    where?: SeanceWhereInput
  }

  export type SeanceUpdateToOneWithWhereWithoutPresencesInput = {
    where?: SeanceWhereInput
    data: XOR<SeanceUpdateWithoutPresencesInput, SeanceUncheckedUpdateWithoutPresencesInput>
  }

  export type SeanceUpdateWithoutPresencesInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    action?: ActionFormationUpdateOneRequiredWithoutSeancesNestedInput
    formateur?: FormateurUpdateOneRequiredWithoutSeancesNestedInput
  }

  export type SeanceUncheckedUpdateWithoutPresencesInput = {
    seance_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    formateur_id?: StringFieldUpdateOperationsInput | string
  }

  export type FormateurUpsertWithoutPresencesInput = {
    update: XOR<FormateurUpdateWithoutPresencesInput, FormateurUncheckedUpdateWithoutPresencesInput>
    create: XOR<FormateurCreateWithoutPresencesInput, FormateurUncheckedCreateWithoutPresencesInput>
    where?: FormateurWhereInput
  }

  export type FormateurUpdateToOneWithWhereWithoutPresencesInput = {
    where?: FormateurWhereInput
    data: XOR<FormateurUpdateWithoutPresencesInput, FormateurUncheckedUpdateWithoutPresencesInput>
  }

  export type FormateurUpdateWithoutPresencesInput = {
    user?: UserUpdateOneRequiredWithoutFormateurNestedInput
    actions?: ActionFormationFormateurUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUpdateManyWithoutFormateurNestedInput
    files?: FileUpdateManyWithoutFormateurNestedInput
  }

  export type FormateurUncheckedUpdateWithoutPresencesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationFormateurUncheckedUpdateManyWithoutFormateurNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutFormateurNestedInput
    files?: FileUncheckedUpdateManyWithoutFormateurNestedInput
  }

  export type UserCreateManyRoleInput = {
    user_id: string
    email: string
    nom: string
    prenom: string
    telephone: string
  }

  export type UserUpdateWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    formateur?: FormateurUpdateOneWithoutUserNestedInput
    participant?: ParticipantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    formateur?: FormateurUncheckedUpdateOneWithoutUserNestedInput
    participant?: ParticipantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationFormateurCreateManyFormateurInput = {
    action_id: number
  }

  export type SeanceCreateManyFormateurInput = {
    seance_id?: number
    action_id: number
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
  }

  export type FileCreateManyFormateurInput = {
    file_id?: number
    file_path: string
    type: $Enums.FileType
    action_id?: number | null
    validated?: boolean | null
    validated_at?: Date | string | null
  }

  export type PresenceCreateManyFormateurInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant_id: string
    seance_id: number
  }

  export type ActionFormationFormateurUpdateWithoutFormateurInput = {
    action?: ActionFormationUpdateOneRequiredWithoutFormateursNestedInput
  }

  export type ActionFormationFormateurUncheckedUpdateWithoutFormateurInput = {
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionFormationFormateurUncheckedUpdateManyWithoutFormateurInput = {
    action_id?: IntFieldUpdateOperationsInput | number
  }

  export type SeanceUpdateWithoutFormateurInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    action?: ActionFormationUpdateOneRequiredWithoutSeancesNestedInput
    presences?: PresenceUpdateManyWithoutSeanceNestedInput
  }

  export type SeanceUncheckedUpdateWithoutFormateurInput = {
    seance_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    presences?: PresenceUncheckedUpdateManyWithoutSeanceNestedInput
  }

  export type SeanceUncheckedUpdateManyWithoutFormateurInput = {
    seance_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
  }

  export type FileUpdateWithoutFormateurInput = {
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    action?: ActionFormationUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutFormateurInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    action_id?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUncheckedUpdateManyWithoutFormateurInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    action_id?: NullableIntFieldUpdateOperationsInput | number | null
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PresenceUpdateWithoutFormateurInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutPresencesNestedInput
    seance?: SeanceUpdateOneRequiredWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateWithoutFormateurInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_id?: StringFieldUpdateOperationsInput | string
    seance_id?: IntFieldUpdateOperationsInput | number
  }

  export type PresenceUncheckedUpdateManyWithoutFormateurInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_id?: StringFieldUpdateOperationsInput | string
    seance_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionFormationParticipantCreateManyParticipantInput = {
    action_id: number
    date_inscription?: Date | string | null
    statut?: string | null
  }

  export type AttestationCreateManyParticipantInput = {
    attestation_id?: number
    action_id: number
    date_emission?: Date | string | null
    qr_code_ref?: string | null
  }

  export type PresenceCreateManyParticipantInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    seance_id: number
    formateur_id?: string | null
  }

  export type ActionFormationParticipantUpdateWithoutParticipantInput = {
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    action?: ActionFormationUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ActionFormationParticipantUncheckedUpdateWithoutParticipantInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionFormationParticipantUncheckedUpdateManyWithoutParticipantInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttestationUpdateWithoutParticipantInput = {
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
    action?: ActionFormationUpdateOneRequiredWithoutAttestationsNestedInput
  }

  export type AttestationUncheckedUpdateWithoutParticipantInput = {
    attestation_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttestationUncheckedUpdateManyWithoutParticipantInput = {
    attestation_id?: IntFieldUpdateOperationsInput | number
    action_id?: IntFieldUpdateOperationsInput | number
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PresenceUpdateWithoutParticipantInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seance?: SeanceUpdateOneRequiredWithoutPresencesNestedInput
    formateur?: FormateurUpdateOneWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateWithoutParticipantInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seance_id?: IntFieldUpdateOperationsInput | number
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PresenceUncheckedUpdateManyWithoutParticipantInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seance_id?: IntFieldUpdateOperationsInput | number
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThemeCreateManyDomaineInput = {
    theme_id?: number
    libelle_theme: string
  }

  export type ThemeUpdateWithoutDomaineInput = {
    libelle_theme?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateWithoutDomaineInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: StringFieldUpdateOperationsInput | string
    actions?: ActionFormationUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type ThemeUncheckedUpdateManyWithoutDomaineInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationCreateManyThemeInput = {
    action_id?: number
    type_action: string
    date_debut: Date | string
    date_fin: Date | string
    duree_jours?: number | null
    duree_heures?: number | null
    nb_seances?: number | null
    lieu: string
    nb_participants_prevu?: number | null
  }

  export type ActionFormationUpdateWithoutThemeInput = {
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    formateurs?: ActionFormationFormateurUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUpdateManyWithoutActionNestedInput
    attestations?: AttestationUpdateManyWithoutActionNestedInput
    seances?: SeanceUpdateManyWithoutActionNestedInput
    files?: FileUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateWithoutThemeInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
    formateurs?: ActionFormationFormateurUncheckedUpdateManyWithoutActionNestedInput
    participants?: ActionFormationParticipantUncheckedUpdateManyWithoutActionNestedInput
    attestations?: AttestationUncheckedUpdateManyWithoutActionNestedInput
    seances?: SeanceUncheckedUpdateManyWithoutActionNestedInput
    files?: FileUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionFormationUncheckedUpdateManyWithoutThemeInput = {
    action_id?: IntFieldUpdateOperationsInput | number
    type_action?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    duree_jours?: NullableIntFieldUpdateOperationsInput | number | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    nb_seances?: NullableIntFieldUpdateOperationsInput | number | null
    lieu?: StringFieldUpdateOperationsInput | string
    nb_participants_prevu?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActionFormationFormateurCreateManyActionInput = {
    formateur_id: string
  }

  export type ActionFormationParticipantCreateManyActionInput = {
    participant_id: string
    date_inscription?: Date | string | null
    statut?: string | null
  }

  export type AttestationCreateManyActionInput = {
    attestation_id?: number
    participant_id: string
    date_emission?: Date | string | null
    qr_code_ref?: string | null
  }

  export type SeanceCreateManyActionInput = {
    seance_id?: number
    date?: Date | string | null
    heure?: string | null
    duree_heures?: number | null
    statut?: $Enums.SeanceStatut
    formateur_id: string
  }

  export type FileCreateManyActionInput = {
    file_id?: number
    file_path: string
    type: $Enums.FileType
    formateur_id?: string | null
    validated?: boolean | null
    validated_at?: Date | string | null
  }

  export type ActionFormationFormateurUpdateWithoutActionInput = {
    formateur?: FormateurUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionFormationFormateurUncheckedUpdateWithoutActionInput = {
    formateur_id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationFormateurUncheckedUpdateManyWithoutActionInput = {
    formateur_id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionFormationParticipantUpdateWithoutActionInput = {
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    participant?: ParticipantUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionFormationParticipantUncheckedUpdateWithoutActionInput = {
    participant_id?: StringFieldUpdateOperationsInput | string
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionFormationParticipantUncheckedUpdateManyWithoutActionInput = {
    participant_id?: StringFieldUpdateOperationsInput | string
    date_inscription?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttestationUpdateWithoutActionInput = {
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
    participant?: ParticipantUpdateOneRequiredWithoutAttestationsNestedInput
  }

  export type AttestationUncheckedUpdateWithoutActionInput = {
    attestation_id?: IntFieldUpdateOperationsInput | number
    participant_id?: StringFieldUpdateOperationsInput | string
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttestationUncheckedUpdateManyWithoutActionInput = {
    attestation_id?: IntFieldUpdateOperationsInput | number
    participant_id?: StringFieldUpdateOperationsInput | string
    date_emission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qr_code_ref?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeanceUpdateWithoutActionInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    formateur?: FormateurUpdateOneRequiredWithoutSeancesNestedInput
    presences?: PresenceUpdateManyWithoutSeanceNestedInput
  }

  export type SeanceUncheckedUpdateWithoutActionInput = {
    seance_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    formateur_id?: StringFieldUpdateOperationsInput | string
    presences?: PresenceUncheckedUpdateManyWithoutSeanceNestedInput
  }

  export type SeanceUncheckedUpdateManyWithoutActionInput = {
    seance_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    duree_heures?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumSeanceStatutFieldUpdateOperationsInput | $Enums.SeanceStatut
    formateur_id?: StringFieldUpdateOperationsInput | string
  }

  export type FileUpdateWithoutActionInput = {
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    formateur?: FormateurUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutActionInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FileUncheckedUpdateManyWithoutActionInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    type?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
    validated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    validated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PresenceCreateManySeanceInput = {
    presence_id?: number
    status?: $Enums.PresenceStatus
    noted_at?: Date | string
    participant_id: string
    formateur_id?: string | null
  }

  export type PresenceUpdateWithoutSeanceInput = {
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: ParticipantUpdateOneRequiredWithoutPresencesNestedInput
    formateur?: FormateurUpdateOneWithoutPresencesNestedInput
  }

  export type PresenceUncheckedUpdateWithoutSeanceInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_id?: StringFieldUpdateOperationsInput | string
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PresenceUncheckedUpdateManyWithoutSeanceInput = {
    presence_id?: IntFieldUpdateOperationsInput | number
    status?: EnumPresenceStatusFieldUpdateOperationsInput | $Enums.PresenceStatus
    noted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_id?: StringFieldUpdateOperationsInput | string
    formateur_id?: NullableStringFieldUpdateOperationsInput | string | null
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