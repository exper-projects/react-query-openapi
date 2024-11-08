import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user', timestamps: true })
export class UserModel {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: false })
  age: number;

  @Prop({ type: Date, required: false })
  dateOfBirth: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
