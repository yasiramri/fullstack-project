import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { PageContainer } from "../components/PageContainer";
import { SectionContainer } from "../components/SectionContainer";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";

const RegisterPage = () => {
  const form = useForm();

  return (
    <PageContainer>
      <SectionContainer
        padded
        className="flex min-h-[calc(100vh-144px)] w-full flex-col justify-center"
      >
        <Card className="w-full max-w-[480px] self-center">
          <CardHeader className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-primary">Buat Akun</h1>
            <p className="text-muted-foreground">Tanyain Yasir</p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="flex flex-col gap-y-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className="w-full" />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={(field) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" className="w-full" />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <label className="mt-4 flex items-center gap-2">
                  <Checkbox /> Show Password
                </label>

                <Button className="mt-4 w-full">Buat Akun</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default RegisterPage;
