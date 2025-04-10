
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.RoleScalarFieldEnum = {
  role_id: 'role_id',
  role_name: 'role_name'
};

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  email: 'email',
  nom: 'nom',
  prenom: 'prenom',
  telephone: 'telephone',
  role_id: 'role_id'
};

exports.Prisma.FormateurScalarFieldEnum = {
  user_id: 'user_id'
};

exports.Prisma.ParticipantScalarFieldEnum = {
  user_id: 'user_id',
  entreprise: 'entreprise',
  poste: 'poste'
};

exports.Prisma.DomaineScalarFieldEnum = {
  domaine_id: 'domaine_id',
  libelle_domaine: 'libelle_domaine'
};

exports.Prisma.ThemeScalarFieldEnum = {
  theme_id: 'theme_id',
  libelle_theme: 'libelle_theme',
  domaine_id: 'domaine_id'
};

exports.Prisma.ActionFormationScalarFieldEnum = {
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

exports.Prisma.SeanceScalarFieldEnum = {
  seance_id: 'seance_id',
  action_id: 'action_id',
  date: 'date',
  heure: 'heure',
  duree_heures: 'duree_heures',
  statut: 'statut',
  formateur_id: 'formateur_id'
};

exports.Prisma.ActionFormationFormateurScalarFieldEnum = {
  action_id: 'action_id',
  formateur_id: 'formateur_id'
};

exports.Prisma.ActionFormationParticipantScalarFieldEnum = {
  action_id: 'action_id',
  participant_id: 'participant_id',
  date_inscription: 'date_inscription',
  statut: 'statut'
};

exports.Prisma.AttestationScalarFieldEnum = {
  attestation_id: 'attestation_id',
  participant_id: 'participant_id',
  action_id: 'action_id',
  date_emission: 'date_emission',
  qr_code_ref: 'qr_code_ref'
};

exports.Prisma.FileScalarFieldEnum = {
  file_id: 'file_id',
  file_path: 'file_path',
  type: 'type',
  formateur_id: 'formateur_id',
  action_id: 'action_id',
  validated: 'validated',
  validated_at: 'validated_at'
};

exports.Prisma.PresenceScalarFieldEnum = {
  presence_id: 'presence_id',
  status: 'status',
  noted_at: 'noted_at',
  participant_id: 'participant_id',
  seance_id: 'seance_id',
  formateur_id: 'formateur_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.RoleName = exports.$Enums.RoleName = {
  ADMIN: 'ADMIN',
  Gestionnaire: 'Gestionnaire',
  FORMATEUR: 'FORMATEUR',
  PARTICIPANT: 'PARTICIPANT'
};

exports.SeanceStatut = exports.$Enums.SeanceStatut = {
  EN_ATTENTE: 'EN_ATTENTE',
  EN_COURS: 'EN_COURS',
  TERMINEE: 'TERMINEE',
  ANNULEE: 'ANNULEE'
};

exports.FileType = exports.$Enums.FileType = {
  CV: 'CV',
  BADGE: 'BADGE',
  FEUILLE_EMARGEMENT: 'FEUILLE_EMARGEMENT'
};

exports.PresenceStatus = exports.$Enums.PresenceStatus = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
