import { Injectable } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private nameCollection: string = 'user';

  async getUserCollection(): Promise<User[]> {
    const querySnapshot = await getDocs(collection(db, this.nameCollection));

    return querySnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<User, 'id'>;

      return {
        id: doc.id,
        ...data,
      };
    });
  }
}
