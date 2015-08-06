class AdministaGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('../templates', __FILE__)

  argument :name,  type: :string, required: false, default: ""
  class_option :init,       type: "boolean", default: false
  class_option :namespace,  type: "string", default: "", aliases: '-n'
  class_option :base_class, type: "string", default: "", aliases: '-b'

  def initialize(args, *options)
    super

    if !self.options[:init] && self.name.blank?
      raise ArgumentError, "No value provided for required arguments 'name'"
    end
  end

  def initialize_options
    @options = options.dup
    if @options[:namespace].blank?
      @options[:namespace] = Administa.config.namespace.to_s
    end
    if @options[:base_class].blank?
      @options[:base_class] = Administa.config.base_controller.to_s
    end
  end

  # connfig/initializers/administa.rb
  def create_initializers
    return if File.exist? "config/initializers/administa.rb"

    # generate
    initializer "administa.rb",  <<-RUBY_CODE.strip_heredoc
      Administa.config do |config|

        # Authentication settings
        #
        # config.current_user_method { current_user }
        # config.user_name_proc      {|user| user.try(:name) }
        # config.user_email_proc     {|user| user.try(:email) }
        # config.authenticate_with   { warden.authenticate! :scope => :user }

        # Menu settings
        #
        config.menu do
          #  label "Authors"
          #  group Administa::AuthorsController do
          #    menu Administa::BooksController
          #  end
          #
          #  menu Administa::OrdersController
        end

      end
    RUBY_CODE
  end

  def append_menu
    return if @options[:init]


    # append menu Administa::FooController
    insert_into_file "config/initializers/administa.rb",
                     "    menu #{@options[:namespace].camelize}::#{class_name.pluralize}Controller\n",
                     after: "config.menu do\n"

  end

  # app/controllers/administa/foo_controller.rb
  def generate_controller
    return if @options[:init]

    dest = File.join("app", "controllers", @options[:namespace])

    # create dir
    empty_directory dest unless File.exist? dest

    # generate controller
    template "controller.rb", File.join(dest, "#{file_name.pluralize}_controller.rb")
  end
end
