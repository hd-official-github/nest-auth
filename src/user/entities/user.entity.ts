import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true })
    discordId: string

    @Column()
    username: string

    @Column()
    discriminator: string

    @Column({ nullable: true })
    avatar: string

}
export interface IUser {
    username: string,
    discriminator: string,
    discordId: string,
    avatar: string
}
