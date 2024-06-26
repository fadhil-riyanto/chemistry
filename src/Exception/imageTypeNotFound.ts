export class imageTypeNotFound extends Error {
    public constructor(name: string, msg: string) {
        super()
        this.name = name
        this.message = msg
    }
}