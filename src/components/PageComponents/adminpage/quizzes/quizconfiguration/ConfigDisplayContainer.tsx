import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useQuizPageStore } from "@/statemanagers/adminpagestate/QuizPageStore";
import { quizConfigSchema, type QuizConfigType } from "@/typesnschemas/schemas/QuizSchema";
import type { ConfigUpdateStatusType } from "@/typesnschemas/types/DataTypes";
import { useIconHover } from "@animateicons/react";
import { CirclePlusIcon, HouseIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckIcon, CircleXIcon, LayersIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ConfigurationItem } from "./ConfigItem";

export const ConfigDifficultyDisplay = () => {
  return (
    <>
      <div className="px-10 py-3 space-y-4">
        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Nursery" type="difficulty" />
          <ConfigurationItem name="Basic" type="difficulty" />
          <ConfigurationItem name="Secondary" type="difficulty" />
          <ConfigurationItem name="Tetiary" type="difficulty" />
        </section>
      </div>
    </>
  );
};

export const ConfigLevelDisplay = () => {
  const { configQueryData, clearConfigQueryData, setselectedConfiguration } = useQuizPageStore();
  const { ref: homeRef, triggerProps: hometrigger } = useIconHover({ trigger: "hover" });
  const { ref: addRef, triggerProps: addtrigger } = useIconHover({ trigger: "hover" });

  const [showInput, setShowInput] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const [uploadStatus, setUploadStatus] = useState<ConfigUpdateStatusType>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<QuizConfigType>({
    resolver: zodResolver(quizConfigSchema),
  });

  const handleLevelUpload: SubmitHandler<QuizConfigType> = (data) => {
    setAcceptLoading(true);
    setTimeout(() => {
      const refinedLevelRequestData = { difficulty: configQueryData.difficulty, name: data.name };
      console.log("Level Added", refinedLevelRequestData);
      setAcceptLoading(false);

      showUploadStatusBadge("success");
      formReset();
    }, 1000);
  };

  const showUploadStatusBadge = (status: ConfigUpdateStatusType) => {
    setUploadStatus(status);
    setTimeout(() => {
      setUploadStatus(null);
    }, 1000);
  };

  return (
    <>
      <div className="px-10 pt-1 space-y-4">
        <section className="flex flex-row gap-2">
          <Button
            onClick={() => {
              setselectedConfiguration(0);
              clearConfigQueryData();
            }}
            className="px-4 h-10"
            variant={"ghost"}
            {...hometrigger}
          >
            <HouseIcon ref={homeRef} />
          </Button>

          <Button onClick={() => setShowInput(true)} className="px-10 h-10" {...addtrigger}>
            <CirclePlusIcon ref={addRef} />
            Add Level
          </Button>
        </section>

        {showInput && (
          <div className="flex flex-col">
            <section className="w-fit flex flex-row items-center gap-2">
              <form id="config-input-form" onSubmit={handleSubmit(handleLevelUpload)}>
                <Input className="min-w-60" {...register("name")} type="text" placeholder="Type the level here....." />
              </form>

              <div className="w-fit flex flex-row items-center gap-2">
                {acceptLoading && <Spinner className="mr-0! size-3!" />}

                <Button type="submit" form="config-input-form" className="size-7 text-white bg-green-500 rounded-full hover:text-green-500" variant="ghost">
                  <CircleCheckIcon />
                </Button>

                <Button
                  onClick={() => {
                    setShowInput(false);
                    formReset();
                  }}
                  className="size-7 text-white bg-destructive rounded-full hover:text-destructive"
                  variant="ghost"
                >
                  <CircleXIcon />
                </Button>
              </div>

              {uploadStatus == "success" && (
                <Badge className="badge_in_table text-green-500 bg-green-500/10">
                  <LayersIcon className="size-3" />
                  Level Added
                </Badge>
              )}

              {uploadStatus == "failure" && (
                <Badge className="badge_in_table text-destructive bg-destructive/10">
                  <XIcon className="size-3" />
                  Level Not Added
                </Badge>
              )}
            </section>

            {errors && <p className="text-[12px] font-medium text-destructive">{errors.name?.message}</p>}
          </div>
        )}

        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Level 1" type="level" />
          <ConfigurationItem name="Level 2" type="level" />
          <ConfigurationItem name="Level 3" type="level" />
          <ConfigurationItem name="Level 4" type="level" />
        </section>
      </div>
    </>
  );
};

