//? 사용자를 생성하기 위한 데이터 전송 객체(Data Transfer Object)
export class CreateUserDto {
  readonly firstname: string;
  readonly lastname: string;
}