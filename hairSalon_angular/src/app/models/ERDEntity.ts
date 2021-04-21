
export abstract class ERDEntity {

  deserialize(obj: object): ERDEntity {
    Object.assign(this, obj);
    return this;
  }
}
