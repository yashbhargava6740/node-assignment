// user/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ type: Array, default: [] })
  tree: any[];
}

export const UserSchema = SchemaFactory.createForClass(User);
