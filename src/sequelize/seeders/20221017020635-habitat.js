'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Habitats', [
      //1
      {
        name: 'cueva',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d8grqq3-e5e5fcb8-18aa-4c60-9172-51e135b44b5c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDhncnFxMy1lNWU1ZmNiOC0xOGFhLTRjNjAtOTE3Mi01MWUxMzViNDRiNWMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Iy0uT9y7uDrqfzZHcgVVISa7QuDHjeB0jX7wxAAZQVI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2
      {
        name: 'bosque',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d7i3cm4-dc9f4577-6b7d-4d59-8b46-a15bf5e84209.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDdpM2NtNC1kYzlmNDU3Ny02YjdkLTRkNTktOGI0Ni1hMTViZjVlODQyMDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MAvFmljnNt5yawKRk7Tm-59pAkenmRqY3ZmzVmfsMjI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3
      {
        name: 'pradera',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/dadi2qn-34d3e824-2d4a-4d2c-981e-484bfdabafc4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZGFkaTJxbi0zNGQzZTgyNC0yZDRhLTRkMmMtOTgxZS00ODRiZmRhYmFmYzQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5Qq2eDTw1HyLY4Jin3lYB0Wl_Pez1QOsFmjbSVprqJM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4
      {
        name: 'montaña',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/dadi2ry-676c7fb7-3f44-473c-930b-3ad74b1cba60.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZGFkaTJyeS02NzZjN2ZiNy0zZjQ0LTQ3M2MtOTMwYi0zYWQ3NGIxY2JhNjAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kuEJO0yjgksLtw3K5y09o5QBm1Rid-ze5T1HYcCDwNg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //5
      {
        name: 'raro',
        state: true,
        url:'https://24.media.tumblr.com/1909bc822aa6d9d664b8dd60aca43792/tumblr_mrfhhm5ino1rv6iido1_500.gif',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //6
      {
        name: 'terreno dificil',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d754bta-d3770fb7-ae6c-43b1-a4fa-b458036dcfce.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDc1NGJ0YS1kMzc3MGZiNy1hZTZjLTQzYjEtYTRmYS1iNDU4MDM2ZGNmY2UuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6hg5Eqdj8omQ5NLEvvFsGnfzWQXebp520VNrfI37dK0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //7
      {
        name: 'mar',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d7h7735-8a3c1a3d-629d-4798-bc25-f23c77e42041.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDdoNzczNS04YTNjMWEzZC02MjlkLTQ3OTgtYmMyNS1mMjNjNzdlNDIwNDEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C9FDRJzEBl9Jpe3vZNMI9DECF3DO-XsSHrAYnyIYdHY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //8
      {
        name: 'urbano',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/daj1qif-deffcc5c-5be9-4531-8447-c85b982c97e6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZGFqMXFpZi1kZWZmY2M1Yy01YmU5LTQ1MzEtODQ0Ny1jODViOTgyYzk3ZTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uUMAOZtZ2tgLf66x1gcPNPLCVJPPiDdjWM_oHRuVVbE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //9
      {
        name: 'borde de agua',
        state: true,
        url:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d74z1ro-815407e3-7031-4cd3-8f83-904af67275b8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDc0ejFyby04MTU0MDdlMy03MDMxLTRjZDMtOGY4My05MDRhZjY3Mjc1YjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1BUJ0nD0JxwmePUK4A9snHSk05-sb9JxZz_DJqlkbyk',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Habitats', null, { truncate: true, cascade: true });
  }
};
