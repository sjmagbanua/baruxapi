import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.user({ email });

    // If no user or password doesn't match, throw unauthorized
    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }

    // Do not leak password in tokens or responses
    const { password, ...userWithoutPassword } = user;

    // Build a clean JWT payload
    const payload = { sub: user.id, email: user.email };

    // Sign and return JWT
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }
}