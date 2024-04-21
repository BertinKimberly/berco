import React from "react";
import { useForm } from "react-hook-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const SubscribeForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);

   return (
      <MailchimpSubscribe
         url={url}
         render={({ subscribe, status, message }) => (
            <form
               onSubmit={handleSubmit((formData) => subscribe(formData))}
               className='mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-dark  dark:bg-light p-1 sm:p-2 rounded mx04'
            >
               <input
                  type='email'
                  placeholder='Enter your email'
                  {...register("email", { required: true, maxLength: 80 })}
                  className='w-full bg-transparent pl-2 sm:pl-0 text-light dark:text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1'
               />

               <input
                  type='submit'
                  className='bg-light text-dark   dark:text-white dark:bg-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1'
               />

               {status === "sending" && (
                  <div style={{ color: "blue" }}>Sending...</div>
               )}
               {status === "error" && (
                  <div
                     style={{ color: "red" }}
                     dangerouslySetInnerHTML={{ __html: message }}
                  />
               )}
               {status === "success" && (
                  <div style={{ color: "green" }}>Subscribed!</div>
               )}
            </form>
         )}
      />
   );
};

export default SubscribeForm;
