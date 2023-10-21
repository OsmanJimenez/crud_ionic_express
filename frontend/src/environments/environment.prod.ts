import { version_env } from 'src/environments/version'

export const environment = {
  production: true,
  timeSession: 60, // Expresado en minutos
  localStorage: 'crud_express_user_info_qa',
  apiUrl: 'http://localhost:3000',
  version: version_env.number + ' - p',
  date: version_env.date,
  remainingTimeInSeconds: 0, // Variable donde se almacena el tiempo restante
  logoutTimeout: undefined as any
}
