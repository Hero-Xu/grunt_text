	'use strict';//令一下代码遵守es5的严格模式

//包装函数
module.exports = function (grunt) {
	//任务配置，所有的插件配置信息
	grunt.initConfig({
		
		//获取package.json的信息
		pkg: grunt.file.readJSON('package.json'),

			//uglify的配置信息
		uglify: {
			options: {
				StripBanners: true,
				banner: '/*! <%pkg.name%>-<%pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'build/js/*.js',
				dest: 'build/js/<%=pkg.name%>-<%=pkg.version%>.min.js'
			}
		},
		jshint: {
			build: ['Gruntfile.js', 'src/js/*.js','build/js/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		imagemin: {  
            /* 压缩图片大小 */  
            dist: {  
                options: {  
                    optimizationLevel: 3 //定义 PNG 图片优化水平  
                },  
                files: [  
                       {  
                    expand: true,  
                    cwd: 'src/img/',  
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片  
                    dest: 'src/img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示  
                    }  
                    ]  
                }  
        },
        cssmin: {
        	options: {
				StripBanners: true,
				banner: '/*! <%pkg.name%>-<%pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/test.js',
				dest: 'build/css/<%=pkg.name%>-<%=pkg.version%>.js.min.css'
			}
        },
        concat: {
            build:{
                src:['src/js/test1.js', 'src/js/test2.js'],
                dest:'build/js/test1-test2.js'
            }
        },
        clean: {
        	
        	src: 'src/js/test1.js'

        }
	});
	require('time-grunt')(grunt);//用到相应插件的时间
	
	require('load-grunt-tasks')(grunt);//一个插件 会直接告诉grunt将使用package.json里面安装的插件

	//告诉grunt我们将使用插件

	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-imagemin');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-concat');

	//告诉grunt当我们在终端输入grunt的时候需要做些什么（注意先后顺序）
	grunt.registerTask('default', ['jshint', 'concat' , 'uglify', 'cssmin', 'imagemin']);

	
};