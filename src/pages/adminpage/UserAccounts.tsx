import { AccountActionMenu } from "@/components/PageComponents/adminpage/accounts/AccountActionMenu";
import { UserStatCard } from "@/components/PageComponents/adminpage/accounts/UserStatCard";
import { UserProfileImg } from "@/components/PageComponents/sharedcomponents/UserProfileImg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ChevronFirstIcon } from "@/components/ui/chevron-first-icon";
import { ChevronLastIcon } from "@/components/ui/chevron-last-icon";
import { CircleDotIcon } from "@/components/ui/circle-dot-icon";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { accountQueryChoiceOptions, rowsPerPageOption } from "@/lib/data";
import { ChevronLeftIcon, ChevronRightIcon, FilterIcon, SearchIcon, TrendingUp } from "@animateicons/react/lucide";
import { useState } from "react";

export const AdminUserAccounts = () => {
  const [tabValue, setTabValue] = useState("all");

  return (
    <>
      <div className="p-1 pt-2 pb-10 space-y-6">
        <section className="px-4">
          <p className="font-semibold">User Account Statistics</p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Total Users"} figure={10345} trend={"+12.5%"} trendicon={TrendingUp} />

            <UserStatCard title={"Total Learners"} figure={10000} trend={"+2.5%"} trendicon={TrendingUp} />

            <UserStatCard title={"Total Tutors"} figure={345} trend={"+10.5%"} trendicon={TrendingUp} />
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <UserStatCard title={"Premium Accounts"} figure={9234} trendicon={CircleDotIcon} />

            <UserStatCard title={"Free Accounts"} figure={1000} trendicon={CircleDotIcon} />

            <UserStatCard title={"Suspended Accounts"} figure={345} trendicon={CircleDotIcon} />
          </div>
        </section>

        <section className="px-4">
          <p className="font-semibold">Account Details & Status</p>

          <div className="w-full px-4 pt-2">
            <Card>
              <CardHeader>
                <section className="flex flex-row justify-between items-center gap-4 h-10">
                  <InputGroup className="h-full">
                    <InputGroupAddon align="inline-start">
                      <SearchIcon className="size-4" />
                    </InputGroupAddon>

                    <InputGroupInput type="text" className="text-[14px]!" placeholder="Search Account...." />
                  </InputGroup>

                  <Select items={accountQueryChoiceOptions} defaultValue={accountQueryChoiceOptions[0]} onValueChange={(value) => console.log(value)}>
                    <SelectTrigger className="w-fit min-w-2/12 h-full!">
                      <FilterIcon />
                      <SelectValue className="text-[13px]! font-semibold" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Accounts</SelectLabel>
                        {accountQueryChoiceOptions.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </section>
              </CardHeader>

              <CardContent>
                <section className="pt-3">
                  <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setTabValue(value)}>
                    <TabsList className="space-x-3">
                      <TabsTrigger className="account_tab_trigger" value="all">
                        All
                      </TabsTrigger>
                      <TabsTrigger className="account_tab_trigger" value="free">
                        Free
                      </TabsTrigger>
                      <TabsTrigger className="account_tab_trigger" value="premium">
                        Premium
                      </TabsTrigger>
                      <TabsTrigger className="account_tab_trigger" value="active">
                        Active
                      </TabsTrigger>
                      <TabsTrigger className="account_tab_trigger" value="inactive">
                        Inactive
                      </TabsTrigger>
                      <TabsTrigger className="account_tab_trigger" value="suspended">
                        Suspended
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value={tabValue} className="pt-4">
                      <Table className="border-2">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="table_head_style">User</TableHead>
                            <TableHead className="table_head_style">Role</TableHead>
                            <TableHead className="table_head_style">Status</TableHead>
                            <TableHead className="table_head_style">Date Joined</TableHead>
                            <TableHead className="table_head_style">Last Active Date</TableHead>
                            <TableHead className="table_head_style">Action</TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody>
                          <TableRow>
                            <TableCell className="table_cell_centered">
                              <section className="flex flex-row items-center pl-2 space-x-2">
                                <UserProfileImg
                                  size="size-10"
                                  borderStyle="border-4"
                                  headerImgUrl={
                                    "https://api.dicebear.com/10.x/micah/svg?backgroundColor=e3d2b4&baseColor=d8b48c,c19a70,a37e58&hairColor=5a3d28,6b4f35,7d6047&shirtColor=8a6a48,9c7c58&eyebrowsColor=3f2d1e&eyesColor=3f2d1e&mouthColor=3f2d1e&facialHairColor=3f2d1e&eyeShadowColor=f0e2cc&glassesColor=3f2d1e&earringColor=8a6a48&mouthVariant=frown,nervous,pucker,sad,smile,smirk&seed=4t9tlzqh"
                                  }
                                  altText={"UserImg"}
                                />
                                <article className="w-fit flex flex-col text-start">
                                  <span className="font-semibold text-sm">Kweku Boateng</span>
                                  <span>kwekuaboagye@gmail.com</span>
                                </article>
                              </section>
                            </TableCell>

                            <TableCell className="table_cell_centered">
                              <Badge className="text-amber-600 bg-amber-600/10 text-sm p-4">Admin</Badge>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <Badge className="text-green-500 bg-green-500/10">Active</Badge>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <span className="text-sm tabular-nums font-medium">2018-11-29</span>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <span className="text-sm tabular-nums font-medium">2018-11-29</span>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <AccountActionMenu />
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="table_cell_centered">
                              <section className="flex flex-row items-center pl-2 space-x-2">
                                <UserProfileImg
                                  size="size-10"
                                  borderStyle="border-4"
                                  headerImgUrl={
                                    "https://api.dicebear.com/10.x/avataaars/svg?backgroundColor=e6ecef&skinColor=9ec9e8&hairColor=1d3d52&facialHairColor=1d3d52&clothesColor=37718e&hatColor=1d3d52&accessoriesColor=1d3d52&eyesVariant=closed,default,eyeRoll,happy,side,squint,surprised,wink,winkWacky,xDizzy&mouthVariant=default,disbelief,eating,grimace,sad,serious,twinkle&topVariant=bigHair,bob,bun,curly,curvy,dreads,dreads01,dreads02,frizzle,fro,hat,hijab,longButNotTooLong,miaWallace,shaggy,shaggyMullet,shavedSides,shortCurly,shortFlat,shortRound,shortWaved,sides,straight01,straight02,straightAndStrand,theCaesar,theCaesarAndSidePart,turban,winterHat02,winterHat03,winterHat04,winterHat1&seed=ahqioptu"
                                  }
                                  altText={"UserImg"}
                                />
                                <article className="w-fit flex flex-col text-start">
                                  <span className="font-semibold text-sm">Anobaah Ashun</span>
                                  <span>anobaahAshun@gmail.com</span>
                                </article>
                              </section>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <Badge className="text-purple-600 bg-purple-600/10 text-sm p-4">Learner</Badge>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <Badge className="text-green-500 bg-green-500/10">Active</Badge>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <span className="text-sm tabular-nums font-medium">2018-11-29</span>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <span className="text-sm tabular-nums font-medium">2018-11-29</span>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <AccountActionMenu />
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className="table_cell_centered">
                              <section className="flex flex-row items-center pl-2 space-x-2">
                                <UserProfileImg
                                  size="size-10"
                                  borderStyle="border-4"
                                  headerImgUrl={"https://api.dicebear.com/10.x/avataaars/svg?backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf,d9f2d9&seed=esu5r619"}
                                  altText={"UserImg"}
                                />
                                <article className="w-fit flex flex-col text-start">
                                  <span className="font-semibold text-sm">Ato Francis Ashun</span>
                                  <span>atofrancis@gmail.com</span>
                                </article>
                              </section>
                            </TableCell>

                            <TableCell className="table_cell_centered">
                              <Badge className="text-teal-600 bg-teal-600/10 text-sm p-4">Tutor</Badge>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <Badge variant="destructive">Inactive</Badge>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <span className="text-sm tabular-nums font-medium">2018-11-29</span>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <span className="text-sm tabular-nums font-medium">2018-11-29</span>
                            </TableCell>
                            <TableCell className="table_cell_centered">
                              <AccountActionMenu />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                  </Tabs>
                </section>
              </CardContent>

              <CardFooter>
                <section className="w-full flex flex-row justify-between items-center">
                  <span>Showing 1 to 5 of 8 entries</span>

                  <div className="flex flex-row space-x-4">
                    <section className="flex flex-row justify-center items-center space-x-3">
                      <p>Rows per page</p>

                      <article className="flex flex-row space-x-1">
                        <Select items={rowsPerPageOption} defaultValue={rowsPerPageOption[0]} onValueChange={(value) => console.log(value)}>
                          <SelectTrigger className="w-fit min-w-2/12 h-full!">
                            <SelectValue className="text-[13px]! font-semibold" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Accounts</SelectLabel>
                              {rowsPerPageOption.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </article>
                    </section>

                    <section className="flex flex-row justify-center items-center space-x-3">
                      <p>Page 1 of 1</p>

                      <article className="flex flex-row space-x-1">
                        <Button size="icon" variant="ghost" className="border border-primary">
                          <ChevronFirstIcon />
                        </Button>
                        <Button size="icon" variant="ghost" className="border border-primary">
                          <ChevronLeftIcon />
                        </Button>
                        <Button size="icon" variant="ghost" className="border border-primary">
                          <ChevronRightIcon />
                        </Button>
                        <Button size="icon" variant="ghost" className="border border-primary">
                          <ChevronLastIcon />
                        </Button>
                      </article>
                    </section>
                  </div>
                </section>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};