export const ConfigProgrammeDisplay = () => {
  const { configQueryData } = useQuizPageStore();
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  const [showInput, setShowInput] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const [uploadStatus, setUploadStatus] = useState<ConfigUpdateStatusType>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<QuizConfigType>({
    resolver: zodResolver(quizConfigSchema),
  });

  const handleProgrammeUpload: SubmitHandler<QuizConfigType> = (data) => {
    setAcceptLoading(true);
    setTimeout(() => {
      const refinedProgrammeRequestData = { difficulty: configQueryData.difficulty, level: configQueryData.level, name: data.name };
      console.log("Programme Added", refinedProgrammeRequestData);
      setAcceptLoading(false);

      showUploadStatusBadge("failure");
      formReset();
    }, 1000);
  };

  const showUploadStatusBadge = (status: ConfigUpdateStatusType) => {
    setUploadStatus(status);
    setTimeout(() => {
      setUploadStatus(null);
    }, 1000);
  };

  return (
    <>
      <div className="px-10 pt-1 space-y-4">
        <Button onClick={() => setShowInput(true)} className="px-10 h-10" {...triggerProps}>
          <CirclePlusIcon ref={ref} />
          Add Programme
        </Button>

        {showInput && (
          <div className="flex flex-col">
            <section className="w-fit flex flex-row items-center gap-2">
              <form id="config-input-form" onSubmit={handleSubmit(handleProgrammeUpload)}>
                <Input className="min-w-60" {...register("name")} type="text" placeholder="Type the programme here....." />
              </form>

              <div className="w-fit flex flex-row items-center gap-2">
                {acceptLoading && <Spinner className="mr-0! size-3!" />}

                <Button type="submit" form="config-input-form" className="size-7 text-white bg-green-500 rounded-full hover:text-green-500" variant="ghost">
                  <CircleCheckIcon />
                </Button>

                <Button
                  onClick={() => {
                    setShowInput(false);
                    formReset();
                  }}
                  className="size-7 text-white bg-destructive rounded-full hover:text-destructive"
                  variant="ghost"
                >
                  <CircleXIcon />
                </Button>
              </div>

              {uploadStatus == "success" && (
                <Badge className="badge_in_table text-green-500 bg-green-500/10">
                  <LayersIcon className="size-3" />
                  Level Added
                </Badge>
              )}

              {uploadStatus == "failure" && (
                <Badge className="badge_in_table text-destructive bg-destructive/10">
                  <XIcon className="size-3" />
                  Level Not Added
                </Badge>
              )}
            </section>

            {errors && <p className="text-[12px] font-medium text-destructive">{errors.name?.message}</p>}
          </div>
        )}

        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Arts" type="programme" />
          <ConfigurationItem name="History" type="programme" />
          <ConfigurationItem name="Mathematics" type="programme" />
          <ConfigurationItem name="Science" type="programme" />
        </section>
      </div>
    </>
  );
};

export const ConfigCourseDisplay = () => {
  const { configQueryData } = useQuizPageStore();
  const { ref, triggerProps } = useIconHover({ trigger: "hover" });

  const [showInput, setShowInput] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const [uploadStatus, setUploadStatus] = useState<ConfigUpdateStatusType>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<QuizConfigType>({
    resolver: zodResolver(quizConfigSchema),
  });

  const handleCourseUpload: SubmitHandler<QuizConfigType> = (data) => {
    setAcceptLoading(true);
    setTimeout(() => {
      const refinedCourseRequestData = { difficulty: configQueryData.difficulty, level: configQueryData.level, programme: configQueryData.programme, name: data.name };
      console.log("Course Added", refinedCourseRequestData);
      setAcceptLoading(false);

      showUploadStatusBadge("failure");
      formReset();
    }, 1000);
  };

  const showUploadStatusBadge = (status: ConfigUpdateStatusType) => {
    setUploadStatus(status);
    setTimeout(() => {
      setUploadStatus(null);
    }, 1000);
  };

  return (
    <>
      <div className="px-10 pt-1 space-y-4">
        <Button onClick={() => setShowInput(true)} className="px-10 h-10" {...triggerProps}>
          <CirclePlusIcon ref={ref} />
          Add Course
        </Button>

        {showInput && (
          <div className="flex flex-col">
            <section className="w-fit flex flex-row items-center gap-2">
              <form id="config-input-form" onSubmit={handleSubmit(handleCourseUpload)}>
                <Input className="min-w-60" {...register("name")} type="text" placeholder="Type the course here....." />
              </form>

              <div className="w-fit flex flex-row items-center gap-2">
                {acceptLoading && <Spinner className="mr-0! size-3!" />}

                <Button type="submit" form="config-input-form" className="size-7 text-white bg-green-500 rounded-full hover:text-green-500" variant="ghost">
                  <CircleCheckIcon />
                </Button>

                <Button
                  onClick={() => {
                    setShowInput(false);
                    formReset();
                  }}
                  className="size-7 text-white bg-destructive rounded-full hover:text-destructive"
                  variant="ghost"
                >
                  <CircleXIcon />
                </Button>
              </div>

              {uploadStatus == "success" && (
                <Badge className="badge_in_table text-green-500 bg-green-500/10">
                  <LayersIcon className="size-3" />
                  Level Added
                </Badge>
              )}

              {uploadStatus == "failure" && (
                <Badge className="badge_in_table text-destructive bg-destructive/10">
                  <XIcon className="size-3" />
                  Level Not Added
                </Badge>
              )}
            </section>

            {errors && <p className="text-[12px] font-medium text-destructive">{errors.name?.message}</p>}
          </div>
        )}

        <section className="grid grid-cols-3 gap-3">
          <ConfigurationItem name="Dance" type="course" />
          <ConfigurationItem name="War & Culture" type="course" />
          <ConfigurationItem name="Algebra" type="course" />
          <ConfigurationItem name="Elements" type="course" />
        </section>
      </div>
    </>
  );
};
