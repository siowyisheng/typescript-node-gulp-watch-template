import { user } from './user'

function greeter(person: string): string {
  return 'Hello, ' + person
}

console.log(greeter(user))
