import { rest } from "msw";
import { Card } from "../../features/cards/models/card";
import mockedCard from "../mocks/mockCard";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/users/register`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userName || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json([
          {
            userName: "paco",
            password: "paco12345",
          },
        ])
      );
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}/users/login`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userName || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json({
          user: { token: "fakeToken" },
        })
      );
    }
  ),

  rest.get(`${process.env.REACT_APP_API_URL}/cards`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<Card[]>([mockedCard]));
  }),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/cards/${mockedCard.id}`,
    async (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          cardDeleted: {
            id: mockedCard.id,
            status: "Deleted",
          },
        })
      )
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}/cards/badId`,
    async (req, res, ctx) =>
      res(
        ctx.status(400),
        ctx.json({
          cardDeleted: {
            error: "Error deleting card",
          },
        })
      )
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/cards/${mockedCard.id}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          mockedCard,
        })
      );
    }
  ),
];
